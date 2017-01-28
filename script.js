$(document).ready(function() {

	//make dynamic
	var sentence = ("abcdcdcdaabbccdd");
	var eachLetter = sentence.split("");
;
	//eachLetter = ["a", "b", "c", "d"]
		// console.log(eachLetter);
		// console.log(eachLetter[2]);

	
	var i = 0;
	var letterX = i++;

	$("#text").empty()
		// .append("<div class='a'>" + eachLetter[0] + "</div>")
		// .append("<div class='" + eachLetter[0] + "'>" + eachLetter[0] + "</div>")
		.append("<div class='" + eachLetter[0] + "'>" + eachLetter[0] + "</div>")
		.append("<div class='" + eachLetter[1] + "'>" + eachLetter[1] + "</div>")
		.append("<div class='" + eachLetter[2] + "'>" + eachLetter[2] + "</div>")
		.append("<div class='" + eachLetter[3] + "'>" + eachLetter[3] + "</div>");

	// console.log(sentence[letterX]);
	// console.log(sentence[letterX]);
	// console.log(sentence[letterX]);
	// console.log(sentence[letterX]);

	// $("#text").empty().append(sentence);


});