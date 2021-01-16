window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	// your code here
	for (const country of countries) {
		const opc = document.createElement("option");
		opc.value = country;
		opc.innerHTML = country;
		document.querySelector("#mySelect").appendChild(opc);
	}

	document.querySelector("#mySelect").addEventListener("change", e => {
		alert(e.target.value);
	});
};
