$(document).ready(function(){	
	"use strict";
    $("#testimonial-slider").owlCarousel({		
        items:3,
        itemsDesktop:[1000,3],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination: true,
        autoPlay:true
    });
});
