const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String },
  designation: { type: String },
  text: { type: String, required: true },
  videoUrl: { type: String },
  avatar: { type: String },
  order: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
