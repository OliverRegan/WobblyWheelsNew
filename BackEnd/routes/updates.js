var express = require('express');
var router = express.Router();

// Get updates
router.get('/', function (req, res, next) {

    // Query database
    const queryUpdates = req.db.from('updates').select('*')
    const updates = []

    // Throw error if there is a query in the URL
    if (Object.keys(req.query).length !== 0) {
        return res.status(400).json({ "error": true, "message": "Invalid query parameters. Query parameters are not permitted." })
    }

    queryUpdates.then((update) => {
        // Map into array
        update.map((updateObj) => {
            updates.push(updateObj)
        })
    }).then(() => {
        return res.status(200).json(updates)
    })
});

module.exports = router;