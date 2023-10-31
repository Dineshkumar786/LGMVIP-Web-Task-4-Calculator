/*
const display = document.querySelector(".display");
const button_value = document.querySelectorAll("button");
const specialCharacters = ["%", "/", "*", "-", "+", "="];
let output = "";


const calculate = (btnValue) => {
	if (btnValue === "=" && output !== "") {
		output = eval(output.replace("%", "/100"));
	}else if (btnValue === "AC") {
		output = "";
	}else if (btnValue === "DEL") {
		output = output.toString().slice(0, -1);
	} else {
		if (output === "" && specialCharacters.includes(btnValue)) return;
		output = output + btnValue;
	}
	display.value = output;
};

button_value.forEach((button) => {
	button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

*/




let result = document.getElementById("display");



let calculate = (number) =>{
	result.value = result.value + number;
}

let Result=()=>{
	try{

		result.value = eval(result.value)
	}
	catch(err){
		alert("Enter the valid input");
	}
}


function clr(){
	result.value = " ";

}

function del(){
	result.value = result.value.slice(0,-1);

}


