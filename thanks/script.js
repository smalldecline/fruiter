/* ----------------------------------------------------------------------------------- FAST CLICK
It removes 300ms of delay when clicking ui elements as per device default.
Has to be loaded before any other javascript.
Devices have this delay as default in case the user needs to performe a double tap. */
window.addEventListener('load', function() {
	new FastClick(document.body);
}, false);