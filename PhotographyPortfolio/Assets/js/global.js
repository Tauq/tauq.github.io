$(document).ready(function(){

	$(".menuButton").click(function(){
		event.preventDefault();
			$(".menuAtTopNav").css("display","block");      // This makes the menu appear
			$(".homePage__hero").css("position","static");  // Setting this to static rather than relative makes the menu appear correctly, otherwise it gets cut off at the bottom
			$(".homePage__text").css("display","none");     // This is a work-around - make text over image disappear when menu is visible - avoids problem with words going further down the page when position is changed to static

	});

	$(".menuAtTopCloseAnchor").click(function(){
		event.preventDefault();
			$(".menuAtTopNav").css("display","none");        // This makes the menu disappear
			$(".homePage__hero").css("position","relative"); // Put this setting back to as it was before the menu was displayed, so the text is displayed over the image again
			$(".homePage__text").css("display","block");     // Put the text back to as it was before the menu was displayed
	});

});
