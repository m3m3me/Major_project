const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  bio: { type: String },
  image: { type: String },
  linkedin: { type: String },
  order: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('TeamMember', teamMemberSchema);
