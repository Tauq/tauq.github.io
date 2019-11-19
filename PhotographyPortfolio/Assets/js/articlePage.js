$(document).ready(function(){

	$(".searchIcon").click(function(){
		event.preventDefault();
			$(".article__searchInput").toggle();      // This makes the search input box toggle between appearing and disappearing
	});

});