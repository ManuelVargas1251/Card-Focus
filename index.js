//initially hide video player 1
$("#v1").hide();

$(".btn--open").text("Watch Now");

//expand card to fill container
$("#card_button_1").click(function(){
	
	let speed = 0;

	$("#card_2").toggle();
	$("#card_3").toggle();
	$("#v1").toggle();
	$("#card_button_1")
		.toggleClass("btn-primary")
		.toggleClass("btn-danger")
		.toggleClass("btn--open")
		.toggleClass("btn--close");
	
	$(".btn--open").text("Watch Now");
	$(".btn--close").text("Close");
	
});
