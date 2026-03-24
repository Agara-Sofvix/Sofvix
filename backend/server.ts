import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './lib/db';
import Inquiry from './models/Inquiry';
import Application from './models/Application';
import Job from './models/Job';
import Category from './models/Category';
import { sendInterviewScheduledEmail } from './lib/emailService';
import Admin from './models/Admin';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Simple logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Database Connection and Seeding
const startServer = async () => {
  try {
    await connectDB();
    console.log('Connected to Database');
    
    // Seed Admin User
    const adminEmail = 'admin@agara.com';
    const adminPassword = 'Azhaga1992in!';
    
    const adminUser = await Admin.findOne({ email: adminEmail });
    if (!adminUser) {
      await Admin.create({
        email: adminEmail,
        password: adminPassword
      });
      console.log('Default admin user created');
    } else {
      adminUser.password = adminPassword;
      await adminUser.save();
      console.log('Admin password updated');
    }

    // Seed Categories if empty or incomplete
    const categoryCount = await Category.countDocuments();
    if (categoryCount < 8) {
      console.log('Restoring full product catalog (8 categories)...');
      const initialCategories = [
        { 
          id: "cx-sales", 
          name: "Customer Experience & Sales Systems", 
          slug: "customer-experience-sales",
          icon: "Users",
          overview: "We unify your entire customer lifecycle — from lead generation to post-sales support — into a single intelligent system.",
          capabilities: [
            { name: "Centralized CRM & pipeline management", slug: "crm-pipeline", icon: "Users", description: "A unified platform to manage every stage of your sales funnel." },
            { name: "Omnichannel communication", slug: "omnichannel-communication", icon: "MessageSquare", description: "Engage customers across email, chat, social messaging, and phone." }
          ]
        },
        { 
          id: "marketing", 
          name: "Marketing & Growth Automation", 
          slug: "marketing-growth",
          icon: "Megaphone",
          overview: "We build performance-driven marketing systems that automate engagement and maximize conversion.",
          capabilities: [
            { name: "Email & campaign automation", slug: "email-automation", icon: "Mail", description: "Scale your reach with personalized sequences." }
          ]
        },
        { 
          id: "commerce", 
          name: "Commerce & Revenue Systems", 
          slug: "commerce-revenue",
          icon: "ShoppingCart",
          overview: "We enable seamless selling experiences across both digital and physical channels.",
          capabilities: [
            { name: "Retail POS systems", slug: "retail-pos", icon: "ShoppingCart", description: "Modern point-of-sale systems." }
          ]
        },
        { 
          id: "finance-ops", 
          name: "Finance & Business Operations", 
          slug: "finance-operations",
          icon: "BarChart3",
          overview: "We provide complete financial visibility and operational control through integrated systems.",
          capabilities: [
            { name: "Accounting & financial reporting", slug: "accounting-reporting", icon: "BarChart3", description: "Automated bookkeeping and generation." }
          ]
        },
        { 
          id: "productivity", 
          name: "Workplace Productivity & Collaboration", 
          slug: "productivity-collaboration",
          icon: "Mail",
          overview: "We create a unified digital workplace where teams collaborate efficiently and execute faster.",
          capabilities: [
            { name: "Document collaboration tools", slug: "document-collaboration", icon: "Files", description: "Real-time editing and sharing." }
          ]
        },
        { 
          id: "hr", 
          name: "Human Resources & Workforce Management", 
          slug: "hr-workforce",
          icon: "Users",
          overview: "We streamline the entire employee lifecycle from hiring to performance management.",
          capabilities: [
            { name: "Recruitment & applicant tracking", slug: "recruitment-ats", icon: "Briefcase", description: "Automated job postings and parsing." }
          ]
        },
        { 
          id: "it-security", 
          name: "IT, Security & Developer Ecosystem", 
          slug: "it-security-development",
          icon: "Lock",
          overview: "We build secure, scalable, and high-performance digital infrastructure tailored for modern businesses.",
          capabilities: [
            { name: "Custom application development", slug: "custom-app-dev", icon: "Code2", description: "Bespoke web and mobile applications." }
          ]
        },
        { 
          id: "data-ai", 
          name: "Data, Analytics & IoT Intelligence", 
          slug: "data-analytics-ai",
          icon: "PieChart",
          overview: "We transform raw data into actionable insights and intelligent decision-making systems.",
          capabilities: [
            { name: "BI dashboards", slug: "bi-dashboards", icon: "BarChart3", description: "Visualize core business metrics." }
          ]
        }
      ];

      // Upsert to ensure all 8 are present without deleting user's custom additions if any
      for (const cat of initialCategories) {
        await Category.findOneAndUpdate({ id: cat.id }, cat, { upsert: true });
      }
      console.log('Full catalog restored');
    }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

const JWT_SECRET = process.env.JWT_SECRET || 'agara-sofvix-secure-secret-2026';

// Category API
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await Category.find({}).sort({ createdAt: -1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

app.post('/api/categories', async (req, res) => {
  try {
    const data = {
      ...req.body,
      id: req.body.name.toLowerCase().replace(/\s+/g, '-'),
      slug: req.body.name.toLowerCase().replace(/\s+/g, '-')
    };
    const category = await Category.create(data);
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create category' });
  }
});

app.put('/api/categories/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update category' });
  }
});

