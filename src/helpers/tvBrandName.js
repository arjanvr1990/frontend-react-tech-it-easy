import {inventory} from "../constants/inventory.js";

export function tvBrandNames() {
    const brandNames = inventory.map(tv => tv.brand);
    return (brandNames + " ");
}

