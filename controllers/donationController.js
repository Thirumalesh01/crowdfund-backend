const Donation = require('../models/Donation');

exports.donate = async (req, res) => {
  const { campaignId, amount } = req.body;
  const donation = await Donation.create({ user: req.user.id, campaign: campaignId, amount });
  res.status(201).json(donation);
};
