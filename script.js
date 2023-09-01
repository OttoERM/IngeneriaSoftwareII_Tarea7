const addElementButton = document.getElementById("addElement");
const tableBody = document.querySelector("tbody");

addElementButton.addEventListener("click", addElement);

function addElement() {
  const tableRow = document.createElement("tr");

  const tableDataId = document.createElement("td");
  tableDataId.innerText = document.getElementById("inputId").value;
  tableRow.appendChild(tableDataId);

  const tableDataProduct = document.createElement("td");
  tableDataProduct.innerText = document.getElementById("inputProduct").value;
  tableRow.appendChild(tableDataProduct);

  const tableDataPrecio = document.createElement("td");
  tableDataPrecio.innerText = document.getElementById("inputPrecio").value;
  tableRow.appendChild(tableDataPrecio);

  tableBody.appendChild(tableRow);
}
