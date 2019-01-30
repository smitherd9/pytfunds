$(document).ready(function() {

  $('#fund').on('click', function(e) {        
    e.preventDefault();
    
        var query = {};
    
    query.nbid = $('#nbid').val();
    query.offerAmount  = $('#offerAmount').val();
    query.years = $('#years').val();
    query.apr = $('#apr').val();
    query.rate  = $('#rate').val();
    query.monthlyPayment  = $('#monthlyPayment').val();
    query.termTitle = $('#termTitle').val();
    query.nationId = $('#nbid').val(); 
    postOffer(query);

  });


   var postOffer = function(query) {
    var postAddress = 'https://obscure-atoll-16356.herokuapp.com';
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
