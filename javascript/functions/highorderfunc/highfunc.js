function anotherone(func) {
    func()
    func()
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(`Dice:${roll}`)
}


// anotherone(rollDie)


function updownfuncyouup() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("I am the good the function YAYYY :-D")

        }
    }
    else {
        return function () {
            console.log("I have been a very bad function >:)")
        }
    }
}


function inBetween(min, max) {
    return function (num) {
        return num >= min && num <= max
    }
}
