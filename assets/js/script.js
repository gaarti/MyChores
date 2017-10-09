/* 
Author: 
*/

/*=====================responsive navication code ===============================*/
$('#MainMenu > li').click(function(e) {
	e.stopPropagation();
	var $el = $(this).children('ul');
	$('#MainMenu > li > ul').not($el).slideUp();
	$el.stop(true, true).slideToggle(400);
	console.log("sssssss-->", $(this).children('ul').length, "|", $el);
});

$('#MainMenu > li > ul > li').click(function(e) {
	e.stopPropagation();
	var $el = $(this).children('ul');
	$el.stop(true, true).slideToggle(400);
});


/*==========================responsive-contact-menu==============================*/
$('#contact-menu > li').click(function(e) {
	e.stopPropagation();
	var $el = $(this).children('ul');
	$('#contact-menu > li > ul').not($el).slideUp();
	$el.stop(true, true).slideToggle(400);
	console.log("sssssss-->", $(this).children('ul').length, "|", $el);
});


$('#contact-menu > li > ul > li').click(function(e) {
	e.stopPropagation();
	var $el = $(this).children('ul');
	$el.stop(true, true).slideToggle(400);
});
/*======================responsive call hamburger code=============================*/

$('.humburger').on('click', function(e) {
	e.stopPropagation();
	$('.responsive-contact-menu').slideUp(200);
	$('.responsive-menu').slideToggle(500);
	
})

$('.mobile-device-phone-icon').on('click', function(e) {
	e.stopPropagation();
	$('.responsive-menu').slideUp(200);
	$('.responsive-contact-menu').slideToggle(500);
	
})


// AOS animation
AOS.init();





















