$(document).ready(function(){
	$("button").on('click', function(){
		var number = $("#user-number").val();
		for (var i = number; i < 101; i++){
			if (i % 3 == 0 && i % 5 == 0) {
				console.log('FizzBuzz');
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
			return false;	
	});
});