app.delete('/api/categories/:id', async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete category' });
  }
});

// Inquiries API
app.get('/api/inquiries', async (req, res) => {
  try {
    const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch inquiries' });
  }
});

app.post('/api/inquiries', async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);
    res.status(201).json(inquiry);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create inquiry' });
  }
});

app.put('/api/inquiries/:id', async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!inquiry) return res.status(404).json({ error: 'Inquiry not found' });
    res.json(inquiry);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update inquiry' });
  }
});

app.delete('/api/inquiries/:id', async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
    if (!inquiry) return res.status(404).json({ error: 'Inquiry not found' });
    res.json({ message: 'Inquiry deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete inquiry' });
  }
});

// Applications API
app.get('/api/applications', async (req, res) => {
  try {
    const applications = await Application.find({}).sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

app.post('/api/applications', async (req, res) => {
  try {
    const { name, email, roleTitle, experience, phone, coverLetter, resume } = req.body;
    const application = await Application.create({
      name,
      email,
      roleTitle,
      experience,
      phone,
      coverLetter,
      resume
    });
    res.status(201).json(application);
  } catch (error: any) {
    console.error('Error creating application:', error);
    res.status(400).json({ error: error.message || 'Failed to create application' });
  }
});

app.put('/api/applications/:id', async (req, res) => {
  try {
    const { status, triggerEmail, interviewDate } = req.body;
    console.log(`Updating application ${req.params.id} to status ${status}`);
    const oldApplication = await Application.findById(req.params.id);
    console.log('Old application found:', oldApplication ? 'Yes' : 'No');
    
    const updateData: any = { status };
    if (interviewDate) {
      updateData.interviewDate = new Date(interviewDate);
    }

    const application = await Application.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );
    console.log('Application updated:', application ? 'Yes' : 'No');
    if (!application) return res.status(404).json({ error: 'Application not found' });
    
    // Send email if status changed to 'Interviewing' or if explicitly requested via triggerEmail
    if (status === 'Interviewing' && (triggerEmail || oldApplication?.status !== 'Interviewing')) {
      console.log('Condition met for sending interview email');
      try {
        console.log(`Sending email to ${application.email} for ${application.name}`);
        await sendInterviewScheduledEmail(
          application.email, 
          application.name, 
          application.roleTitle, 
          updateData.interviewDate || application.interviewDate
        );
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Failed to send interview email:', emailError);
      }
    } else {
      console.log('Condition for email NOT met:', { status, oldStatus: oldApplication?.status });
    }
    
    res.json(application);
  } catch (error) {
    console.error('Update application error:', error);
    res.status(400).json({ error: 'Failed to update application' });
  }
});

app.delete('/api/applications/:id', async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application) return res.status(404).json({ error: 'Application not found' });
    res.json({ message: 'Application deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete application' });
  }
});

// Jobs API
app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

app.post('/api/jobs', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    console.error('Create job error:', error);
    res.status(400).json({ error: 'Failed to create job' });
  }
});

app.delete('/api/jobs/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete job' });
  }
});

// Admin Auth API
app.post('/api/admin/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await admin.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ token, admin: { id: admin._id, email: admin.email } });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Notifications API
app.get('/api/admin/notifications', async (req, res) => {
  try {
    const [inquiries, applications] = await Promise.all([
      Inquiry.find({}).sort({ createdAt: -1 }).limit(10),
      Application.find({}).sort({ createdAt: -1 }).limit(10)
    ]);
    
    const notifications = [
      ...inquiries.map((inq: any) => ({
        _id: inq._id,
        type: 'inquiry',
        title: 'New Inquiry',
        description: `${inq.name} interested in ${inq.service}`,
        createdAt: inq.createdAt
      })),
      ...applications.map((app: any) => ({
        _id: app._id,
        type: 'application',
        title: 'New Application',
        description: `${app.name} applied for ${app.roleTitle}`,
        createdAt: app.createdAt
      }))
    ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    res.json(notifications.slice(0, 15));
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

app.get('/api/admin/verify', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });

    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ valid: true, decoded });
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
});
