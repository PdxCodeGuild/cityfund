$(document).ready(function() {

    var scrollToId = function(element) {
        $('html, body').animate(
	    {scrollTop: $(element).offset().top}, 500);
    }

    $("a").click(function(event) {
        if ($(this).attr("href").match("#")) {
            event.preventDefault();
            var pageSection = $(this).attr('href');
            scrollToId(pageSection);
            }
    });

    // show and hide Navbar
    $(function smartNav(){
        //Keep track of last scroll
        var lastScroll = 0;
        $(window).scroll(function(event){
            //Sets the current scroll position
            var scrollPosition = $(this).scrollTop();
            //Determines up-or-down scrolling
            if (scrollPosition > lastScroll){ 
                setTimeout(function() {
                    $('nav').removeClass('navbar-fixed-top');
                }, 1500);
            } else {
                $('nav').addClass('navbar-fixed-top');
                }
            //Updates scroll position
            lastScroll = scrollPosition;
        });
    });
});