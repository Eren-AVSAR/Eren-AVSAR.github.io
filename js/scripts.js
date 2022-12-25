/* Description: Custom JS file */


(function($) {
    "use strict"; 
	
    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });


    /* Countdown Timer - The Final Countdown */
	$('#clock').countdown('2023/6/18 19:38:00') /* change here your "countdown to" date */
	.on('update.countdown', function(event) {
		var format = '<span class="counter-number">%D<br><span class="timer-text">Gün</span></span><span class="counter-number">%H<br><span class="timer-text">Saat</span></span><span class="counter-number">%M<br><span class="timer-text">Dakika</span></span><span class="counter-number">%S<br><span class="timer-text">Saniye</span></span>';
		$(this).html(event.strftime(format));
	})
	.on('finish.countdown', function(event) {
	$(this).html('Süresi doldu!')
		.parent().addClass('disabled');
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);
