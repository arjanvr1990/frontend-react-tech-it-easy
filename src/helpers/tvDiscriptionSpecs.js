export function tvDescriptionSpecs(inventory, tvIndex) {
    if (tvIndex >= 0 && tvIndex < inventory.length) {
        const tv = inventory[tvIndex];
        let tvDescriptionSpecs = "";

        for (let i = 0; i < tv.availableSizes.length; i++) {
            if (i > 0) {
                tvDescriptionSpecs += ", ";
            }
            tvDescriptionSpecs += tv.availableSizes[i] + " inch (" + Math.round(tv.availableSizes[i] * 2.54) + " cm)";
        }

        return tvDescriptionSpecs;
    } else {
        return "Invalid TV index";
    }
}