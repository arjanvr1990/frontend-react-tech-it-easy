
export function tvCounterSold(invertory){
    let soldTv = 0;
for (let i = 0; i <invertory.length ; i++) {
    soldTv += invertory[i].sold;
}
return soldTv
};