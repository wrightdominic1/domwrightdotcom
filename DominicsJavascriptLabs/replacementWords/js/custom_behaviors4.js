$(document).ready(function() {
					
	// VARIABLES
	
	
	// EVENT HANDLERS
	$("#myForm").on("submit",function(event){
		event.preventDefault();
		
		var firstTextField = $("#first").val();
		console.log(firstTextField);
		
		var secondTextField = $("#second").val();
		console.log(secondTextField);
		
		var thirdTextField = $("#third").val();
		console.log(thirdTextField);
		
		var fourthTextField = $("#fourth").val();
		console.log(fourthTextField);
		
		var fifthTextField = $("#fifth").val();
		console.log(fifthTextField);
		
		var sixthTextField = $("#sixth").val();
		console.log(sixthTextField);
		
		var seventhTextField = $("#seventh").val();
		console.log(seventhTextField);
		
		var eighthTextField = $("#eighth").val();
		console.log(eighthTextField);
		
		var ninthTextField = $("#ninth").val();
		console.log(ninthTextField);
		
		var tenthTextField = $("#tenth").val();
		console.log(tenthTextField);
		
		var elevenTextField = $("#eleven").val();
		console.log(elevenTextField);
		
		var twelveTextField = $("#twelve").val();
		console.log(twelveTextField);
		
		console.log("lebowski2.html"+"?"+"valueOfFirst="+firstTextField+"&valueOfSecond="+secondTextField+"&valueOfThird="+thirdTextField+"&valueOffourth="+fourthTextField+"&valueOfFifth="+fifthTextField+"&valueOfSixth="+sixthTextField+"&valueOfSeventh="+seventhTextField+"&valueOfEighth="+eighthTextField+"&valueOfNinth="+ninthTextField+"&valueOfTenth="+tenthTextField+"&valueOfEleven="+elevenTextField+"&valueOfTwelve="+twelveTextField);
		
		window.location = "lebowski2.html"+"?"+"valueOfFirst="+firstTextField+"&valueOfSecond="+secondTextField+"&valueOfThird="+thirdTextField+"&valueOffourth="+fourthTextField+"&valueOfFifth="+fifthTextField+"&valueOfSixth="+sixthTextField+"&valueOfSeventh="+seventhTextField+"&valueOfEighth="+eighthTextField+"&valueOfNinth="+ninthTextField+"&valueOfTenth="+tenthTextField+"&valueOfEleven="+elevenTextField+"&valueOfTwelve="+twelveTextField;
	});
		
	
	// FUNCTIONS
	$('h1').addClass('animated fadeInDown');
	$('#numberOne').addClass('animated fadeInLeft');
	$('#numberThree').addClass('animated fadeInRight');
	$('.submitButton').addClass('animated fadeIn');
	$('#backButton').addClass('animated fadeIn');

	
	
	// INITIALIZATION
	
	
});