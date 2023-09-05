
export function tvDescription(inventory, tvIndex) {
    if (tvIndex >= 0 && tvIndex < inventory.length) {
        const tv = inventory[tvIndex];
        const tvDescription = tv.brand + " " + tv.type + " - " + tv.name;
        return tvDescription;
    } else {
        return "Invalid TV index";
    }
};