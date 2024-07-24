import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../utils/mongodb';
import Feedback from '../../../models/Feedback';

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { rating, feedback } = body;

    const newFeedback = new Feedback({ rating, feedback });
    await newFeedback.save();

    return NextResponse.json(newFeedback, { status: 201 });
  } catch (error) {
    console.error('Error saving feedback:', error);
    return NextResponse.json({ error: 'Error saving feedback' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const feedback = await Feedback.find().lean();

    return NextResponse.json(feedback, { status: 200 });
  } catch (error) {
    console.error('Error fetching feedback data:', error);
    return NextResponse.json({ error: 'Error fetching feedback data' }, { status: 500 });
  }
}
