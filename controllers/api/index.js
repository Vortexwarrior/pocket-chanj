const express = require('express');
const router = express.Router();

const apiRoutes = require('./api');
const userRoutes = require('./api/user-routes'); 

router.use('/api', apiRoutes);
router.use('/api/users', userRoutes); 



module.exports = router;
