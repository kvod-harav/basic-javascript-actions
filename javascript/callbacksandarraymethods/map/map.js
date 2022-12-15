let nums = []
for (let i = 0; i <= 100; i++) {
    nums.push(i)
}
let timesself = nums.map(function (n) {
    return n * n
})
console.log(nums)
for (let k of timesself) {
    console.log(k)
}