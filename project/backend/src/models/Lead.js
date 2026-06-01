const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  company: { type: String },
  message: { type: String },
  source: { type: String, default: 'website' },
}, { timestamps: true });

module.exports = mongoose.model('Lead', leadSchema);
