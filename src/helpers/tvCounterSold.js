console.log("werkt het")

export function tvCounter(invertory){
    let soldTv = 0;
for (let i = 0; i <invertory.length ; i++) {
    soldTv += invertory[i].sold;
}
return soldTv
};