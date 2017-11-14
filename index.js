//initially hide video player 1
$("#v1, #v2, #v3").hide();
$("#card_button_2").hide();

$(".btn--open").text("Watch Now");

//expand card to fill container
$("#card_button_1").click(function(){

	let speed = 0;

	$("#card_2").toggle();
	$("#card_3").toggle();
	$("#v1").toggle();
	
	$("#card_button_2").toggle();
	
	$("#card_button_1")
		.toggleClass("btn-primary, btn-danger")
		.toggleClass("btn--open, btn--close");


	$(".btn--open").text("Watch Now");
	$(".btn--close").text("Close");
	$("#card_button_2").text("Open Folder");

});

//favoriting a video
$("#h-1").click(function(){
	$("#h-1").toggleClass("fa-heart-o")
		.toggleClass("fa-heart")
		.toggleClass("animated tada")
		.toggleClass("favorited");
});