const Newsletter = require("../models/Newsletter/Newsletter");

const postNewsletterEmail = async (req, res) => {
    const newEmail = new Newsletter({
      ...req.body,
    });
    try {
      const result = await newEmail.save();
      res.status(201).json({ success: true, message: "Article submitted for approval", result });
    } catch (error) {
      res.status(500).json(error);
    }
  };


  module.exports={
    postNewsletterEmail
  }

  