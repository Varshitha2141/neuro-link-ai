const express = require('express');
const router = express.Router();
const { getBotResponse } = require('../ai/chatbot');

router.post('/', async (req, res) => {
    const userMessage = req.body.message;
    const botReply = await getBotResponse(userMessage);
    res.json({ reply: botReply });
});

module.exports = router;
