// models/Uni.js

import mongoose from 'mongoose';

const UniSchema = new mongoose.Schema({
  code: String,
  filliere: String,
  university: String,
  etablissement: String,
  gouvernorat: String,
  critere: [String],
  score: Number,
});

const Uni = mongoose.models.Uni || mongoose.model('Uni', UniSchema);

export default Uni;
