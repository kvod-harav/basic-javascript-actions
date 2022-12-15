let nums = [];
for (let i = 0; i <= 100; i++) {
    nums.push(i);
}
function countnums(num) {
    console.log(`We have counted to ${num}`)
}
// nums.forEach(countnums) //one way with a function that was saved before hand
//------------------------------------------------------------------------
//another way, without saving the function before

nums.forEach(function (n) { console.log(`we have counted to ${n}`) })
