//initially hide video player 1
$("#v1").hide();


//expand card to fill container
$("#card_button_1").click(function(){
	let speed = "fast";
	
	$("#card_2").fadeOut(speed);
	$("#card_3").fadeOut(speed);
	
	$("#v1").fadeIn("slow", function(){
		this.show();
	});
})