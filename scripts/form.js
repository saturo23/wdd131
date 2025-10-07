// Product array of objects
const products = [
  { id: "p1001", name: "Super Blender" },
  { id: "p1002", name: "Smart Toaster" },
  { id: "p1003", name: "Eco Kettle" },
  { id: "p1004", name: "Air Purifier" },
  { id: "p1005", name: "Robot Vacuum" }
];

// Populate the select element
const productSelect = document.getElementById("productName");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});
