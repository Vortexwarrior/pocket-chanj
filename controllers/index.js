const express = require('express');
const router = express.Router();

const apiRoutes = require('./api/index');
const homeroutes = require('./homeRoutes')

router.use('/', homeroutes);
router.use('/api', apiRoutes);


module.exports = router;