//this variable is to check each term if there is already a decimal point in a term.
var term = "";

function getNumber(num) {
	// concatenating numbers on the screen from the buttons including decimal numbers
	var input_var = document.getElementById('input');
	switch (num) {
		case 1: 
				input_var.value += '1';
				term += '1';
				document.getElementById('answer').value = "";
				break;
		case 2: 
				input_var.value += '2';
				term += '2';
				document.getElementById('answer').value = "";
				break;
		case 3: 
				input_var.value += '3';
				term += '3';
				document.getElementById('answer').value = "";
				break;
		case 4: 
				input_var.value += '4';
				term += '4';
				console.log(term);
				document.getElementById('answer').value = "";
				break;
		case 5: 
				input_var.value += '5';
				term += '5';
				document.getElementById('answer').value = "";
				break;
		case 6: 
				input_var.value += '6';
				term += '6';
				document.getElementById('answer').value = "";
				break;
		case 7: 
				input_var.value += '7';
				term += '7';
				document.getElementById('answer').value = "";
				break;
		case 8: 
				input_var.value += '8';
				term += '8';
				document.getElementById('answer').value = "";
				break;
		case 9: 
				input_var.value += '9';
				term += '9';
				document.getElementById('answer').value = "";
				break;
		case 0: 
				input_var.value += '0';
				term += '0';
				document.getElementById('answer').value = "";
				break;
		case '.': 
				if (term.match(/['.']/gi)){
					document.getElementById('answer').value = "Syntax Issue: Check decimals";
				}else {
					input_var.value += '.';
					term += '.';
					console.log(term);
					document.getElementById('answer').value = "";
				}
				break;

	}
}


//get the mathematical operation from the calculator buttons
var count = 0;
function getOperand(operand) {
	var input_var = document.getElementById('input');
	var res = input_var.value.charAt(input_var.value.length-1);

	if (res == "+" || res == "-" || res == "*" || res == "/"){
		document.getElementById('answer').value = "Syntax error!";
	}
	else{
		switch(operand){
			case '+':
					if (input_var.value.length > 0){
						input_var.value += '+';
						term = "";
						document.getElementById('answer').value = "";
						count = 0;
					}else{
						document.getElementById('answer').value = "Input number first.";
					}
					break;
			case '-':
					if (input_var.value.length > 0){
						input_var.value += '-';
						term = "";
						document.getElementById('answer').value = "";
						count = 0;
					}else{
						document.getElementById('answer').value = "Input number first.";
					}
					break;
			case '*':
					if (input_var.value.length > 0){
						input_var.value += '*';
						term = "";
						document.getElementById('answer').value = "";
						count = 0;
					}else{
						document.getElementById('answer').value = "Input number first.";
					}
					break;
			case '/':
					if (input_var.value.length > 0){
						input_var.value += '/';
						term = "";
						document.getElementById('answer').value = "";
						count = 0;
					}else{
						document.getElementById('answer').value = "Input number first.";
					}
					break;
			case '+/-':
					
					var newChar = "";
					if (count == 0){
						if (input_var.value.length > 0){
							input_var.value = '-(' + input_var.value +')';
							document.getElementById('answer').value = "";
							count = 1;
							
						}else{
							document.getElementById('answer').value = "Input a number first.";
						}
					}else if (count == 1){
							for(var z=2; z<input_var.value.length-1; z++){
								newChar = newChar + input_var.value.charAt(z);
							}
							input_var.value = newChar;
							count = 0;
						}
						
					break;


		}
	}
}
	



//clear the screen

function clearScreen() {
	// body...
	document.getElementById('input').value="";
	document.getElementById('answer').value="";
	i = 0;
	term = "";
	count = 0;

}

function backspace() {
	//backspacing or deleting a character from the screen
	var input_var = document.getElementById('input');
	var x = input_var.value;
	if (x.length > 0){
		x=x.substring(0,x.length-1);
		document.getElementById('input').value = x;
		count = 0;
		i=1;
	}
	
	else{
		document.getElementById('input').value ="";
		document.getElementById('answer').value="";
	}

}

function compute() {
	// evaulating the expression, returning an error message if expression is not valid.
	var input_var = document.getElementById('input');
	try{

		var ans = eval(input_var.value);
		document.getElementById('answer').value = '= ' + ans;
		term="";

	}catch(err){
		ans = 'ERROR: Check syntax!';
		document.getElementById('answer').value = ans;
		}

}

// using the brackets
var i=0;
function brackets() {
	var input_var = document.getElementById('input');
	var res = input_var.value.charAt(input_var.value.length-1);
	if (res == "+" || res == "-" || res == "*" || res == "/" && i==0){
		var input_var = document.getElementById('input');
		input_var.value += '(';
		i = 1;
	} else if (i == 1) {
		input_var.value += ')';
		i = 0;
	}else{
		// body...
		document.getElementById('answer').value = "Syntax error!";
		i = 0;
			
	}
	
}
