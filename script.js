function procesarTexto() {
    const inputText = document.getElementById("inputText").value;
    const materialTable = document.getElementById("materialTable");
    materialTable.innerHTML = "";

    try {
        const materiales = JSON.parse(inputText);

        for (const material of materiales) {
            if (/^\d{5,10}/.test(material.name)) {
                material.name = material.name.replace(/^\d{5,10}/, "").trim();
            }

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
