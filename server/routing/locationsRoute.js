const express = require('express');
const router = express.Router();
const { getLocations } = require("../db/inventoryLocations");

router.get('/', async (req, res) => {
    try {
        const transaction = await getLocations();
        res.json(transaction);
    } catch (ex) {
        res.status(500).json({"message": `error code: ${ex.message || ex}`});
    }
});


module.exports = router;