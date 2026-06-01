const TeamMember = require('../models/TeamMember');

exports.getTeamMembers = async (req, res) => {
  try {
    const members = await TeamMember.find().sort({ order: 1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createTeamMember = async (req, res) => {
  try {
    const member = new TeamMember(req.body);
    const saved = await member.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
