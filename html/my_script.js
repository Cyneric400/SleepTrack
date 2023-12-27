// alert("my_script was loaded!");
window.addEventListener("DOMContentLoaded", domLoaded);

function addEntry() {
	let log = document.querySelector("#sleep-log");
	const template = document.querySelector("#log-item");
	const dateVal = document.querySelector("#date-input").value;
	console.log(dateVal);
	
	// console.log(template);
	
	let clone = template.content.cloneNode(true);
	let dateLog = clone.querySelector(".date-log");
	dateLog.innerHTML = $"{dateVal}"
	log.appendChild(clone);
	
}


function domLoaded() {
	// alert("content was loaded!");
	// console.log(clone);
	console.log("Hello, world!");
	const formSubmit = document.querySelector("#form-submit");
	formSubmit.addEventListener("click", addEntry);
}
