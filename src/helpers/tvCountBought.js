
export function tvCounterBought(invertory){
    let originalStockTv = 0;
    for (let i = 0; i <invertory.length ; i++) {
        originalStockTv += invertory[i].originalStock;
    }
    return originalStockTv
};