var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services.price = function () {
    let total = 0;
    for (let key in this) {
        if (typeof this[key] === "string" && this[key].endsWith("грн")) {
            total += parseInt(this[key]);
        }
    }
    return total;
};

services.minPrice = function () {
    let min = null;
    for (let key in this) {
        if (typeof this[key] === "string" && this[key].endsWith("грн")) {
            const price = parseInt(this[key]);
            if (min === null || price < min) {
                min = price;
            }
        }
    }
    return min;
};

services.maxPrice = function () {
    let max = null;
    for (let key in this) {
        if (typeof this[key] === "string" && this[key].endsWith("грн")) {
            const price = parseInt(this[key]);
            if (max === null || price > max) {
                max = price;
            }
        }
    }
    return max;
};

// Додаємо нову послугу
services['Розбити скло'] = "200 грн";

console.log(`Загальна вартість: ${services.price()} грн`); // Загальна вартість: 440 грн
console.log(`Мінімальна ціна: ${services.minPrice()} грн`); // Мінімальна ціна: 60 грн
console.log(`Максимальна ціна: ${services.maxPrice()} грн`); // Максимальна ціна: 200 грн
