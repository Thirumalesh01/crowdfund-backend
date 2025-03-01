const express = require('express');
const { getAllUsers, getAllCampaigns, approveCampaign, rejectCampaign } = require('../controllers/adminController');
const { protect, admin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/users', protect, admin, getAllUsers);
router.get('/campaigns', protect, admin, getAllCampaigns);
router.put('/campaigns/approve/:id', protect, admin, approveCampaign);
router.put('/campaigns/reject/:id', protect, admin, rejectCampaign);

module.exports = router;
