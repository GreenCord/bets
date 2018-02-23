$(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $('#submit-ballot').on('click',function(e){
    	e.preventDefault();

    	var bets = {
    		user_id: $('#currentUser').attr('data-id'),
    		ballot_id: $('#ballotName').attr('data-id'),
    		user_answer_1: $('input[name=ballot_group1]:checked').val(),
    		user_answer_2: $('input[name=ballot_group2]:checked').val(),
    		user_answer_3: $('input[name=ballot_group3]:checked').val()
    	};
    	console.log('bets:',bets);
    	$.ajax('/api/bets',{
    		type: 'POST',
    		data: bets
    	}).done(function(results){
    		console.log('Bets recorded!');
    		location = '/ballot-submitted';
    	});
    });
 });