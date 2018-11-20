// Student Offer Schema

// 1.Offer Amount : Currency
// 2.Years: Integer
// 3. APR: number
// 4.Rate
// 5.Monthly Payment
// 6. Term Title


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
	offerAmount: {
		type: String,
		required: true
	},
	years: {
		type: String,
		required: true
	},
	apr: {
		type: String,
		required: true
	},
	rate: {
		type: String,
		required: true
	},
	monthlyPayment: {
		type: String,
		required: true
	},
	termTitle: {
		type: String,
		required: true
	}
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;