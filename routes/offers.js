

const router = require('express').Router();
const offerController = require('../controllers/offerController');

router
	.route('/')
	.get(offerController.findAll)
	.post(offerController.create);

router
	.route('/:id')
	.get(offerController.findById)
	.put(offerController.update)
	.delete(offerController.remove);

module.exports = router;