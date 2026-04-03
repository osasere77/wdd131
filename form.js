const products = [
    { id: 1, name: "iPhone 15" },
    { id: 2, name: "Samsung TV" },
    { id: 3, name: "HP Laptop" },
    { id: 4, name: "Sony Headphones" }
];

const select = document.getElementById("product");

products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
});