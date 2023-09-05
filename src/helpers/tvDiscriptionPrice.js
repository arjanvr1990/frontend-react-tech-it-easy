

export function tvDescriptionPrice(inventory, tvIndex) {
    if (tvIndex >= 0 && tvIndex < inventory.length) {
        const tv = inventory[tvIndex];
        const tvDescriptionPrice = "€" + tv.price +",-";
        return tvDescriptionPrice;
    } else {
        return "Invalid TV index";
    }
};