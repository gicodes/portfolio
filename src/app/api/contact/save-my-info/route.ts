import { NextResponse } from 'next/server';
import { z } from 'zod';

// Define a schema to validate the incoming request data
const feedbackSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const feedback = feedbackSchema.parse(body);

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
