import {tvDescriptionPrice} from "./tvDiscriptionPrice.js";
import {inventory} from "../constants/inventory.js";
import {tvDescription} from "./tvDescription.js";
import {tvDescriptionSpecs} from "./tvDiscriptionSpecs.js";

// formatTvHelper.js

export function formatTv() {
    return {
        tvDescription: (inventory, tvIndex) => {
            // Logica voor de beschrijving van de tv
        },
        tvDescriptionPrice: (inventory, tvIndex) => {
            // Logica voor de prijs van de tv
        },
        tvDescriptionSpecs: (inventory, tvIndex) => {
            // Logica voor de specificaties van de tv
        }
    };
}
