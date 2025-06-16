let products = [
    {name: "laptop", category: "electronics", price: 1000, inventory:12},
    {name: "shirt", category: "apparel", price: 40, inventory: 25},
    {name: "eggs", category: "groceries", price: 4, inventory: 50},
    {name: "mop", category: "household", price: 15, inventory: 30},
    {name: "book", category: "books", price: 16, inventory: 20}
];

for (const product of products) {
    switch (product.category) {
        case "electronics":
            product.price *= 0.8; // 20% discount
            break;
        case "apparel":
            product.price *= 0.85; // 15% discount
            break;
            case "groceries":
            case "household":
            product.price *= 0.9; // 10% discount
            break;
            default:
                // no discount
                break;
    }
    product.price = parseFloat(product.price.toFixed(2));
}

function applyCustomerDiscount(total, customerType) {
    if (customerType === "student") {
        return total * 0.95;
    } else if (customerType === "senior") {
        return total * 0.93;
    } else {
        return total;
    }
}
let customerType =  ["regular","student","senior"];

for (let i = 0; i < 3; i++) {
    let customerCart = [...products];
    let cartTotal = 0;

    for (let product of customerCart) {
        if (product.inventory > 0) {
            cartTotal += product.price;
            product.inventory -= 1;
        }
    }

    let finalTotal = applyCustomerDiscount(cartTotal, customerType[i]);
    console.log(`Customer ${i + 1} (${customerType[i]}): $${finalTotal.toFixed(2)}`);
}

console.log("\nProduct details (after discounts):");
let sampleProduct = products[0];
for (let key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`);
}

console.log("\nUpdated Product Inventory:");
for (let product of products) {
    for (let [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }
}