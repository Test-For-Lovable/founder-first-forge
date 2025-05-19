
// Email service utility functions
import { toast } from "sonner";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // For production, I've configured this to use EmailJS
    // You'll need to set up an EmailJS account and create a template
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        service_id: 'service_emailjs', // Replace with your service ID
        template_id: 'template_contact', // Replace with your template ID
        user_id: 'YOUR_USER_ID', // Replace with your user ID
        template_params: {
          to_email: 'usama.ahmed@bitrupt.co',
          from_name: data.name,
          from_email: data.email,
          subject: data.subject || 'Contact Form Submission',
          message: data.message
        }
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Alternative approach using a server-side solution
// This would require setting up an API endpoint or serverless function
export const sendEmailViaServer = async (data: EmailData): Promise<boolean> => {
  try {
    // Replace with your actual API endpoint
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'usama.ahmed@bitrupt.co',
        from: data.email,
        name: data.name,
        subject: data.subject,
        message: data.message
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
