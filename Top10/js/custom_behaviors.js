
$(document).ready(function() {
					
			var songPlaying = false;
			var activePlayButton;
			// var activeSong;
			
			$(".song a").on("tap", function(){
				if(this == activePlayButton){
					$(this).parent(".song").children('.audioHolder').children('.audioPlayer').load();
					//$(this).parent(".song").children('.audioHolder').children('.audioPlayer').trigger("pause");
					
					activePlayButton = null;
					songPlaying = false;
					$(this).removeClass("playing");
					$(this).addClass("playPauseButton");
				} else{
					if (songPlaying == false) {
						$(this).parent(".song").children('.audioHolder').children('.audioPlayer').trigger("play");
						
					} else{
						$(activePlayButton).parent(".song").children('.audioHolder').children('.audioPlayer').load();
						//$(activePlayButton).parent(".song").children('.audioHolder').children('.audioPlayer').trigger("pause");
						
						$(this).parent(".song").children('.audioHolder').children('.audioPlayer').trigger("play");
						$(activePlayButton).removeClass("playing");
						$(this).addClass("playing");
					};
					activePlayButton = this;
					songPlaying = true;
					var activeSong = $(this).parent(".song").children('.audioHolder').children('audio');
					addEndedEventListener(activeSong);
					$(this).removeClass("playPauseButton")
					$(this).addClass("playing");
				};
				
			});
			
			function addEndedEventListener(activeSong){
				activeSong.on("ended", function(){
					activePlayButton = null;
					songPlaying = false;
					$(this).parent(".audioHolder").parent(".song").children('a').removeClass("playing");
					$(this).addClass("playPauseButton");
				});
			};
			
			$('footer a, nav a').on('tap', function(event){
						$(this).parent(".song").children('.audioHolder').children('.audioPlayer').load();
					//$(this).parent(".song").children('.audioHolder').children('.audioPlayer').trigger("pause");
					
					activePlayButton = null;
					songPlaying = false;
					$(this).removeClass("playing");
			});
		
		});
	