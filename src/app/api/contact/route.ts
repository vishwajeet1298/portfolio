
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

console.log('Resend API Key:', process.env.RESEND_API_KEY);



export async function POST(req: Request) {
    const { name, email, subject, message, honeypot } = await req.json();
  
  
    console.log('Incoming contact form submission:', {
      name,
      email,
      subject,
      message,
      honeypot,
    });
  
    if (honeypot) {
      return NextResponse.json({ message: 'Spam detected.' }, { status: 400 });
    }
  
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }
  
    try {
      const data = await resend.emails.send({
        from: 'vishwajeet1298@gmail.com',
        to: 'vishwajeet1298@gmail.com',
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
        replyTo: email,
      });
  
      //console.log('Resend response:', data);
      return NextResponse.json({ message: 'Email sent successfully', data });
    } catch (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ message: 'Failed to send email', error }, { status: 500 });
    }
  }
  