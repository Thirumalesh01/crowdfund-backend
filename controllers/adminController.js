const Campaign = require('../models/Campaign');
const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getAllCampaigns = async (req, res) => {
  const campaigns = await Campaign.find();
  res.json(campaigns);
};

exports.approveCampaign = async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);
  if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

  campaign.status = 'approved';
  await campaign.save();
  res.json({ message: 'Campaign approved' });
};

exports.rejectCampaign = async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);
  if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

  campaign.status = 'rejected';
  await campaign.save();
  res.json({ message: 'Campaign rejected' });
};
