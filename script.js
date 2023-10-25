//your JS code here. If required.
const input = document.getElementById("fname");
input.addEventListener("blur",(e)=>{
	input.value = document.getElementById("fname").value.toUpperCase();
})