$(document).ready(function() {
					
	// VARIABLES
	
	var firstflag = getRandomNumber(0,80)
	var secondflag = getRandomNumber(0,80)
	var thirdflag = getRandomNumber(0,80)
	var second = getRandomNumber(0,80)
	var third = getRandomNumber(0,80)
	var fourth = getRandomNumber(0,80)
	var fifth = getRandomNumber(0,80)
	var sixth = getRandomNumber(0,80)
	var seventh = getRandomNumber(0,80)
	
	var firstDegree = getRandomNumber(-10,10)
	var fifthDegree = getRandomNumber(0,15)
	var sixthDegree = getRandomNumber(-10,10)
	var eighthDegree = getRandomNumber(0,360)

	var backActive = null;
	
	// EVENT HANDLERS
	$('marquee').marquee().hover(function(){
		$(this).trigger('stop');
		}, function () {
		$(this).trigger('start');
	});
	
	$('marquee').marquee();


	$("#firstflag").css("left",firstflag+"%")	
	$("#secondflag").css("left",secondflag+"%")	
	$("#thirdflag").css("left",thirdflag+"%")	
	$("#second").css("left",second+"%")	
	$("#third").css("left",third+"%")
	$("#fourth").css("left",fourth+"%")	
	$("#fifth").css("left",fifth+"%")	
	$("#sixth").css("top",sixth+"%")	
	$("#eighth").css("left",eighth+"%")	


	$("#firstflag").css("transform","rotate("+firstDegree+"deg)")
	$("#secondflag").css("transform","rotate("+firstDegree+"deg)")
	$("#thirdflag").css("transform","rotate("+firstDegree+"deg)")
	$("#fifth").css("transform","rotate("+fifthDegree+"deg)")
	$("#sixth").css("transform","rotate("+sixthDegree+"deg)")
	$("#eighth").css("transform","rotate("+eighthDegree+"deg)")
	
	
	$("#card").flip({
		trigger: 'manual'
	});
		
	$("#back1").parent().css("display","none");
	$("#back2").parent().css("display","none");
	$("#back3").parent().css("display","none");
	$("#back4").parent().css("display","none");
	$("#back5").parent().css("display","none");
	$("#back6").parent().css("display","none");
	$("#back7").parent().css("display","none");
	
	$('#linkOne').on('click',function(){
			if (backActive == null){
				$("#back1").css("display","inherit");
				$("#back1").parent().css("display","inherit");
				console.log('link1');
				backActive = 1;
			};
			$("#card").flip(true);
		});
		
		$('#linkTwo').on('click',function(){
			if (backActive == null){
				$("#back2").css("display","inherit");
				$("#back2").parent().css("display","inherit");
				console.log('link2');
				backActive = 2;
			};
			$("#card").flip(true);
		});
		
		$('#linkThree').on('click',function(){
			if (backActive == null){
				$("#back3").css("display","inherit");
				$("#back3").parent().css("display","inherit");
				console.log('link3');
				backActive = 3;
			};
			$("#card").flip(true);
		});
		
		$('.linkFour').on('click',function(){
			if (backActive == null){
				$("#back4").css("display","inherit");
				$("#back4").parent().css("display","inherit");
				console.log('link4');
				backActive = 4;
			};
			$("#card").flip(true);
		});
		
		$('.linkFive').on('click',function(){
			if (backActive == null){
				$("#back5").css("display","inherit");
				$("#back5").parent().css("display","inherit");
				console.log('link5');
				backActive = 5;
			};
			$("#card").flip(true);
		});
		
		$('.linkSix').on('click',function(){
			if (backActive == null){
				$("#back6").css("display","inherit");
				$("#back6").parent().css("display","inherit");
				console.log('link6');
				backActive = 6;
			};
			$("#card").flip(true);
		});
		
		$('#linkSeven').on('click',function(){
			if (backActive == null){
				$("#back7").css("display","inherit");
				$("#back7").parent().css("display","inherit");
				console.log('link7');
				backActive = 7;
			};
			$("#card").flip(true);
		});
		
		$('.backButton').on('click',function(){
			$("#card").flip(false);
			
			if (backActive == 1){
				console.log('clear1');
				setTimeout(function() {
					$("#back1").parent().css("display","none");
					console.log('clear1,delay');
				}, 500);				
			} else if (backActive == 2){
				console.log('clear2');
				setTimeout(function() {
					$("#back2").parent().css("display","none");
					console.log('clear2,delay');
				}, 500);
			} else if (backActive == 3){
				console.log('clear3');
				setTimeout(function() {
					$("#back3").parent().css("display","none");
					console.log('clear3,delay');
				}, 500);	
			} else if (backActive == 4){
				console.log('clear4');
				setTimeout(function() {
					$("#back4").parent().css("display","none");
					console.log('clear4,delay');
				}, 500);	
			} else if (backActive == 5){
				console.log('clear5');
				setTimeout(function() {
					$("#back5").parent().css("display","none");
					console.log('clear5,delay');
				}, 500);	
			} else if (backActive == 6){
				console.log('clear6');
				setTimeout(function() {
					$("#back6").parent().css("display","none");
					console.log('clear6,delay');
				}, 500);	
			} else if (backActive == 7){
				console.log('clear7');
				setTimeout(function() {
					$("#back7").parent().css("display","none");
					console.log('clear7,delay');
				}, 500);	
			};
			
			backActive = null;
		
		});
	
	// FUNCTIONS
	function getRandomNumber(bottomNumber, topNumber){
		var randomNumber = Math.round(Math.random()*(topNumber-bottomNumber))+bottomNumber;
		return randomNumber;
	};
	
	// INITIALIZATION
	
	
	
});