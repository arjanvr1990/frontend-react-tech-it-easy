
export function tvCounterStock(invertory){
    let inventoryStockTv = 0;
    for (let i = 0; i <invertory.length ; i++) {
        inventoryStockTv += invertory[i].originalStock - invertory[i].sold;
    }
    return inventoryStockTv
};