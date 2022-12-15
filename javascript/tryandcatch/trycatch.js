// try {
//     hello.toUpperCase()
// }
// catch {
//     console.log("WTF is hello?")
// }

function motherrepeater(something) {
    try {
        console.log(something.toUpperCase().repeat(3))
    }
    catch (e) {
        try {
            console.log(something.toString().toUpperCase());
            console.log("you didnt insert a string so I converted it to string");
            console.log(`The ERROR was: ${e}`)
        }
        catch (ex) {
            console.log("WTF did you put in me?")
            console.log(`Error: ${e}`)
        }
    }
}