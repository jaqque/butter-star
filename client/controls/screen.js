var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

document.addEventListener("fullscreenchange", function () {
	//console.log(document.fullscreen);
	fullScreenMode = (fullScreenMode == 1) ?  0 : 1;
	var element = document.body;
	element.requestPointerLock();
}, false);

document.addEventListener("mozfullscreenchange", function () {
	console.log(document.mozFullScreen);
	fullScreenMode = (fullScreenMode == 1) ?  0 : 1;
	var element = document.body;
	element.requestPointerLock();
}, false);

document.addEventListener("webkitfullscreenchange", function () {
	console.log(document.webkitIsFullScreen);
	console.log("yo this used webkitfullscreen");
	fullScreenMode = (fullScreenMode == 1) ?  0 : 1;
	var element = document.body;
	element.webkitRequestPointerLock();
}, false);	


window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );
}
