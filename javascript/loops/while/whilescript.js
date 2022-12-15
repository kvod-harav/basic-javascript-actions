// let count = 10;
// while (count > 0) {
//     console.log(count)
//     count--
// }

// let sec = "cause im having a good time"
// let guess = prompt("dont stop me now!")
// while (guess !== sec) {
//     guess = prompt("dont stop me now!")

// }
// console.log("and I dont wanna sleep at all!")

let maxnum = parseInt(prompt("enter maximum number"));
while (!maxnum) {
    maxnum = parseInt(prompt("enter a valid maximum number"));
}
const rndnum = Math.floor(Math.random() * maxnum) + 1;
console.log(`The correct number is ${rndnum}`)
let guess = parseInt(prompt("enter your first guess"));
let countguess = 1;

while (true) {
    if (guess == "q") { break }
    if (guess > rndnum) { guess = prompt("too high enter another number") }
    else if (guess < rndnum) { guess = prompt("too low enter another number") }
    else {
        console.log(`thats the number congrats it took you ${countguess} tries`);
        break;
    }
    countguess++;
}
