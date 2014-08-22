$(document).ready(function(){
	$("button").on('click',fizzBuzz);
})
function fizzBuzz() {
	for (var i = 1; i < 101; i++){
		if (i % 3 == 0 && i % 5 == 0) {
			console.log ('FizzBuzz');
			$(".numbers-here").append('<p>FizzBuzz</p>')
		}
		else if (i % 5 == 0) {
			console.log('Buzz');
			$(".numbers-here").append('<p>Buzz</p>')
		}
		else if (i % 3 == 0) {
			console.log('Fizz');
			$(".numbers-here").append('<p>Fizz</p>')	
		}
		else {
			console.log(i);
			$(".numbers-here").append('<p>' +i+ '</p>')
		}
	}	
}

	
//need something that limits the number to 100
//need append functionality that displays the numbers preceding the typed number below
//need functionality for fizz
//need functionality for buzz
//need functionality for fizzbuzz
