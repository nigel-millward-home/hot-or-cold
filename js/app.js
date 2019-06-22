
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	// Generate random number
 	function randomNumber()
	{
		return  Math.floor((Math.random() * 100) + 1); 
	}

	var rand = randomNumber();

	// Count guess 
	var guessNumber = 0;
 	function guessCount() 
 	{
    	guessNumber += 1;  
    	$("#count").text(guessNumber);

 	}

 	function difference(userGuess, rand)
 	{
  		if(userGuess > rand)
  		{
  			return userGuess-rand;
  		} 
  		else 
  		{
  			return rand-userGuess;
  		}
	}

	// Response to guess
    function submitAnswer(diff)
    {
		if(diff == 0)
		{
			$('#feedback').text('Well Done! You got it right!');
			
		}

		if(diff > 0 && diff < 5)
		{
			$('#feedback').text("You are volcanic hot!");
		}

		if(diff >= 5 && diff < 10)
		{
			$('#feedback').text("You are very hot!");
		}
		if(diff >=10 && diff < 20)
		{
			$('#feedback').text("You are hot!");
		}
		if(diff >= 21 && diff < 30)
		{
			$('#feedback').text("You are warm");
		}
		if(diff >= 31 && diff < 50)
		{
			$('#feedback').text("You are cold");
		}
		if(diff >= 50 && diff < 70)
		{
			$('#feedback').text("You are ice cold");
		}
		if(diff >= 70 && diff < 99)
		{
			$('#feedback').text("That was Pluto cold");
		}
	}

	// Click the 'guess' button
	$('#guessButton').on('click', function()
	{
		var userGuess = $('#userGuess').val();
		var diff = difference(userGuess, rand);

		if(userGuess % 1 == 0 && userGuess <= 100 && userGuess > 0)
		{
			$('.guessBox').append('<li>' + userGuess + '</li>');
			guessCount();
			submitAnswer(diff);
			$('#userGuess').val("");
		} else 
		{
			alert('Type only numbers between 1 and 100.');
      		$('#userGuess').val("");
		}
	});

	// Click on the 'new game' button
	$('.new').on('click', function()
	{
		location.reload();
	});
});












// new game function to start a new game