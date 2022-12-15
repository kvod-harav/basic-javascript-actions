let nums = []
for (let i = 0; i <= 100; i++) { nums.push(i) }

let alleven = nums.every(onenum => { return onenum % 2 === 0 })// checks if every number will be even, which will return false
let someeven = nums.some(onenum => { return onenum % 2 === 0 })// checks if at least one number will be even, which will return true