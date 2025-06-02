const mongoose = require('mongoose');

const IntentSchema = new mongoose.Schema({
    intent: String,
    patterns: [String],
    responses: [String]
});

module.exports = mongoose.model('Intent', IntentSchema);
