$(document).ready(function(){  //This performs specified actions when the page fully loads
	//puts most recent text from sql into following textboxes
	$.ajax({
		type: 'POST',
		url: 'retrieve.php',
		data: 'data',
		dataType: 'json',
		success: function(result){
			$("#box0").html(result[0]);
		}
	});
	
		$.ajax({
		type: 'POST',
		url: 'retrieve.php',
		data: 'data',
		dataType: 'json',
		success: function(result){
			$("#box1").html(result[1]);
		}
	});
	
		$.ajax({
		type: 'POST',
		url: 'retrieve.php',
		data: 'data',
		dataType: 'json',
		success: function(result){
			$("#box2").html(result[2]);
		}
	});
	
		$.ajax({
		type: 'POST',
		url: 'retrieve.php',
		data: 'data',
		dataType: 'json',
		success: function(result){
			$("#box3").html(result[3]);
		}
	});
	
	$("button").click(function(event){ // When a user clicks the button, this script runs
		var message = $("input").val(); // This obtains the the textbox input and stores it as a variable
		
		event.preventDefault(); //This sends the message data to my database
		$.post( "send.php", {message: message}); //This POSTS the message data to my php file
		
		//This moves messages from left to right
		$("#box3").empty();
		$("#box3").append( $("#box2").html());
		
		$("#box2").empty();
		$("#box2").append( $("#box1").html());
		
		$("#box1").empty();
		$("#box1").append( $("#box0").html());
		
		$("#box0").empty(); // This empties the leftmost view box
		$("#box0").append(message); //This places the users text into the leftmost textbox
		
		$('#message').val(""); //clears the textbox
	});
});
