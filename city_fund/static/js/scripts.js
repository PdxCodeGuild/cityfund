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
});
