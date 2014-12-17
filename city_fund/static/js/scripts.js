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
    
    var ScrollSneak = function(prefix, wait) {
    // clean up arguments (allows prefix to be optional - a bit of overkill)
    if (typeof(wait) == 'undefined' && prefix === true) prefix = null, wait = true;
    prefix = (typeof(prefix) == 'string' ? prefix : window.location.host).split('_').join('');
    var pre_name;

    // scroll function, if window.name matches, then scroll to that position and clean up window.name
    this.scroll = function() {
        if (window.name.search('^'+prefix+'_(\\d+)_(\\d+)_') == 0) {
            var name = window.name.split('_');
            window.scrollTo(name[1], name[2]);
            window.name = name.slice(3).join('_');
        }
    };
    // if not wait, scroll immediately
    if (!wait) this.scroll();

    this.sneak = function() {
	// prevent multiple clicks from getting stored on window.name
	if (typeof(pre_name) == 'undefined') pre_name = window.name;

	// get the scroll positions
        var top = 0, left = 0;
        if (typeof(window.pageYOffset) == 'number') { // netscape
            top = window.pageYOffset, left = window.pageXOffset;
        } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) { // dom
            top = document.body.scrollTop, left = document.body.scrollLeft;
        } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) { // ie6
            top = document.documentElement.scrollTop, left = document.documentElement.scrollLeft;
        }
	// store the scroll
        if (top || left) window.name = prefix + '_' + left + '_' + top + '_' + pre_name;
        return true;
            }
        };

    var sneaky = new ScrollSneak("tabs", false);
    var capture = true;

    var urlHash = window.location.hash;

    $("#submit-id-submit").on("click", function(e) {
        sneaky.sneak();
        capture = true;
    });

    capture = false;

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