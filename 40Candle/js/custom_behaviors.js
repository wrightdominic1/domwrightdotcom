



$(document).ready(function() {
	resizeAdjustments(); // adjust the size of video placeholder image to fit the screen and keep aspect ratio (zoom crop)
	totalFrames = 40; 

	for(i = 0; i < totalFrames; i++) { // loop for each image in sequence
			images[i] =  new Image(); // add image object to array
			images[i].src = "./frames/"+pad(i, 2)+".gif"; // set the source of the image object
		
	}
	
});
