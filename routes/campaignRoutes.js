const express = require('express');
const { createCampaign, getCampaigns } = require('../controllers/campaignController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create', protect, createCampaign);
router.get('/', getCampaigns);

module.exports = router;
