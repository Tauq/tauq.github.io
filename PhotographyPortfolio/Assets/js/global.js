$(document).ready(function(){

	$(".menuButton").click(function(){
		event.preventDefault();
			$(".menuAtTopNav").css("display","block");
	});

	$(".menuAtTopCloseAnchor").click(function(){
		event.preventDefault();
			$(".menuAtTopNav").css("display","none");
	});

});
