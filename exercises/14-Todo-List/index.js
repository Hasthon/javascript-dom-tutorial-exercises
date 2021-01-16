// Your code here
const ul = document.querySelector("ul");

document.querySelector("#addToDo").addEventListener("keyup", e => {
	if (e.key === "Enter") {
		const newLi = document.createElement("li");
		const newSpan = document.createElement("span");
		const newI = document.createElement("i");
		const text = document.createTextNode(" " + document.querySelector("#addToDo").value);
		newI.className = "fa fa-trash";
		newSpan.appendChild(newI);
		newLi.appendChild(newSpan);
		newLi.appendChild(text);
		ul.appendChild(newLi);
		agregaEventoEliminar();
		document.querySelector("#addToDo").value = "";
	}
});

function agregaEventoEliminar() {
	const li = [];
	for (const ele of ul.childNodes) {
		if (ele.nodeName === "LI") {
			li.push(ele);
		}
	}

	const btns = document.querySelectorAll(".fa-trash");
	for (let i = 0; i < li.length; i++) {
		btns[i].addEventListener("click", e => {
			ul.removeChild(li[i]);
		});
	}
}

agregaEventoEliminar();
