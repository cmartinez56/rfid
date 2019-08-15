const express = require('express');
const router = express.Router();
const { upSertLocation } = require("../db/inventoryLocations");

router.post('/save', async (req, res) => {
    try {
        const transaction = await upSertLocation(req.body.location);
        res.json(transaction.result);
    } catch (ex) {
        res.status(500).json({"message": `error code: ${ex.message || ex}`});
    }
});

module.exports = router;