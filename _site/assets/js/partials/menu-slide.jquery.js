$(document).ready(function() {

	var nav     = $('nav'),
		 trigger = $('.menu-button'),
		 menu    = $('ul[role="navigation"]');

	// Hide/Show menu
	trigger.click(function() {

		nav.toggleClass('active');

	});

	// Hide menu on click
	menu.find('a').click(function(e) {

		nav.removeClass('active');

	});

});