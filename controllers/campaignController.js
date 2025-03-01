const Campaign = require('../models/Campaign');

exports.createCampaign = async (req, res) => {
  const { title, description, goal } = req.body;
  const campaign = await Campaign.create({ title, description, goal, creator: req.user.id });
  res.status(201).json(campaign);
};

exports.getCampaigns = async (req, res) => {
  const campaigns = await Campaign.find().populate('creator', 'name');
  res.json(campaigns);
};
