let button = document.querySelector("#superDuperButton");

button.addEventListener("click", function() {
	let contenedor = document.createElement("div");
	contenedor.style.background = "yellow";
	contenedor.innerHTML = "Hello World";
	document.body.appendChild(contenedor);
});
