import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { QualityDesignsEmail } from '../../emails/welcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      // Parse the JSON data from the request body
      const userData = JSON.parse(req.body);

      // Create and send the email using the Resend API
      await resend.emails.send({
        from: 'Your Name <your-email@example.com>', // Update with your email and name
        to: ['abdinajka@gmail.com'], // Update with your email
        subject: 'New Contact Form Submission',
        text: `Name: ${userData.name}\nPhone: ${userData.phone}\nEmail: ${userData.email}\nMessage: ${userData.message}`,
      });

      // Send a success response
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      // Handle any errors and send an error response
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    // Handle other HTTP methods if needed
    res.status(405).end(); // Method Not Allowed
  }
}