$(document).ready(function() {

// breakpoint and up  
$(window).resize(function(){
	if ($(window).width() >= 980){	

      // when you hover a toggle show its dropdown menu
      $(".navbar .dropdown-toggle").hover(function () {
         $(this).parent().toggleClass("show");
         $(this).parent().find(".dropdown-menu").toggleClass("show"); 
       });

        // hide the menu when the mouse leaves the dropdown
      $( ".navbar .dropdown-menu" ).mouseleave(function() {
        $(this).removeClass("show");  
      });
  
	}	
});  

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var $rokomari = $("#upper-header-wrapper");
    if (scroll >= $rokomari.height()) {
        $("#upper-header-wrapper").addClass("shadow");
    } else {
        $("#upper-header-wrapper").removeClass("shadow");
    }
});

});