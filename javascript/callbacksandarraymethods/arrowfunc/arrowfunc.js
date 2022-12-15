const squaringfunc = (num) => { return num ** 2 }
const summingfunc = (num1, num2) => { return num1 + num2 }

nums = []
for (let i = 0; i <= 100; i++) {
    nums.push(i)
}
let neglist = nums.map((x) => { return x - 100 })

const rollDice = () => (
    Math.floor(Math.random() * 6) + 1
)

const add = (a, b) => a + b