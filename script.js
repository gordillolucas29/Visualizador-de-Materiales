function procesarTexto() {
	const inputText = document.getElementById("inputText").value;
	const materialTable = document.getElementById("materialTable");
	materialTable.innerHTML = "";

	try {
		const materiales = JSON.parse(inputText);

		const table = document.createElement("div");
		table.className = "table-row";

		const name = document.createElement("h1");
		name.className = "name-row";
		name.textContent = "Nombre"
		table.appendChild(name);

		const ammount = document.createElement("h1");
		ammount.className = "name-row";
		ammount.textContent = "Cantidad"
		table.appendChild(ammount);

		for (const material of materiales) {
			const row = document.createElement("div");
			row.className = "material-row";

			const nameCell = document.createElement("div");
			nameCell.className = "material-name";
			nameCell.textContent = material.name;
			row.appendChild(nameCell);

			const amountCell = document.createElement("div");
			amountCell.className = "material-amount";
			amountCell.textContent = material.cantidad;
			row.appendChild(amountCell);

			materialTable.appendChild(row);
		}
	} catch (error) {
		const div = document.createElement("div");
		div.className = "error";
		div.textContent = "Error al procesar el texto del arreglo de objetos.";
		materialTable.appendChild(div);
	}
}
