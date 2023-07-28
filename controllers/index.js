const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/api', (req, res) => {
    res.json({ message: "This is the API response!" });
});

module.exports = router;