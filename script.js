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
		clearInterval(window.finishTyping)

		window.finishTyping = setTimeout(function(){
			swoosh()
		},3000)
	})

//swoosh function
	function swoosh(){
		console.log("swooshing")
		window.swooshLoop = setInterval(function(){
			var swooshing = $(".swoosh")
			if (swooshing.length == 0) {
				$("#hoverText").find("span").first().addClass("swoosh")
			}
			else {
				$(".swoosh").removeClass("swoosh")

				var nextSwoosh = $(swooshing).next()
				if (nextSwoosh.length !== 0) {
					$(nextSwoosh).addClass("swoosh")
				}
				else {
					clearInterval(window.swooshLoop)
				}
			}
		},100)
	}

});
