import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../utils/mongodb';
import New from '../../../models/New';

export async function GET() {
  await connectToDatabase();
  let news = [];

  try {
    news = await New.find().lean();
  } catch (error) {
    console.error('Error fetching news data:', error);
    return NextResponse.json({ error: 'Error fetching news data' }, { status: 500 });
  }

  return NextResponse.json(news);
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { title, description, url, imageUrl, type } = body;

    const newNews = new New({ title, description, url, imageUrl, type });
    await newNews.save();

    return NextResponse.json(newNews, { status: 201 });
  } catch (error) {
    console.error('Error adding news:', error);
    return NextResponse.json({ error: 'Error adding news' }, { status: 500 });
  }
}
