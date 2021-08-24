
$(document).ready(function() {

	$(this).scrollTop(0);
	
	$('#tab1').load('html.txt');
	$('#tab2').load('css.txt');
	$('#tab3').load('javascript.txt');
	

	$('nav a').on('click', function(event){
				event.preventDefault();
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top-0
				}, 3348,'easeInOutQuart');
	});
	
	$('#intro a').on('click', function(event){
				event.preventDefault();
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top-0
				}, 3348,'easeInOutQuart');
	});
	
	function onReady(callback) {
		var intervalID = window.setInterval(checkReady, 1000);
		function checkReady() {
			if (document.getElementsByTagName('body')[0] !== undefined) {
				window.clearInterval(intervalID);
				callback.call(this);
			}
		}
	}
	
	function show(id, value) {
		document.getElementById(id).style.display = value ? 'block' : 'none';
	}
	
	onReady(function () {
		show('container', true);
		show('loading', false);
	});

	//colorbox	
	$(".group1").colorbox({rel:'group1', iframe:true, width:"80%", height:"80%"});
	$(".group2").colorbox({rel:'group2', iframe:true, width:"80%", height:"80%"});
	$(".group3").colorbox({rel:'group3', iframe:true, width:"80%", height:"95%"});
	$(".group4").colorbox({rel:'group4', iframe:true, width:"80%", height:"95%"});
	$(".group5").colorbox({rel:'group5', photo:true, width:"80%", height:"95%"});
	$(".group6").colorbox({rel:'group6', photo:true, width:"80%", height:"95%"});
	$('a#colby').colorbox({rel:'#colby', iframe:true, width:"80%", height:"95%"});
	$('a#sasquatch').colorbox({rel:'#sasquatch', iframe:true, width:"80%", height:"95%"});
	$('a#aquemini').colorbox({rel:'#aquemini', iframe:true, width:"80%", height:"95%"});
	$('a#ironMike').colorbox({rel:'#ironMike',  iframe:true, width:"80%", height:"95%"});
	$('a#banners').colorbox({rel:'#banners',  iframe:true, width:"80%", height:"95%"});
	
	
	

	
	
	//assembly
		
	var scrollValue;
		console.log( $(this).scrollTop() );
	
	//main sections
	var section1Inited = false;
	var section2Inited = false;
	var section3Inited = false;
	
	//design sections
	var section4Inited = false;
	var section5Inited = false;
	var section6Inited = false;
	var section7Inited = false;
	
	//prints sections
	var section8Inited = false;
	var section9Inited = false;
	var section10Inited = false;
	var section11Inited = false;
				var count = 0;	
	//breakpoints
	var tl = new TimelineLite({paused:true});
	tl.to("#red", 1, {left:0});
	var tl2 = new TimelineLite({paused:true});
	tl2.to("#webDesign", 1, {right:00});
	var tl3 = new TimelineLite({paused:true});
	tl3.to("#motionGraphics", 1, {right:00});
	var tl4 = new TimelineLite({paused:true});
	tl4.to("#stuff", 1, {right:00});
	var tl5 = new TimelineLite({paused:true});
	tl5.to("#internships", 1, {right:00});
	
	var tl6 = new TimelineLite({paused:true});
	tl6.to("#black", 1, {left:00});
	var tl7 = new TimelineLite({paused:true});
	tl7.to("#maincontent2", 1, {left:00});
	var tl8 = new TimelineLite({paused:true});
	tl8.to("#maincontent", 1, {right:00});
	
	var tl9 = new TimelineLite({paused:true});
	tl9.to("#self", 1, {top:6300});
					
	$(document).scroll(function() {
				
		var offset = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
		
		if( offset >= 300 && section1Inited == false){
			section1Inited = true;
			tl.play();
		}		 
		
			if( offset >= 310 && section2Inited == false){
				section2Inited = true;
				tl2.play();
			}		
			
			if( offset >= 800 && section3Inited == false){
				section3Inited = true;
				tl3.play();
			}	
			
			if( offset >= 1400 && section4Inited == false){
				section4Inited = true;
				tl4.play();
			}	
			
			if( offset >= 1800 && section5Inited == false){
				section5Inited = true;
				tl5.play();
			}	
		
		if( offset >= 3500 && section6Inited == false){
			section6Inited = true;
			tl6.play();
		}	
		
			if( offset >= 3600 && section7Inited == false){
				section7Inited = true;
				tl7.play();
			}	
			
			if( offset >= 3700 && section8Inited == false){
				section8Inited = true;
				tl8.play();
			}	
		
		if( offset >= 5000 && section9Inited == false){
			section9Inited = true;
			$("#self").css("display","inherit")
			tl9.play();
		}				
			
    });
		
	
	
	//fakeNav
			// VARIABLES
			var state = "original";
			var state2 = "original2";
			var state3 = "original3";
			
			// EVENT HANDLERS
			$(document).scroll(function() {
				var offset2 = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;
				var offset3 = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;

				if(offset2 > 600 && state == "original"){
					
					fixNav();
					
				} else if(offset2 < 600 && state == "new"){
					unfixNav();
				};
				
				
				
				/*if(offset2 < 3800 && state == "new"){
					$(".location1").css("display", "inherit");
					
				} else if(offset2 > 3800 && state == "new" && offset2 <= 6300){
					$(".location1").css("display","none");	

				};	*/		
				
				
				
				if(offset3 > 3810 && state2 == "original2"){
					
					fixNav2();

				} else if(offset3 < 3810 && state2 == "new"){
					unfixNav2();
				};
				
				
				
				if(offset2 > 6310 && state3 == "original3"){
					
					fixNav3();
					
				} else if(offset2 < 6310 && state3 == "new"){
					unfixNav3();
				};
				
				
				
				
				
				
			});
			
			
		
			// FUNCTIONS
			function fixNav(){
				if(state=="original"){
					state = "new";
					$(".location1").stop(true);
					$(".location1").css("position", "fixed");
					$(".location1").css("top", "0px");

				};
			};
			
			function unfixNav(){
				if(state=="new"){
					state = "original";
					$(".location1").stop(true);
					$(".location1").css("position", "absolute");
					$(".location1").css("top", "600px");
				};
			};
			
			function fixNav2(){
				if(state2=="original2"){
					state2 = "new";
					$(".location2").stop(true);
					$(".location2").css("position", "fixed");
					$(".location2").css("top", "0px");

				};
			};
			
			function unfixNav2(){
				if(state2=="new"){
					state2 = "original2";
					$(".location2").stop(true);
					$(".location2").css("position", "absolute");
					$(".location2").css("top", "-10px");
				};
			};
			
			function fixNav3(){
				if(state3=="original3"){
					state3 = "new";
					$(".location3").stop(true);
					$(".location3").css("position", "fixed");
					$(".location3").css("top", "0px");

				};
			};
			
			function unfixNav3(){
				if(state3=="new"){
					state3 = "original3";
					$(".location3").stop(true);
					$(".location3").css("position", "absolute");
					$(".location3").css("top", "00px");
				};
			};
			
			
				$('.nav-tabs > li > a').click(function(event){
					event.preventDefault();//stop browser to take action for clicked anchor
					
					//get displaying tab content jQuery selector
					var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');					
					
					//find actived navigation and remove 'active' css
					var actived_nav = $('.nav-tabs > li.active');
					actived_nav.removeClass('active');
					
					//add 'active' css into clicked navigation
					$(this).parents('li').addClass('active');
					
					//hide displaying tab content
					$(active_tab_selector).removeClass('active');
					$(active_tab_selector).addClass('hide');
					
					//show target tab content
					var target_tab_selector = $(this).attr('href');
					$(target_tab_selector).removeClass('hide');
					$(target_tab_selector).addClass('active');
				});
		
		
		$('#reset').on('click', function(event){
				event.preventDefault();
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top-0
				}, 3348,'easeInOutQuart');
				var offset3 = document.documentElement.scrollTop;

				 			
		});
			
		$('.portfolio2').each(function(index)
		{
			$(this).attr('id', 'img' + (index + 1));
		});
		
		
		$('.portfolio2').click(function(){
		if($(this).hasClass('opened')){
			$(this).removeClass('opened');
			$(".portfolio2").fadeIn("fast");
				$("#maincontent").fadeIn("fast");
		}
		else{
			var indexi = $("#maincontent2 .portfolio2").index(this) + 1;
			$(this).addClass('opened'); 
			$(".portfolio2").not(this).fadeOut("fast");
			$("#maincontent").fadeOut("fast");
		}
		});	
		
		
		$('.portfolio').each(function(index)
		{
			$(this).attr('id', 'img' + (index + 1));
		});
			
		$('.portfolio').click(function(){
		if($(this).hasClass('opened')){
			$(this).removeClass('opened');
			$(".portfolio").fadeIn("fast");
			$("#maincontent4").fadeIn("fast");
		}
		else{
			var indexi = $("#maincontent .portfolio #maincontent2").index(this) + 1;
			$(this).addClass('opened'); 
			$(".portfolio").not(this).fadeOut("fast");
			$("#maincontent4").fadeOut("fast");
		}
		});	
		
		
		$('.portfolio4').each(function(index)
		{
			$(this).attr('id', 'img' + (index + 1));
		});
		
		$('.portfolio4').click(function(){
		if($(this).hasClass('opened')){
			$(this).removeClass('opened');
			$(".portfolio4").fadeIn("fast");
			$("#maincontent3").fadeIn("fast");
			
		}
		else{
			var indexi = $("#maincontent4 .portfolio4").index(this) + 1;
			$(this).addClass('opened'); 
			$(".portfolio4").not(this).fadeOut("fast");
			$("#maincontent3").fadeOut("fast");
		
		}
		});	
		   
		
		$('.portfolio3').each(function(index)
		{
			$(this).attr('id', 'img' + (index + 1));
		});
		
		$('.portfolio3').click(function(){
		if($(this).hasClass('opened2')){
			$(this).removeClass('opened2');
			$(".portfolio3").fadeIn("fast");
			$("#maincontent4").fadeIn("fast");
		}
		else{
			var indexi = $("#maincontent3 .portfolio3").index(this) + 1;
			$(this).addClass('opened2'); 
			$(".portfolio3").not(this).fadeOut("fast");
			$("#maincontent4").fadeOut("fast");
		
		}
		});		
		
		
	window.mySwipe = $('#mySwipe').Swipe().data('Swipe');
	
	$('#previousButton').on('tap', function(event){
			event.preventDefault();
			mySwipe.prev();
		});	
		
		$('#nextButton').on('tap', function(event){
			event.preventDefault();
			mySwipe.next();
		});	
		
		window.mySwipe2 = $('#mySwipe2').Swipe().data('Swipe');
		
		$('#previousButton2').on('tap', function(event){
				event.preventDefault();
				mySwipe2.prev();
			});	
			
			$('#nextButton2').on('tap', function(event){
				event.preventDefault();
				mySwipe2.next();
			});	

		window.mySwipe3 = $('#mySwipe3').Swipe().data('Swipe');
		
		$('#previousButton3').on('tap', function(event){
				event.preventDefault();
				mySwipe3.prev();
			});	
			
			$('#nextButton3').on('tap', function(event){
				event.preventDefault();
				mySwipe3.next();
			});	
			
		window.mySwipe4 = $('#mySwipe4').Swipe().data('Swipe');
		
		$('#previousButton4').on('tap', function(event){
				event.preventDefault();
				mySwipe4.prev();
			});	
			
			$('#nextButton4').on('tap', function(event){
				event.preventDefault();
				mySwipe4.next();
			});	
			
		window.mySwipe5 = $('#mySwipe5').Swipe().data('Swipe');
		
		$('#previousButton5').on('tap', function(event){
				event.preventDefault();
				mySwipe5.prev();
			});	
			
			$('#nextButton5').on('tap', function(event){
				event.preventDefault();
				mySwipe5.next();
			});	
			
		window.mySwipe6 = $('#mySwipe6').Swipe().data('Swipe');
		
		$('#previousButton6').on('tap', function(event){
				event.preventDefault();
				mySwipe6.prev();
			});	
			
			$('#nextButton6').on('tap', function(event){
				event.preventDefault();
				mySwipe6.next();
			});	
			
		
		window.mySwipe7 = $('#mySwipe7').Swipe().data('Swipe');
		
		$('#previousButton7').on('tap', function(event){
				event.preventDefault();
				mySwipe7.prev();
			});	
			
			$('#nextButton7').on('tap', function(event){
				event.preventDefault();
				mySwipe7.next();
			});	
			
		window.mySwipe8 = $('#mySwipe8').Swipe().data('Swipe');
		
		$('#previousButton8').on('tap', function(event){
				event.preventDefault();
				mySwipe8.prev();
			});	
			
			$('#nextButton8').on('tap', function(event){
				event.preventDefault();
				mySwipe8.next();
			});	
			
		window.mySwipe9 = $('#mySwipe9').Swipe().data('Swipe');
		
		$('#previousButton9').on('tap', function(event){
				event.preventDefault();
				mySwipe9.prev();
			});	
			
			$('#nextButton9').on('tap', function(event){
				event.preventDefault();
				mySwipe9.next();
			});	
			
		
		
		
});


//Colorbox Gallery
	var th = document.getElementById('thumbnails');

	th.addEventListener('click', function(e) {
	  var t = e.target, new_src = t.parentNode.href, 
		  large = document.getElementById('large'),
		  cl = large.classList,
		  lgwrap = document.getElementById('lg-wrap');
	  lgwrap.style.backgroundImage = 'url(' +large.src + ')';
	  if(cl) cl.add('hideme');
	  window.setTimeout(function(){
		large.src = new_src;
		if(cl) cl.remove('hideme');
	  }, 50);
	  e.preventDefault();
	}, false);
	
	
	
	
		var th2 = document.getElementById('thumbnails2');

	th2.addEventListener('click', function(e) {
	  var t2 = e.target, new_src = t2.parentNode.href, 
		  large2 = document.getElementById('large2'),
		  cl = large2.classList,
		  lgwrap2 = document.getElementById('lg-wrap2');
	  lgwrap2.style.backgroundImage = 'url(' +large2.src + ')';
	  if(cl) cl.add('hideme2');
	  window.setTimeout(function(){
		large2.src = new_src;
		if(cl) cl.remove('hideme2');
	  }, 50);
	  e.preventDefault();
	}, false);
	
	

		