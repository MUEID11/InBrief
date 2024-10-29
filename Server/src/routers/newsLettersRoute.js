const express = require('express');
const { postNewsletterEmail } = require('../controllers/newsLetterController');
const router = express.Router();

router.post('/', postNewsletterEmail )

module.exports = router;
