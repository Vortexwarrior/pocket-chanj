const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

router.get('/api', (req, res) => {
    res.json({ message: "This is the API response!" });
});

module.exports = router;