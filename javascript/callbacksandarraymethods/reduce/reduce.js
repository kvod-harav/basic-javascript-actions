let nums = []
for (let i = 1; i <= 100; i++) { nums.push(i) }

let rednums = nums.reduce((sumtotal, currentvalue) => { return sumtotal + currentvalue })
// reduce compresses an array to a single value based on the given function, in this case it compresses it to the sumtotoal value of all the arrays.
// reduce's given function takes 2 values, the constatly growing compressed one and the value that it is currently compressing into the first one

let rndnums = []
for (let i = 1; i <= 15; i++) { rndnums.push(Math.floor(Math.random() * 15) + 1) }

let smallrndnum = rndnums.reduce((tiny, currentvalue) => { if (currentvalue < tiny) { return currentvalue } else { return tiny } }, 50)
//this reduce takes the smallest number in the array rndnums and the starting tiny value is 50