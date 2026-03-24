import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './lib/db';
import Inquiry from './models/Inquiry';
import Application from './models/Application';
import Job from './models/Job';
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
      // Force update password to the new one requested by the user
      adminUser.password = adminPassword;
      await adminUser.save();
      console.log('Admin password updated');
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

// Routes
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
