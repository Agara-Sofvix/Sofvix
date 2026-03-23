import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import * as path from 'path';

let transporterInstance: nodemailer.Transporter | null = null;
let isEthereal = false;

// Configure transporter with environment variables or use a dynamic test account
const getTransporter = async () => {
  // Always dynamically reload .env in case user changed it without restarting server!
  dotenv.config({ path: path.join(process.cwd(), '.env'), override: true });

  if (transporterInstance && !isEthereal && (process.env.SMTP_USER || process.env.EMAIL_USER)) {
    return { transporter: transporterInstance, isEthereal };
  }

  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  const host = process.env.SMTP_HOST || process.env.EMAIL_HOST || 'smtp.gmail.com';
  const portString = process.env.SMTP_PORT || process.env.EMAIL_PORT;
  const port = portString ? parseInt(portString, 10) : 587;
  
  if (user && pass) {
    transporterInstance = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE === 'true' || process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user,
        pass,
      },
    });
    isEthereal = false;
  } else {
    console.log('\n[EmailService] No SMTP credentials found in .env. Generating a free test Ethereal account...');
    const testAccount = await nodemailer.createTestAccount();
    transporterInstance = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    isEthereal = true;
  }

  return { transporter: transporterInstance, isEthereal };
};

export const sendInterviewScheduledEmail = async (to: string, candidateName: string, roleTitle: string, interviewDate?: Date | string) => {
  const formattedDate = interviewDate 
    ? new Date(interviewDate).toLocaleString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
      })
    : 'to be determined';

  const mailOptions = {
    from: `"Agara Recruitment" <${process.env.SMTP_USER || process.env.EMAIL_USER || 'recruiting@agara.test'}>`,
    to,
    subject: `Interview Scheduled - ${roleTitle}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
        <h2 style="color: #F97316;">Great news, ${candidateName}!</h2>
        <p>Your interview for the <strong>${roleTitle}</strong> position has been scheduled for <strong>${formattedDate}</strong>.</p>
        <p>Our team will reach out to you shortly with a calendar invite and meeting link.</p>
        <div style="margin: 30px 0; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
           <p style="margin: 0; font-weight: bold; color: #111827;">What's next?</p>
           <ul style="color: #4b5563; margin-top: 10px;">
             <li>Check your calendar for an invite.</li>
             <li>Prepare any questions you have for us.</li>
             <li>Get ready to showcase your amazing skills!</li>
           </ul>
        </div>
        <p>If you have any questions in the meantime, feel free to reply to this email.</p>
        <p>Best regards,<br/>The Agara Team</p>
      </div>
    `,
  };

  try {
    const { transporter, isEthereal } = await getTransporter();
    const info = await transporter.sendMail(mailOptions);
    console.log('[EmailService] Email sent successfully: %s', info.messageId);
    
    // If using a test account, output the URL to preview the email exactly as the candidate would see it
    if (isEthereal) {
      console.log('\n======================================================');
      console.log('✅ PREVIEW EMAIL SENT TO:', to);
      console.log('🔍 Click here to view exactly what the candidate sees:');
      console.log(nodemailer.getTestMessageUrl(info));
      console.log('======================================================\n');
    }

    return info;
  } catch (error) {
    console.error('[EmailService] Error sending email:', error);
    throw error;
  }
};
