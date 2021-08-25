var loadSong = function(song){
	//create a new video element with "auto" preload and native "controls"
	media = document.body.appendChild(document.createElement('audio'));
	media.style.display = "none";
	media.setAttribute('preload', 'auto');
	media.setAttribute('controls', 'controls');
	
	//create the progress-meter element
	var progress = document.body.appendChild(document.createElement('div'));
	progress.id = 'progress';
	
	//define a progress abstraction
	function onprogress(){
		//get the buffered ranges data
		var ranges = [];
		for(var i = 0; i < media.buffered.length; i ++){
			ranges.push([
				media.buffered.start(i),
				media.buffered.end(i)
			]);
		}
		
		//get the current collection of spans inside the container
		var spans = progress.getElementsByTagName('span');
		
		//then add or remove spans so we have the same number as time ranges
		while(spans.length < media.buffered.length){
			progress.appendChild(document.createElement('span'));
		}
		while(spans.length > media.buffered.length){
			progress.removeChild(progress.lastChild);
		}
		
		//now iterate through the ranges and convert each set of timings
		//to a percentage position and width for the corresponding span
		for(var i = 0; i < media.buffered.length; i ++){
			spans[i].style.left = Math.round((100 / media.duration)*ranges[i][0])+ '%';
			spans[i].style.width = Math.round((100 / media.duration)*(ranges[i][1] - ranges[i][0]))+ '%';
		}
		
		//console.log(Math.round((100 / media.duration)*(ranges[0][1] - ranges[0][0]))+ '%')
		
		if(Math.round((100 / media.duration)*(ranges[0][1] - ranges[0][0])) == 100){
				$("#progress").fadeOut(500);
				media.play();	
		}
	}
	
	//bind progress and loadedmetadata events to call the progress abstraction
	media.addEventListener('progress', onprogress, false);
	media.addEventListener('loadedmetadata', onprogress, false);
	media.src = 'audio/'+ song+'.mp3?nocache='+ new Date().getTime();
	//media.src = 'http://robertfraher.com/385/audio_loader/audio/'+ song+'.mp3?nocache='+ new Date().getTime();
};