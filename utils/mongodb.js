import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);
  if (isConnected) {
    console.log('DB connected already');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'Orientation',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('DB connected successfully');
  } catch (error) {
    console.error('DB connection error:', error);
  }
};
