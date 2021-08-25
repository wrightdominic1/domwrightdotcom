$(document).ready(function() {
					
	// VARIABLES
	
	
	// EVENT HANDLERS
	$("#myForm").on("submit",function(event){
		event.preventDefault();
		
		
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
		
		
		
		console.log("scarface2.html"+"?"+"&valueOfSecond="+secondTextField+"&valueOfThird="+thirdTextField+"&valueOffourth="+fourthTextField+"&valueOfFifth="+fifthTextField+"&valueOfSixth="+sixthTextField+"&valueOfSeventh="+seventhTextField);
		
		window.location = "scarface2.html"+"?"+"&valueOfSecond="+secondTextField+"&valueOfThird="+thirdTextField+"&valueOffourth="+fourthTextField+"&valueOfFifth="+fifthTextField+"&valueOfSixth="+sixthTextField+"&valueOfSeventh="+seventhTextField;
	});
		
	
	// FUNCTIONS
	$('h1').addClass('animated fadeInDown');
	$('#numberOne').addClass('animated fadeInLeft');
	$('#numberThree').addClass('animated fadeInRight');
	$('.submitButton').addClass('animated fadeIn');
	$('#backButton').addClass('animated fadeIn');

	
	
	// INITIALIZATION
	
	
});