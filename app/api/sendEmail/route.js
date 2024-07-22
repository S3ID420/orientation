import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, 
        pass: process.env.GMAIL_PASS, 
      },
    });

    const mailOptions = {
      from: `Contact Form <${email}>`,
      to: 'oussamawaid@gmail.com',
      subject: `New contact form submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
          <h3 style="color: #333; text-align: center;">New Contact Form Submission</h3>
          <div style="padding: 10px; background-color: #ffffff; border-radius: 5px;">
            <p style="color: #555;"><strong>Name:</strong> ${name}</p>
            <p style="color: #555;"><strong>Email:</strong> ${email}</p>
            <p style="color: #555;"><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <footer style="text-align: center; margin-top: 20px; color: #888;">
            <p>Thank you for reaching out!</p>
          </footer>
        </div>
      `,
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return NextResponse.json({ success: true, message: 'Email sent successfully!' });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 });
  }
}
