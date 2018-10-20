
const Offer = require('../models/offerSchema');

// Defining all methods and business logic for routes

module.exports = {
	findAll: function(req, res) {
		Offer.find(req.query)
			.then(offers => res.json(offers))
			.catch(err => res.status(422).json(err));
	},
	findById: function(req, res) {
		Offer.findById(req.params.id)
			.then(offer => res.json(offer))
			.catch(err => res.status(422).json(err));
	},
	create: function(req, res) {
		Offer.create(req.body)
			.then(newOffer => res.json(newOffer))
			.catch(err => res.status(422).json(err));
	},
	update: function(req, res) {
		Offer.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then(offer => res.json(offer))
			.catch(err => res.status(422).json(err));
	},
	remove: function(req, res) {
		Offer.findById({ _id: req.params.id })
			.then(offer => offer.remove())
			.then(allOffers => res.json(allOffers))
			.catch(err => res.status(422).json(err));
	}
};