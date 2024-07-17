import mongoose from 'mongoose';

const { Schema } = mongoose;

const NewsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  imageUrl: { type: String },
  type: { type: String, enum: ['main', 'left-large', 'left-small', 'right-tall'], required: true }
});

export default mongoose.models.New || mongoose.model('New', NewsSchema);
