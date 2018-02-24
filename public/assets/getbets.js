$(document).ready(function(){
	var user_id = $('#currentUser').attr('data-id');
	
	$.ajax({
		url: '/api/bets/search?UserId='+user_id,
		success: function(res){
			console.log('Got bets: ',res);
			for (var i = 0; i < res.length; i++) {
				var tempDiv;
				console.log(res[i].Ballot.name);
				console.log(res[i].Ballot.id);
				console.log(res[i].Ballot.expire_dt);
				tempDiv = 
					$('<div>')
					.addClass('col')
					.addClass('s12')
					.addClass('ballot-card')
					.append(
						$('<div>')
						.addClass('card-panel')
						.addClass('brown')
						.addClass('lighten-1')
						.addClass('white-text')
						.addClass('center')
						.append($('<h3>').text(res[i].Ballot.name))
						.append($('<p>').text('Expires: ' + res[i].Ballot.expire_dt))
						.append(
							$('<p>').append(
								$('<a>')
								.addClass('waves-effect')
								.addClass('waves-light')
								.addClass('btn-large')
								.addClass('white')
								.addClass('green-text')
								.attr('href','/bets/'+res[i].Ballot.id)
								.text('View')
							)
						)	
					);
					$('#userbets').append(tempDiv);
			}
		}
	});
		
	
});