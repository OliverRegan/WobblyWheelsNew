var express = require('express');
var router = express.Router();

// Get coaches
router.get('/', function (req, res, next) {

  // Query database
  const queryNames = req.db.from('coaches').select()
  const coaches = []

  // Throw error if there is a query in the URL
  if (Object.keys(req.query).length !== 0) {
    return res.status(400).json({ "error": true, "message": "Invalid query parameters. Query parameters are not permitted." })
  }

  // Put names into array
  queryNames.then((names) => {
    // Map into array
    names.map((nameObj) => {
      coaches.push(nameObj)
    })
  }).then(() => {
    return res.status(200).json(coaches)
  })
});

module.exports = router;
