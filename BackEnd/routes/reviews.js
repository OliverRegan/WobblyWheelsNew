var express = require('express');
var router = express.Router();

// Get reviews
router.get('/', function (req, res, next) {

    // Query database
    const queryReviews = req.db.from('reviews').select()
    const queryUsers = req.db.from('users').select('userName', 'userId')
    const reviews = []
    const users = []

    // Throw error if there is a query in the URL
    if (Object.keys(req.query).length !== 0) {
        return res.status(400).json({ "error": true, "message": "Invalid query parameters. Query parameters are not permitted." })
    }

    queryUsers.then((userData) => {
        userData.map((user) => {
            users.push(user)
        })
    })

    queryReviews.then((review) => {
        // Map into array
        review.map((reviewObj) => {
            let rev = reviewObj
            // Find username
            users.forEach(user => {
                if (reviewObj.reviewUserId == user.userId) {
                    rev["reviewUserName"] = user.userName
                }
            });
            // Push review to array
            reviews.push(rev)
        })

    }).then(() => {
        console.log(reviews)
        return res.status(200).json(reviews)
    })
});


// Post lessons
router.post('/', function (req, res) {



    // Check for erros
    if (!req.body.userId || !req.body.bodyText || !req.body.stars) {
        return res.status(400).json({
            "error": true,
            "message": "Request body missing data"
        })
    }

    // get data
    const text = req.body.bodyText;
    const starNum = req.body.stars;
    const userId = req.body.userId;

    // Get date
    const date = new Date();
    let dateString = date.toISOString().split('T')[0];

    // Define stuff
    const insertReview = req.db.insert({ "reviewUserId": userId, "reviewStars": starNum, "reviewText": text, "reviewDate": dateString }).into('reviews')

    insertReview.then(() => {
        return res.status(201).json({ "message": "Review Created" })
    })



});

module.exports = router;