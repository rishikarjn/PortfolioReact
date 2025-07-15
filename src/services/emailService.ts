

import emailjs from '@emailjs/browser';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
      to_name: 'Rishika Ranjan', // Optional: include only if defined in your EmailJS template
    };

    // Optional: log to debug if env variables are working
    console.log("SERVICE_ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("TEMPLATE_ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("PUBLIC_KEY:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID!,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
    );

    console.log("EmailJS response:", response);

    return response.status === 200;
  } catch (error: any) {
    console.error("Email sending failed:", error?.text || error);
    return false;
  }
};
