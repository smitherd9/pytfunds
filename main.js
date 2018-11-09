$(document).ready(function() {

    $('#submit').on('click', function(e) {        
            e.preventDefault();
            sendData();
        
    });

var sendData = function() {
	var query = {};

	var offerAmount = $('#offerAmount').val();
	var years = $('#years').val();
	var apr = $('#apr').val();
	var rate = $('#rate').val();
	var monthlyPayment = $('#monthlyPayment').val();
	var termTitle = $('#termTitle').val();

query.offerAmount = offerAmount;
query.years = years;
query.apr = apr;
query.rate = rate;
query.monthlyPayment = monthlyPayment;
query.termTitle = termTitle;

postOffer(query);

}


   var postOffer = function(query) {
    var postAddress = 'http://localhost:5000';
        $.ajax(postAddress + '/api/offers', {
            type: 'POST',
            data: query,
            dataType: 'json'
        })

        .done(function(data) {
            console.log('here is the data: ' + data);
        });
    }; 

});
