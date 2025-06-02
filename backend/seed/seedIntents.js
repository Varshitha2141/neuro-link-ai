const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Intent = require('../models/Intent');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const seedIntents = [
    {
        intent: "greeting",
        patterns: ["hello", "hi", "good morning"],
        responses: ["Hello!", "Hi there!"]
    },
    {
        intent: "goodbye",
        patterns: ["bye", "see you", "later"],
        responses: ["Goodbye!", "Take care!"]
    },
    {
        intent: "thanks",
        patterns: ["thanks", "thank you"],
        responses: ["You're welcome!", "No problem."]
    }
];

Intent.insertMany(seedIntents)
    .then(() => {
        console.log("Intents seeded");
        mongoose.connection.close();
    })
    .catch(err => console.log(err));
