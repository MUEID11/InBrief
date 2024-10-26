const Newsletter = require("../models/Newsletter/Newsletter");

const postNewsletterEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  try {
    const existingSubscription = await Newsletter.findOne({ email });
    if (existingSubscription) {
      return res.json({ success: false, message: "Email is already subscribed" });
    }

    const newEmail = new Newsletter({ email });
    await newEmail.save();

    res.status(201).json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
  };


  module.exports={
    postNewsletterEmail
  }

  