const express = require('express');
const router = express.Router();
const apiRoutes = require('./api/index');
router.use('/api', apiRoutes);

//Placeholder Code for testing api
// router.get('/api', (req, res) => {
//     res.json({ message: "This is the API response!" });
// });



// router.use((req, res) => {
//     res.send("<h1>Wrong Route!</h1>")
//   });


//Homepage route
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;