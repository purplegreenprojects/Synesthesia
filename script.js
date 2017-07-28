$(document).ready(function() {

//function (instructions)
	function printText() {
		var text = $("#enterText").val()
		var letterList = text.split("");

		var output = "";

		for (letter of letterList) {
			output = output + "<span class='allLetters _" + letter.toLowerCase() + "'>" + letter + "</span>";
		}

		$("#colorText").html(output);
		$("#hoverText").html(output);

	}

//call the function
	$("#originalText").on("keyup", function() {
		printText()
	})

});
