const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  client: { type: String },
  category: { type: String },
  images: [{ type: String }],
  videoUrl: { type: String },
  kpis: [{
    label: { type: String },
    value: { type: String },
  }],
  order: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Portfolio', portfolioSchema);
