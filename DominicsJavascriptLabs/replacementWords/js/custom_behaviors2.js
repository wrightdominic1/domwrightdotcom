$(document).ready(function() {
					
	// VARIABLES
	var searchString = document.location.search;
	console.log(document.location.search)
	
	var myArray = $("p").find("span");
	
	// EVENT HANDLERS
		
	
	// FUNCTIONS
	function startParty(){
		var incomingFirst = 	getQueryParam("valueOfFirst",searchString);

		var incomingSecond = getQueryParam("valueOfSecond",searchString);
		
		var incomingThird = 	getQueryParam("valueOfThird",searchString);

		var incomingFourth = getQueryParam("valueOfFourth",searchString);
		
		var incomingFifth = 	getQueryParam("valueOfFifth",searchString);

		var incomingSixth = getQueryParam("valueOfSixth",searchString);
		
		var incomingSeventh = 	getQueryParam("valueOfSeventh",searchString);

		var incomingEighth = getQueryParam("valueOfEighth",searchString);
		
		var incomingNinth = 	getQueryParam("valueOfNinth",searchString);

		var incomingTenth = getQueryParam("valueOfTenth",searchString);
		
		var incomingEleven = 	getQueryParam("valueOfEleven",searchString);
		
		var incomingTwelve = 	getQueryParam("valueOfTwelve",searchString);
		
		console.log(incomingFirst);
		console.log(incomingSecond);
		console.log(incomingThird);
		console.log(incomingFourth);
		console.log(incomingFifth);
		console.log(incomingSixth);
		console.log(incomingSeventh);
		console.log(incomingEighth);
		console.log(incomingNinth);
		console.log(incomingTenth);
		console.log(incomingEleven);
		console.log(incomingTwelve);
		
		writeTextToPage(incomingFirst, ".firstHolder");
		writeTextToPage(incomingSecond, "#secondHolder");
		writeTextToPage(incomingThird, "#thirdHolder");
		writeTextToPage(incomingFourth, "#fourthHolder");
		writeTextToPage(incomingFifth, "#fifthHolder");
		writeTextToPage(incomingSixth, "#sixthHolder");
		writeTextToPage(incomingSeventh, "#seventhHolder");
		writeTextToPage(incomingEighth, "#eighthHolder");
		writeTextToPage(incomingNinth, "#ninthHolder");
		writeTextToPage(incomingTenth, "#tenthHolder");
		writeTextToPage(incomingEleven, ".elevenHolder");
		writeTextToPage(incomingTwelve, ".twelveHolder");

	};
	
	function writeTextToPage(textToWrite, destination){
		$(destination).html(textToWrite);
	}
	
	function getQueryParam(parameter, qs) {
		qs = "&" + qs.replace(/%20/gi, ' ');
		var p = escape(unescape(parameter));
		var regex = new RegExp("[?&]" + p + "=(?:([^&]*))?", "i");
	   
		var match = regex.exec(qs);
		var value = "";
		if (match != null) {
			value = match[1];
		};
		return value;
	};
	
	
	function animateFormElements(){
		for(i=0;i<myArray.length;i++){
			
			$(myArray[i]).css("visibility","visible");
			$(myArray[i]).delay(250*i).animate({
				opacity:1
			},1000)	
			
		};		
	};
	
	$('#julesImg').addClass('animated fadeInLeft');
	$('#vincentImg').addClass('animated fadeInRight');
	$('#pulpfiction').addClass('animated fadeIn');
	$('#tonyImg').addClass('animated fadeIn');
	$('#walterImg').addClass('animated fadeIn');
	
	
	
	// INITIALIZATION
	startParty();
	animateFormElements();

	
});