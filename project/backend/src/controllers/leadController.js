const Lead = require('../models/Lead');

exports.createLead = async (req, res) => {
  try {
    const lead = new Lead(req.body);
    const saved = await lead.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
