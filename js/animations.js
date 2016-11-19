/*$(window).scroll(function()
{
	if ($(this).scrollTop() > 800)
	{
		$('.affix').fadeIn(500);
	} else
	{
		$('.affix').fadeIn(500);
	}
});*/

//VISIBILITY ANIMATIONS
//Navbar Opacity
$(window).scroll(function() {
    if($(this).scrollTop() > 500) {
        $('#main-nav').addClass('opaque');
    } else {
        $('#main-nav').removeClass('opaque');
    }
});

//Go Up Arrow Opacity
$(window).scroll(function() {
    if($(this).scrollTop() > 600) {
        $('#go-up').addClass('opaque');
    } else {
        $('#go-up').removeClass('opaque');
    }
});


//SMOOTH SCROLL
//Navbar Smooth Scroll
$("#main-nav ul li a[href^='#']").on('click', function(e){

	//prevent default anchor click behaviour
	e.preventDefault();

	//store hash
	var hash = this.hash;

	//animate
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top
	}, 800, function(){

		//when done, add hash to url
		//(default click behaviour)
		window.location.hash = hash;
	});
});

//Navbar Brand Smooth Scroll
$("a.navbar-brand[href^='#']").on('click', function(e){

	//prevent default anchor click behaviour
	e.preventDefault();

	//store hash
	var hash = this.hash;

	//animate
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top
	}, 800, function(){

		//when done, add hash to url
		//(default click behaviour)
		window.location.hash = hash;
	});
});

//Footer Smooth Scroll
$("footer a[href^='#']").on('click', function(e){

	//prevent default anchor click behaviour
	e.preventDefault();

	//store hash
	var hash = this.hash;

	//animate
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top
	}, 800, function(){

		//when done, add hash to url
		//(default click behaviour)
		window.location.hash = hash;
	});
});

//Go Up Smooth Scroll
$("#go-up a[href^='#']").on('click', function(e){

	//prevent default anchor click behaviour
	e.preventDefault();

	//store hash
	var hash = this.hash;

	//animate
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top
	}, 800, function(){

		//when done, add hash to url
		//(default click behaviour)
		window.location.hash = hash;
	});
});

//Bouncing Arrow Smooth Scroll
$("a.arrow-link[href^='#']").on('click', function(e){

	//prevent default anchor click behaviour
	e.preventDefault();

	//store hash
	var hash = this.hash;

	//animate
	$('html, body').animate({
		scrollTop: $(this.hash).offset().top
	}, 800, function(){

		//when done, add hash to url
		//(default click behaviour)
		window.location.hash = hash;
	});
});

//Wait For Window to Load
$(window).load(function() {
	//Animate loader off screen
	$(".pre-loader").fadeOut("slow");;
});

/*DROPDOWN ANIMATIONS*/
// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
});

// ADD SLIDEUP ANIMATION TO DROPDOWN //
$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});

/*//Wait for Image to Load
$(function() {
	$('img').imgPreload()
})*/

//TYPING ANIMATION
$(function(){
		$("#typed").typed({
			stringsElement: $('#typed-strings'), 
			typeSpeed: 20,
			startDelay: 2000,
		});
	});
