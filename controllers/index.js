const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('index');
});


//Placeholder Code for testing api
router.get('/api', (req, res) => {
    res.json({ message: "This is the API response!" });
});

module.exports = router;