const express = require('express');
const router = express.Router();
const { upSertLocation, getLocation } = require("../db/inventoryLocations");

router.post('/', async (req, res) => {
    try {
        const transaction = await upSertLocation(req.body.location);
        res.json(transaction.result);
    } catch (ex) {
        res.status(500).json({"message": `error code: ${ex.message || ex}`});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const transaction = await getLocation(parseInt(req.params.id));
        res.json(transaction);
    } catch (ex) {
        res.status(500).json({"message": `error code: ${ex.message || ex}`});
    }
});

module.exports = router;