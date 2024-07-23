import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../utils/mongodb';
import Uni from '../../../models/Uni';


export async function GET() {
  await connectToDatabase();
  let unis = [];

  try {
    unis = await Uni.find().lean();
  } catch (error) {
    console.error('Error fetching universities data:', error);
    return NextResponse.json({ error: 'Error fetching universities data' }, { status: 500 });
  }

  return NextResponse.json(unis);
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    const { code, filliere, university, etablissement, gouvernorat, critere, score } = body;

    const newUni = new Uni({ code, filliere, university, etablissement, gouvernorat, critere, score });
    await newUni.save();

    return NextResponse.json(newUni, { status: 201 });
  } catch (error) {
    console.error('Error adding university:', error);
    return NextResponse.json({ error: 'Error adding university' }, { status: 500 });
  }
}