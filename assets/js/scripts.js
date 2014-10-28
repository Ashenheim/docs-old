// Scripts and links

(function ($) {
	$(document).ready(function() {

		$('a[href^="#"]').click(function() {

			var target = $(this.hash);

			if (target.length === 0) {
				target = $('a[name="' + this.hash.substr(1) + '"]');
			}
			if (target.length === 0) {
				target = $('html');
			}

			$('html, body').animate({
				scrollTop: target.offset().top -70 // Header height
			}, 200);



			// Add and remove class "focus" to target
			$('article.section').removeClass('focus');
			target.addClass('focus');
			
			return false;

		});

		var nav     = $('nav');
		var trigger = $('.menu-button');
		var menu    = $('ul[role="navigation"]');

		// Hide/Show menu
		trigger.click(function() {

			nav.toggleClass('active');

		});

		// Hide menu on click
		menu.find('a').click(function(e) {

			nav.removeClass('active');

		});

	});
})(JQuery);