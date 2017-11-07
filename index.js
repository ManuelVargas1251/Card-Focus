//initially hide video player 1
$("#v1").hide();

//expand card to fill container
$("#card_button_1").click(function(){
	$("#card_2").fadeOut("slow");
	$("#card_3").fadeOut("slow");
	
	$("#v1").show();
})