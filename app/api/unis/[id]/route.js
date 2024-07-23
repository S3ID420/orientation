import { NextResponse } from 'next/server';
import { connectToDatabase } from './/../../../../utils/mongodb';
import Uni from './/../../../../models/Uni'

export async function GET(request, { params }) {
  await connectToDatabase();
  const { id } = params;

  try {
    const uniItem = await Uni.findById(id).lean();
    if (!uniItem) {
      return NextResponse.json({ error: 'University not found' }, { status: 404 });
    }
    return NextResponse.json(uniItem);
  } catch (error) {
    console.error('Error fetching university item:', error);
    return NextResponse.json({ error: 'Error fetching university item' }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  await connectToDatabase();
  const { id } = params;
  const updates = await request.json();

  try {
    const updatedUni = await Uni.findByIdAndUpdate(id, updates, { new: true }).lean();
    if (!updatedUni) {
      return NextResponse.json({ error: 'University not found' }, { status: 404 });
    }
    return NextResponse.json(updatedUni);
  } catch (error) {
    console.error('Error updating university item:', error);
    return NextResponse.json({ error: 'Error updating university item' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  await connectToDatabase();
  const { id } = params;

  try {
    const deletedUni = await Uni.findByIdAndDelete(id).lean();
    if (!deletedUni) {
      return NextResponse.json({ error: 'University not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'University deleted' });
  } catch (error) {
    console.error('Error deleting university item:', error);
    return NextResponse.json({ error: 'Error deleting university item' }, { status: 500 });
  }
}



