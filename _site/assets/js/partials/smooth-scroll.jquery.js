// Scripts and links

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
			scrollTop: target.offset().top
		}, 200);

		// Add and remove class "focus" to target
		$('article.section').removeClass('focus');
		target.addClass('focus');
		
		return false;

	});

});