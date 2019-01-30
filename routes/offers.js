

const router = require('express').Router();
const offerController = require('../controllers/offerController');

router
	.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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