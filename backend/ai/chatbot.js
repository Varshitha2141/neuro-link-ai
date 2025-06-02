const Intent = require('../models/Intent');

async function getBotResponse(input) {
    const intents = await Intent.find();
    const msg = input.toLowerCase();

    for (let intent of intents) {
        if (intent.patterns.some(p => msg.includes(p))) {
            const random = Math.floor(Math.random() * intent.responses.length);
            return intent.responses[random];
        }
    }
    return "Sorry, I don't understand.";
}

module.exports = { getBotResponse };
