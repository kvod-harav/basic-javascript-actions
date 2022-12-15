let tenonten = []
let adderlist = []
for (let i = 1; i <= 10; i++) {
    for (let k = 1; k <= 10; k++)
        adderlist[k - 1] = k
    tenonten[i - 1] = adderlist
}
console.log(tenonten)

let count = 0;
for (let takearray of tenonten) {
    for (let numtake of takearray) {
        console.log(numtake)
        count += numtake
    }
}

console.log(count)