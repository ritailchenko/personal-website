$('.footer .fa').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 500);
	return false;
});

$('.js-wp-1').waypoint(function(direction){
    $('.js-wp-1').addClass('animated zoomIn');
}, {
    offset: '80%'
});

$('.js-wp-2').waypoint(function(direction){
    $('.js-wp-2').addClass('animated fadeIn');
}, {
    offset: '40%'
});

$('.js-wp-3').waypoint(function(direction){
    $('.js-wp-3').addClass('animated fadeInDown');
}, {
    offset: '50%'
});


$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        }); 
    
    });
    
});


