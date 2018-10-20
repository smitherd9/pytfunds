const router = require('express').Router();
const offerRoutes = require('./offers');

router.use('/offers', offerRoutes);

module.exports = router;