$(document).ready(function() {
					
	// VARIABLES
	
	
	// EVENT HANDLERS
	
	//scrollUpMenu
	/*$(function() {			
		$('#top').scrollUpMenu({'transitionTime': 100});
    });*/
			
	//iconNav
	
	
	
	
	$('#menu').on('click', function(event){
		event.preventDefault();
		if($("nav").is(":visible")){
			$("nav").css("display","none")
		}else{
			$("nav").css("display","block")
		}
	});
	
	//scroll
	
	/*$('nav a').on('tap', function(event){
				event.preventDefault();
				
				$("nav").css("display","none")

				
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top-60
				}, 1500,'easeInOutExpo');
			});
			*/
			$('nav a').on('click', function(event){
				event.preventDefault();
				
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top-50
				}, 3348,'easeInOutExpo');
			});
			
	
	
	
	// FUNCTIONS
	
	
	// INITIALIZATION
	
	
});