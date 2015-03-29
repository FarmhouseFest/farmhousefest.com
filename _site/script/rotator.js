$(document).ready(function() {

	// image controls
	var parent = "ul.participating";

	var numImages = 12;
	var control = new Array(numImages);

	var imgCount;
	var imgSrc = new Array();
	var imgAlt = new Array();
	var imgHref = new Array();


	var Found = false;
	var Count = 0;

	// get unique random number
	function GetUnique(max, num) {
		for (i = 0; Count < num; Count++) {
			Found = false;
			var rndValue = get_random(max);
			var j = 0;
			for (j = 0; j < control.length; j++) {
				if (control[j] == rndValue) {
					Found = true;
					break;
				}
			}
			if (Found) {
				Count--;
			} else {
				control[Count] = rndValue;
			}
		}
	}
	function get_random(max) {
		var ranNum = Math.round(Math.random() * max);
		return ranNum;
	}



	// clear all child li elements
	function clearAll(parent) {
		$(parent).children("li").each(function(index) {
			$(this).remove();
		});
	}



	// add an image to specified location in the DOM
	function imgAdd(me) {
		// generate the markup
		var img = "<li class=\"beer\">" + '<a href="' + imgHref[me] + '">';
		img += '<img class=\"logo\" src="' + imgSrc[me] + '" alt="' + imgAlt[me] + '">';
		img += "</a></li>";
		$(img).appendTo(parent);
	}

	// toss all images into respective arrays
	$(parent).children("li").each(function(index) {
		imgCount++;
		imgSrc[index] = $(this).children().children("img").attr("src");
		imgAlt[index] = $(this).children().children("img").attr("alt");
		imgHref[index] = $(this).children("a").attr("href");
	});

	// then clear them
	clearAll(parent);

	// build an array of random indexes the desired number of images
	GetUnique((imgSrc.length - 1), numImages);

	// re-add our random selection of images to the page
	for (i = 0; i < control.length; i++) {
		imgAdd(control[i]);
	};

});