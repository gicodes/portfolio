import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: process.env.NEXT_PUBLIC_EMAIL_SERVICE,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_ORIGIN,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const userInput = await request.json();

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_ORIGIN,
      to: process.env.NEXT_PUBLIC_EMAIL_RECIPIENT,
      cc: userInput?.email,
      subject: userInput?.subject,
      text: userInput?.body,
    };
    
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        message: 'Feedback sent successfully!',
        error: 'no error',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: unknown) {
    console.error('Error sending email:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to send feedback',
        message: 'Failed!',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
