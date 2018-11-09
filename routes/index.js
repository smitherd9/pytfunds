const router = require('express').Router();
const offerRoutes = require('./offers');

router.use('/api/offers', offerRoutes);

module.exports = router;