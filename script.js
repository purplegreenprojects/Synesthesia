$(document).ready(function() {

	var sentence = ("a cab");
	var eachLetter = sentence.split("");

	//eachLetter = ["a", "b", "c", "d"]
		console.log(eachLetter);
		console.log(eachLetter[2]);

	var i = 0;
	var letterNumber = i++;

	$("#text").empty()
		.append("<div class='" + eachLetter[letterNumber] + "'>" + eachLetter[letterNumber] + "</div>")
		.append("<div class='" + eachLetter[1] + "'>" + eachLetter[1] + "</div>")
		.append("<div class='" + eachLetter[2] + "'>" + eachLetter[2] + "</div>")
		.append("<div class='" + eachLetter[3] + "'>" + eachLetter[3] + "</div>")
		.append("<div class='" + eachLetter[4] + "'>" + eachLetter[4] + "</div>");

});


//https://learn.jquery.com/using-jquery-core/iterating/
//https://api.jquery.com/each/

	// $(sentence).each(function(i))




// Problem: not separate divs, so probably can't actually have different classes

	// $("#text").empty()
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

		// .append(eachLetter[letterNumber])
		// .append(eachLetter[letterNumber+1]);

	// $(eachLetter).each(addClass(eachLetter[letterNumber]))
	
	// $("p").addClass(function(n){
 //    	return "par_" + n;

    // $("eachLetter").addClass(function(letterNumber){
    // 	return letterNumber +1;
    // });