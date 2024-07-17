import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../utils/mongodb';
import New from '../../../models/New';

export async function GET() {
  await connectToDatabase(); // Ensure MongoDB connection is established
  let news = [];

  try {
    news = await New.find().lean(); // Fetch all news articles
  } catch (error) {
    console.error('Error fetching news data:', error);
    return NextResponse.json({ error: 'Error fetching news data' }, { status: 500 });
  }

  return NextResponse.json(news);
}
