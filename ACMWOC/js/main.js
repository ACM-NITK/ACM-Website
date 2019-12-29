const ani_navbar = document.querySelectorAll('.nav-item , .btn_hover_two');
const ani_head = document.querySelectorAll('h1,h2,h3,h4');
const ani_text = document.querySelectorAll('p,.listItem , .view_btn');

observer_navbar = new IntersectionObserver(entries =>{
	entries.forEach(entry => {
		if(entry.intersectionRatio > 0){
			entry.target.className += " fadeIn second";
		}
	})
})

observer_head = new IntersectionObserver(entries =>{
	entries.forEach(entry => {
		if(entry.intersectionRatio > 0){
			entry.target.className += " fadeInDown";
		}
	})
})

observer_text = new IntersectionObserver(entries =>{
	entries.forEach(entry => {
		if(entry.intersectionRatio > 0){
			entry.target.className += " fadeInUp";
		}
	})
})

ani_navbar.forEach((ani_navbar) => {
	observer_navbar.observe(ani_navbar)
})

ani_head.forEach((ani_head) => {
	observer_head.observe(ani_head)
})

ani_text.forEach((ani_text) => {
	observer_text.observe(ani_text)
})

let test = document.querySelector(".navbar-brand");
test.addEventListener('mouseenter',function(event){
	let image = event.target.querySelector('img') ;
	image.style.height = "70px";
	setTimeout(function(){
		image.style.height = "50px";
	},2500);
});

$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});
});
