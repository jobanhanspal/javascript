var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if(inputLength() > 0) {
	   createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
	   createListElement();	
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



/* Same as above Longer Version 1

button.addEventListener("click", function() {
	if (input.value.Length > 0){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}
})

input.addEventListener("keypress", function() {
	if (input.value.length > 0 && event.keyCode === 13){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}
})

*/


/* to check key code


input.addEventListener("keypress", function(event) {
	console.log(event);
})
*/