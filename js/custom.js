$(document).ready(function($){

	var offset = 500;
  	var duration = 500;
  	var offsetCT = 1500;
  	var to_top = $('#back-to-top, #fixed-contact');
	$(window).scroll(function() {
	    $(this).scrollTop() > offset?to_top.fadeIn(duration):to_top.fadeOut(duration);
	});
	
	$('a[href^="#"]').click(function (event) {
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	});

	$('.question').click(function(){
		$(this).toggleClass("active").next(".answer").slideToggle();
		var list = $(this).closest(".faq_list");

		list.find('.question').not($(this)).removeClass("active").next('.answer').slideUp();
	});
	$('.kitahara-carousel').owlCarousel({
	    loop:true,
	    nav:true,
	    dots:false,
	    items: 1
	})
	
})