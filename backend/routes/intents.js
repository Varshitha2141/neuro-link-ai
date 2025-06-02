const express = require('express');
const router = express.Router();
const Intent = require('../models/Intent');

// Get all intents
router.get('/', async (req, res) => {
    const intents = await Intent.find();
    res.json(intents);
});

// Create new intent
router.post('/', async (req, res) => {
    const newIntent = new Intent(req.body);
    const saved = await newIntent.save();
    res.json(saved);
});

// Update intent by id
router.put('/:id', async (req, res) => {
    const updated = await Intent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});

// Delete intent by id
router.delete('/:id', async (req, res) => {
    await Intent.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted' });
});

module.exports = router;
