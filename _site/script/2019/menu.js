// give the menu a close control

$(".fhf-nav").prepend("<a href='#' class='close-control'>&#x2715;</a>");


// click handler for the close control

$("a.close-control").click(function() {

	$(".fhf-nav").toggleClass("is-active");
	$("ul.menu").toggleClass("is-active");
	$(".beer-search").toggleClass("is-hidden");
	return false;

});



// click handler for the menu control

$("a.menu-icon").click(function() {

	$(".fhf-nav").toggleClass("is-active");
	$("ul.menu").toggleClass("is-active");
	$(".beer-search").toggleClass("is-hidden");
	return false;

});



// close menu when option is selected

$("li.nav-item a.anchor").click(function() {

	$(".fhf-nav").toggleClass("is-active");
	$("ul.menu").toggleClass("is-active");
	return false;

});






// adjust mobile menu display based on breakpoints

var $wind = $(window),
    breakpoints = [320, 480, 640, 800, 960, 1120, 1280],
    currentBreakpoint = 0;
    mobile = true;

var mobileFunctions = function() {
	nav = $("ul.menu").detach();
	nav.prependTo("body");
}

var desktopFunctions = function() {
	nav = $("ul.menu").detach();
	nav.appendTo(".fhf-nav");
}

var breakpointHit = function(breakpoint) {
    mobileCheck();
}

var mobileCheck = function() {

	var window_w = $wind.width();

	if ( window_w < 960 ) {

		mobileFunctions();
		mobile = true;

	} else {
		if ( !mobile ) {
			return;
		} else {
			desktopFunctions();
			mobile = false;
		}
	}

};
mobileCheck();

$wind.resize(function() {
	var i$, len$; window_w = $wind.width();
    for (i$ = 0, len$ = breakpoints.length; i$ < len$; i$++) {
        var testPoint = breakpoints[i$];
        if (window_w < testPoint) {
             if (testPoint == currentBreakpoint)
                 break;
             currentBreakpoint = testPoint;
             breakpointHit(testPoint);
             break;
        }
    }
});
