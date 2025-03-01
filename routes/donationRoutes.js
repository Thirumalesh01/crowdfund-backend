const express = require('express');
const { donate } = require('../controllers/donationController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/donate', protect, donate);

module.exports = router;
