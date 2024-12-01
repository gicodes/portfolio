import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';


const transporter = nodemailer.createTransport({
  service: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_ORIGIN,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
});

const userInfoSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  country: z.string().min(1, 'Country is required'),
  email: z.string().email('Invalid e-mail address'),
  services: z.string().min(1, 'Hiring information is required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const saveUserInfo = userInfoSchema.parse(body);

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_ORIGIN,
      to: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT,
      subject: "New Client Request from Gi Code`s page.dev",
      text: `
        You have a request from ${saveUserInfo.name}, 
        a citizen of ${saveUserInfo.country}. \n
        Intending to hire you for some ${saveUserInfo.services} gig. \n

        Reply to ${saveUserInfo.email}? \n
      `,
    };
    
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Feedback saved successfully!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Error saving feedback:', error);
    return NextResponse.json(
      { error: 'Failed to save feedback. Please try again.' },
      { status: 500 }
    );
  }
}
