// Student Offer Schema

// 1.Offer Amount : Currency
// 2.Years: Integer
// 3. APR:number
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
		type: Number,
		required: true
	},
	apr: {
		type: Number,
		required: true
	},
	rate: {
		type: Number,
		required: true
	},
	monthlyPayment: {
		type: Number,
		required: true
	},
	termTitle: {
		type: String,
		required: true
	}
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;