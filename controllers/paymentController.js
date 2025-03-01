const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Donation = require('../models/Donation');

exports.createPaymentIntent = async (req, res) => {
  const { amount } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: 'usd',
  });

  res.json({ clientSecret: paymentIntent.client_secret });
};

exports.confirmPayment = async (req, res) => {
  const { paymentIntentId, userId, campaignId, amount } = req.body;

  await Donation.create({ user: userId, campaign: campaignId, amount, paymentStatus: 'completed' });

  res.json({ message: 'Payment successful' });
};
