const Portfolio = require('../models/Portfolio');

exports.getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find().sort({ order: 1 });
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPortfolioBySlug = async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ slug: req.params.slug });
    if (!portfolio) return res.status(404).json({ message: 'Portfolio not found' });
    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPortfolio = async (req, res) => {
  try {
    const portfolio = new Portfolio(req.body);
    const saved = await portfolio.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
