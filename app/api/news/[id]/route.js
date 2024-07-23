import { NextResponse } from 'next/server';
import { connectToDatabase } from './/../../../../utils/mongodb'
import New from './/../../../../models/New'

export async function GET(request, { params }) {
  await connectToDatabase();
  const { id } = params;

  try {
    const newsItem = await New.findById(id).lean();
    if (!newsItem) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 });
    }
    return NextResponse.json(newsItem);
  } catch (error) {
    console.error('Error fetching news item:', error);
    return NextResponse.json({ error: 'Error fetching news item' }, { status: 500 });
  }
}

export async function PATCH(request, { params }) {
  await connectToDatabase();
  const { id } = params;
  const updates = await request.json();

  try {
    const updatedNews = await New.findByIdAndUpdate(id, updates, { new: true }).lean();
    if (!updatedNews) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 });
    }
    return NextResponse.json(updatedNews);
  } catch (error) {
    console.error('Error updating news item:', error);
    return NextResponse.json({ error: 'Error updating news item' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  await connectToDatabase();
  const { id } = params;

  try {
    const deletedNews = await New.findByIdAndDelete(id).lean();
    if (!deletedNews) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'News item deleted' });
  } catch (error) {
    console.error('Error deleting news item:', error);
    return NextResponse.json({ error: 'Error deleting news item' }, { status: 500 });
  }
}
