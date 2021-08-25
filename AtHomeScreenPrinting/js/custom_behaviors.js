$(document).ready(function() {
					
	
		//scrolling
			$('nav a').on('click', function(event){
				event.preventDefault();
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top-0
				}, 3348,'easeInOutQuart');
			});
			//footer 5345
			
			/*$(window).scroll(function() {
			if ($(this).scrollTop() < 4350) {
			
			$("#bottom").slideUp();
			
			} else {
			
			$("#bottom").slideDown();
			
			}
			});*/
			
										   
					
					console.log( $(this).scrollTop() );
							
			
			//colorbox
			$(document).ready(function() {
				
				$(".group2").colorbox({rel:'group2'});
				$(".group3").colorbox({rel:'group3'});
				$(".group4").colorbox({rel:'group4'});
				$(".group5").colorbox({rel:'group5'});
				$(".group6").colorbox({rel:'group6'});	
				$(".group8").colorbox({rel:'group8'});	
			
			});
	
			//parallax
			$(document).ready(function(){
				
				$(window).resize();
				
				
        	})  			
			
			$(window).resize(function() {
				   if ($(this).width() > 800) {
					  // call supersize method
				   
				
					//$('#test').parallax("0%", -0.4);
					$('#section1').parallax("0%", -0.3);
					$('#section2').parallax("0%", -0.3);
					$('#section3').parallax("0%", -0.3);
					$('#section4').parallax("0%", -0.3);
					$('#section5').parallax("0%", -0.3);
					$('#section6').parallax("0%", -0.3);
					$('#section7').parallax("0%", -0.3);
					$('#section8').parallax("0%", -0.3);
					}
				});
				
			
});	
