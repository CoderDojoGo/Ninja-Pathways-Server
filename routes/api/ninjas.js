const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Ninjas
router.get('/', async (req, res) => {
    const ninjas = await loadNinjasCollection();
    res.send(await ninjas.find({}).toArray());
});


async function loadNinjasCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017',
    {
        useNewUrlParser: true
    });

    return client.db('coderdojogo').collection('ninjas');
}
  
module.exports = router;