const express = require('express');
const router = express.Router();
const { connectToMongoDB } = require('./database');

router.get('/api/data', async (req, res) => {
    try {
        const db = await connectToMongoDB();
        const collection = db.collection('yourcollectionname'); // Change to your collection name
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
