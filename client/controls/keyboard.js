/*
 * check for key pressed from the player
 */
var timer;
document.addEventListener('keydown', function(e){
	if(e.shiftKey == 1) {
		controlsEvent.sprinting = true;
	}
	if(e.shiftKey == 0) {
		controlsEvent.sprinting = false;
	}

	//'m' key
	if(e.keyCode == 77) {
		audio.pause();
	}

	switch(e.keyCode) {
		case 77: audio.pause();
			 break;
		default:
	}

	if( !/65|68|83|87/.test(e.keyCode)){ 

		send(controlsEvent);
		return; 
	}

	switch(e.keyCode) {
		case 87:		//W
			controlsEvent.front     = true;
			controlsEvent.Backwards = false;
			break;
		case 65:		//A
			controlsEvent.left  = true;
			controlsEvent.right = false;
			break;
		case 83:		//S
			controlsEvent.Backwards = true;
			controlsEvent.front     = false;
			break;
		case 68:		//D
			controlsEvent.right = true;
			controlsEvent.left  = false;
			break;
		default:
			//console.log(e.keyCode);
	}

	if(!controlsEvent.moving){
		controlsEvent.moving = true;
		//move();
		timer = setInterval( function(){
			//move();
			send(controlsEvent);
		}, 1000 / 60);
	}
	send(controlsEvent);

}, false);

document.addEventListener('keyup', function(e){
	if(e.shiftKey == 1) {
		controlsEvent.sprinting = false;
	}
	if(e.shiftKey == 0) {
		controlsEvent.sprinting = false;
	}
	switch(e.keyCode) {
		case 70: 		//F
			toggleFullScreen();
			//handleFullscreen();
			break;
		default:
			//console.log(e.keyCode);
	}

	if( !/65|68|83|87/.test(e.keyCode)){ send(controlsEvent);return; }

	switch(e.keyCode) {
		case 87:		//W
			controlsEvent.front = false;
			break;
		case 65:		//A
			controlsEvent.left = false;
			break;
		case 83:		//S
			controlsEvent.Backwards = false;
			break;
		case 68:		//D
			controlsEvent.right = false;
			break;
	}


	if(!controlsEvent.front && !controlsEvent.Backwards && !controlsEvent.left && !controlsEvent.right){
		controlsEvent.moving = false;
		clearInterval(timer);
	}
	send(controlsEvent);
}, false);