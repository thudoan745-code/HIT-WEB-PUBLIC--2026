const products = [
    {
        id: 1,
        name: "Laptop",
        price: 2000,
        category: "electronics",
        amount: 20
    },
    {
        id: 2,
        name: "Phone",
        price: 1000,
        category: "electronics",
        amount: 2
    },
    {
        id: 3,
        name: "Book",
        price: 20,
        category: "book",
        amount: 10
    },
    {
        id: 4,
        name: "Keyboard",
        price: 100,
        category: "electronics",
        amount: 0
    },
    {
        id: 5,
        name: "Mouse",
        price: 50,
        category: "accessory",
        amount: 15
    }
];

console.log("===== DANH SACH SAN PHAM =====");

for (const product of products) {
    console.log(
        "ID: " + product.id +
        " | " + product.name +
        " | $" + product.price +
        " | " + product.category +
        " | So luong: " + product.amount
    );
}

console.log("===== SAN PHAM CON HANG =====");

for (const product of products) {
    if (product.amount > 0) {
        console.log(product.name);
    }
}

console.log("===== SAN PHAM HET HANG =====");

for (const product of products) {
    if (product.amount === 0) {
        console.log(product.name);
    }
}

let totalAmount = 0;

for (const product of products) {
    totalAmount = totalAmount + product.amount;
}

console.log("Tong so luong: " + totalAmount);

let totalValue = 0;

for (const product of products) {
    totalValue = totalValue + product.price * product.amount;
}

console.log("Tong gia tri kho: " + totalValue);

let totalPrice = 0;

for (const product of products) {
    totalPrice = totalPrice + product.price;
}

let averagePrice = totalPrice / products.length;

console.log("Gia trung binh: " + averagePrice);

let maxPriceProduct = products[0];

for (const product of products) {
    if (product.price > maxPriceProduct.price) {
        maxPriceProduct = product;
    }
}

console.log(
    maxPriceProduct.name + " - $" + maxPriceProduct.price
);

let maxAmountProduct = products[0];

for (const product of products) {
    if (product.amount > maxAmountProduct.amount) {
        maxAmountProduct = product;
    }
}

console.log(
    maxAmountProduct.name + " - " +
    maxAmountProduct.amount + " san pham"
);

let idCanTim = 3;

for (const product of products) {
    if (product.id === idCanTim) {
        console.log(
            product.name + " - $" +
            product.price + " - " +
            product.category + " - " +
            product.amount
        );
    }
}

const category = "electronics";

console.log("===== SAN PHAM THUOC CATEGORY ELECTRONICS =====");

for (const product of products) {
    if (product.category === category) {
        console.log(product.name);
    }
}

let electronics = 0;
let book = 0;
let accessory = 0;

for (const product of products) {
    if (product.category === "electronics") {
        electronics = electronics + 1;
    }
    else if (product.category === "book") {
        book = book + 1;
    }
    else if (product.category === "accessory") {
        accessory = accessory + 1;
    }
}

console.log("===== THONG KE CATEGORY =====");
console.log("Electronics: " + electronics);
console.log("Book: " + book);
console.log("Accessory: " + accessory);

console.log("===== PHAN LOAI =====");

for (const product of products) {
    if (product.price >= 1000) {
        console.log(product.name + " -> Cao cap");
    }
    else if (product.price >= 100) {
        console.log(product.name + " -> Trung binh");
    }
    else {
        console.log(product.name + " -> Gia re");
    }
}