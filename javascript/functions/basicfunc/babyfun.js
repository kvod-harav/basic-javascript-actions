function andsong() {
    console.log("DO")
    console.log("DE")
    console.log("DO")
    console.log("DE")
    console.log("DI")
}
function rant(message) {
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
    console.log(message.toUpperCase())
}
function tssupper(name) {
    console.log(name)
    console.log(`tssup ${name}`)
}

function simplecalc(firstnum, secondnum, action) {
    let result = 0
    if (action == "+") {
        result = firstnum + secondnum
    }
    else if (action == "-") {
        result = firstnum - secondnum
    }
    else if (action == "*") {
        result = firstnum * secondnum
    }
    else if (action == "/") {
        result = firstnum / secondnum
    }
    console.log(`answer:${result}`);
    return result;
}

function isShortWeather(temperature) {
    if (temperature >= 75) {
        return true
    }
    else {
        return false
    }

}
function capitalizewithvar(word) {
    sepword = word.split("")
    sepword[0] = sepword[0].toUpperCase()
    capword = sepword.join("")
    return capword
}
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1)
}
function returnDay(daynum) {
    let week = [null, "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (daynum > 7 || daynum < 1) {
        return null;
    }
    return week[daynum];
}