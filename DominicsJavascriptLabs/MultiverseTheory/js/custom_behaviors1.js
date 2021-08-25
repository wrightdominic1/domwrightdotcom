$(document).ready(function() {
					
	// VARIABLES
	var scrollValue;
	
	var section1Inited = true;
	var section2Inited = false;
	var section3Inited = false;
	var section4Inited = false;
	var section5Inited = false;
	var section6Inited = false;
	var section7Inited = false;
	var section8Inited = false;
	
	var tl2 = new TimelineLite({paused:true});
		tl2.to("#myObject", 1, {left:00, y:150});
	var tl3 = new TimelineLite;
		tl3.to("#myObject", 1, {x:100, y:100, z:300, transformOrigin:" 50% 50%"} );
	// EVENT HANDLERS
	document.body.scrollTop = document.documentElement.scrollTop=0;
	
	// FUNCTIONS()
	$(document).scroll(function() {
					
		scrollValue = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
				
		CSSPlugin.defaultTransformPerspective = 2100;	
		
		if( scrollValue < 10 && section1Inited == true){
				//initial state
				//think about the universe as a flat plane.
				section1Inited = true;
				tl2.play();
				console.log('1');
		}	
		
			else if(scrollValue >= 10 && scrollValue < 500 && section2Inited == false){
				//start motion
				section2Inited = true;
				tl3.play();
				$( "#myObject" ).html( "<p>think about the universe as a flat plane...<span></span></p>" );
		}
				
			else if(scrollValue >= 500 && scrollValue < 1000){
				//loop and zoom in, parade other planes
				//an unlimited amount of universes would mean an unlimited amount of parallel, flat planes.
				if(section3Inited == false){
					$( "#myObject" ).html( "<p>an unlimited amount of universes would mean an unlimited amount of planes.<br/>unlimited posibilities,<br/>unlimited choices...<span></span></p>" );

					section3Inited = true;
					tl = new TimelineLite;
	
					tl.to("#myObject", 1, {x:400, y:600, onComplete:tl} )
					  .to("#myObject", 1, {rotationX:-360, transformOrigin:"left 50% -200"},"-=1"  )
					  
					  .to("#myObject2", 1, {y:1200}, "-=1" )
					  .to("#myObject2", 1, {rotationY:25, x:600, transformOrigin:"center center"})
					  .to("#myObject3", 1, {y:1200}, "-=1" )
					  .to("#myObject3", 1, {rotationY:25, x:500, transformOrigin:"center center"})
					  .to("#myObject4", 1, {y:1200}, "-=1" )
					  .to("#myObject4", 1, {rotationY:25, x:400, transformOrigin:"center center"})
					  .to("#myObject5", 1, {y:1200}, "-=1" )
					  .to("#myObject5", 1, {rotationY:25, x:300, transformOrigin:"center center"})
					  .to("#myObject6", 1, {y:1200}, "-=1" )
					  .to("#myObject6", 1, {rotationY:25, x:200, transformOrigin:"center center"})
					  .to("#myObject7", 1, {y:1200}, "-=1" )
					  .to("#myObject7", 1, {rotationY:25, x:100, transformOrigin:"center center"})
				}
				  
				 

		}
		
			else if(scrollValue >= 1000 && scrollValue < 1500){
				//lets get in line
				
				if(section4Inited == false){
					$( "#myObject" ).html( "<p>always parallel, universes would never overlap...<span></span></p>" );

					section4Inited = true;
					tl = new TimelineLite;
	
					tl.to("#myObject", 1, {y:910})
					  .to("#myObject", 1, {rotationY:25, x:300,  transformOrigin:"center center"}, "-=1")
					  .to("#myObject8", 1, {y:1200}, "-=2" )
					  .to("#myObject8", 1, {rotationY:25, x:-300, transformOrigin:"center center"})
					  .to("#myObject9", 1, {y:1200}, "-=2" )
					  .to("#myObject9", 1, {rotationY:25, x:-200, transformOrigin:"center center"})
				}


		}
		
			else if(scrollValue >= 1500 && scrollValue < 2000){
				//isolate 2 planes
				if(section5Inited == false){
					$( "#myObject" ).html( "<p>but what would happen if they touched?<span></span></p>" );

					section5Inited = true;
					tl = new TimelineLite;
	
					tl.to("#myObject", 1, {x:300, y:1500})
					  .to("#myObject2", 1, {x:400, y:1600, z:300},"-=1")
					  .to("#myObject10",1,{y:2000}, "-=2")
					  //.to("#myObject10", 2,{x:-300})
					  
					  .to("#myObject11", 1, {y:2000, rotationY:25, z:300, transformOrigin:"center center", opacity:0})
	
					  //clear other planes.
					  .to("#myObject3", 1, {opacity:0}, "+=2")
					  .to("#myObject4", 1, {opacity:0},"-=1")
					  .to("#myObject5", 1, {opacity:0},"-=2")
					  .to("#myObject6", 1, {opacity:0},"-=3")
					  .to("#myObject7", 1, {opacity:0},"-=4")
					  .to("#myObject8", 1, {opacity:0},"-=4")
					  .to("#myObject9", 1, {opacity:0},"-=4")
				}


		}
		
		else if(scrollValue >= 2000 && scrollValue < 2500){
				//what happens when they touch?
				if(section6Inited == false){
					$( "#myObject" ).html( "<p>...<span></span></p>" );
					section6Inited = true;
					tl = new TimelineLite;
	
					tl.to("#myObject10", 1,{opacity:0})
					  .to("#myObject", 1, { y:1950},"-=1")
					  .to("#myObject2", 1, { y:2000},"-=1")
					 
					  .to("#myObject", 3, { x:175})
					  .to("#myObject2", 3, { x:600},"-=3")
					 .to("#myObject11", .01, {x:600})
					 .to("#myObject11", 1, {opacity:1})
				}
				  
				  
		}
		
			else if(scrollValue >= 2500 && scrollValue < 2700){
				//new plane "created"
				$( "#myObject" ).html( "<p>a new universe gets created in the space between!<br/>a new choice...<span></span></p>" );
				if(section7Inited == false){
					section7Inited = true;
					tl = new TimelineLite;
	
					tl
	
					  .to("#myObject2", 1, { x:-200, opacity:0})
					  .to("#myObject", 1, { x:1000},"-=1")
									  
					  .to("#myObject11", .5, { rotationY:360, transformOrigin:"center center"},"-=1")
					  .to("#myObject11", 1, {y:2500})
					  .to("#myObject", 1, {rotationY:0,y:2100, x:300, opacity:1},"-=1")

				}
				
				
		}
		
		else if(scrollValue >= 2700){
				//new plane "created"
				$( "#myObject" ).html( "<p>...and that's where new universes come from!<br/>of coarse this is all hypothetical. <br/>very meta.<br/>(please refresh to restart.)<br/><em></em></p>" );
				if(section8Inited == false){
					section8Inited = true;
					tl = new TimelineLite;
					tl.to("#myObject", 1, { y:2700, x:300})
				}
				
		};
	});
	
	var count = null;

	$('nav a').on('click', function(){
				var $anchor = $(this);
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top-60
				}, 1500,'easeInOutExpo');
	});

	$('#button').on('click',function(event){



		if(count==null){
			$("a").attr("href", "#anchor1");
			count = 1;

		} else if
		(count == 1){
			$("a").attr("href", "#anchor2")	;
			count = 2;	
		} else if
		(count == 2){
			$("a").attr("href", "#anchor3")	;
			count = 3;	
		} else if
		(count == 3){
			$("a").attr("href", "#anchor4")	;
			count = 4;	
		} else if
		(count == 4){
			$("a").attr("href", "#anchor5")	;
			count = 5;	
		} else if
		(count == 5){
			$("a").attr("href", "#anchor6")	;
			count = 6;	
		} else if
		(count == 6){
			$("a").attr("href", "#anchor7")	;
			count = 7;	
		};
		
		var $anchor = $(this);
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top-0
				}, 2000,'easeInOutExpo');
		
	});
	
	$('#end').click(function() {
		location.reload();
	});
	// INITIALIZATION
	
	
});