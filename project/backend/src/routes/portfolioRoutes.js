const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController');

router.get('/', portfolioController.getPortfolios);
router.get('/:slug', portfolioController.getPortfolioBySlug);
router.post('/', portfolioController.createPortfolio);

module.exports = router;
