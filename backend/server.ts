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
import mongoose from 'mongoose';
import { INITIAL_CATEGORIES } from './lib/initialData';

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'agara-sofvix-secure-secret-2026';

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

    // ALWAYS Sync Production Categories on startup to ensure "by default" availability
    try {
      console.log('Synchronizing production dataset...');
      const categoryCount = await Category.countDocuments();
      if (categoryCount !== INITIAL_CATEGORIES.length) {
        await Category.deleteMany({});
        await Category.create(INITIAL_CATEGORIES);
        console.log(`Successfully forced sync of ${INITIAL_CATEGORIES.length} categories.`);
      } else {
        console.log('Production data already in sync.');
      }
    } catch (seedError) {
      console.error('Seeding failure:', seedError);
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

// Health Check
app.get('/health', async (req, res) => {
  const categoryCount = await Category.countDocuments();
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    dataSync: {
      categories: categoryCount,
      expected: INITIAL_CATEGORIES.length,
      inSync: categoryCount === INITIAL_CATEGORIES.length
    }
  });
});

// Emergency Reset Data
app.get('/api/system/reset-data', async (req, res) => {
  try {
    await Category.deleteMany({});
    await Category.create(INITIAL_CATEGORIES);
    res.json({ message: 'Production data successfully reset and synchronized.', count: INITIAL_CATEGORIES.length });
  } catch (error) {
    res.status(500).json({ error: 'Failed to reset data', details: error });
  }
});

// Category API
app.get('/api/categories', async (req, res) => {
  try {
    const categories = await Category.find({}).sort({ sortOrder: 1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

app.get('/api/categories/slug/:slug', async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch category' });
  }
});

app.post('/api/categories/:id/capabilities', async (req, res) => {
  try {
    const category = await Category.findOne({ 
      $or: [
        { _id: mongoose.isValidObjectId(req.params.id) ? req.params.id : null },
        { id: req.params.id },
        { slug: req.params.id }
      ]
    });
    
    if (!category) return res.status(404).json({ error: 'Category not found' });

    const newCapability = {
      ...req.body,
      slug: req.body.name.toLowerCase().replace(/\s+/g, '-'),
      icon: req.body.icon || 'Zap'
    };

    category.capabilities.push(newCapability);
    await category.save();
    
    res.status(201).json(newCapability);
  } catch (error: any) {
    console.error('Error adding capability:', error);
    res.status(400).json({ error: 'Failed to add capability', details: error.message });
  }
});
app.put('/api/categories/:id/capabilities/:slug', async (req, res) => {
  try {
    const category = await Category.findOne({ 
      $or: [
        { _id: mongoose.isValidObjectId(req.params.id) ? req.params.id : null },
        { id: req.params.id },
        { slug: req.params.id }
      ]
    });
    
    if (!category) return res.status(404).json({ error: 'Category not found' });

    const capabilityIndex = category.capabilities.findIndex((cap: any) => cap.slug === req.params.slug);
    if (capabilityIndex === -1) return res.status(404).json({ error: 'Capability not found' });

    // Update capability fields
    const updatedCap = {
      ...category.capabilities[capabilityIndex].toObject(),
      ...req.body,
      // Ensure slug stays consistent unless explicitly changed
      slug: req.body.slug || category.capabilities[capabilityIndex].slug
    };

    category.capabilities[capabilityIndex] = updatedCap;
    await category.save();
    
    res.json(updatedCap);
  } catch (error: any) {
    console.error('Error updating capability:', error);
    res.status(400).json({ error: 'Failed to update capability', details: error.message });
  }
});

app.delete('/api/categories/:id/capabilities/:slug', async (req, res) => {
  try {
    const category = await Category.findOne({ 
      $or: [
        { _id: mongoose.isValidObjectId(req.params.id) ? req.params.id : null },
        { id: req.params.id },
        { slug: req.params.id }
      ]
    });
    
    if (!category) return res.status(404).json({ error: 'Category not found' });

    category.capabilities = category.capabilities.filter((cap: any) => cap.slug !== req.params.slug);
    await category.save();
    
    res.json({ message: 'Capability deleted successfully' });
  } catch (error: any) {
    res.status(400).json({ error: 'Failed to delete capability' });
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
