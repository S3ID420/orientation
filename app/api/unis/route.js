import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../utils/mongodb';
import Uni from '../../../models/Uni';

export async function GET() {
  await connectToDatabase(); // Ensure MongoDB connection is established
  let unis = [];

  try {
    unis = await Uni.find().lean(); 
  } catch (error) {
    console.error('Error fetching news data:', error);
    return NextResponse.json({ error: 'Error fetching news data' }, { status: 500 });
  }

  return NextResponse.json(unis);
}
