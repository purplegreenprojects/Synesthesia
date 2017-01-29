$(document).ready(function() {

	//make dynamic
	var sentence = ("abcdcdcdabc");
	var eachLetter = sentence.split("");

	//eachLetter = ["a", "b", "c", "d"]
		console.log(eachLetter);
		console.log(eachLetter[2]);

	var i = 0;
	var letterNumber = i++;

	$("#text").empty()
		// .append(eachLetter[0])
		// .append(eachLetter[1])
		// .append(eachLetter[2])
		// .append(eachLetter[3])
		// .append(eachLetter[4])
		// .append(eachLetter[5])
		// .append(eachLetter[6])
		// .append(eachLetter[7])
		// .append(eachLetter[8])
		// .append(eachLetter[9])
		// .append(eachLetter[10]);

		.append(eachLetter[letterNumber])
		.append(eachLetter[letterNumber+1]);

});


// $("#text").empty()
	// 	.append("<div class='" + eachLetter[0] + "'>" + eachLetter[0] + "</div>")
	// 	.append("<div class='" + eachLetter[1] + "'>" + eachLetter[1] + "</div>")
	// 	.append("<div class='" + eachLetter[2] + "'>" + eachLetter[2] + "</div>")
	// 	.append("<div class='" + eachLetter[3] + "'>" + eachLetter[3] + "</div>");



// $(sentence).each(function(i))