// function collecteggs() {
//     let totaleggs = 6;
//     console.log(totaleggs);
// }

// let frog = "ribbit"
// function frogswallow() {
//     let frog = "*gulp*"
//     console.log(`on the swallow ${frog}`)
// }
// console.log("out of the function:")
// console.log(`on the swallow ${frog}`)
// console.log("in the function:")
// frogswallow()



//------------------parental scope concept------------------
function grandpa() {
    console.log("hi")
    let parents = { "Eric": ["Bob", "John"], "Sam": ["Kyle", "Johnathan", "Gal"], "Naomi": ["May", "Anna", "Ruby"], "George": ["Dan", "David", "Yoav", "Amit"] }
    console.log(Object.keys(parents))
    function praentstochildren() {
        for (let parent of Object.keys(parents)) {
            console.log(`${parent} has ${parents[parent].length} kids`)
        }
        function grandkids() {
            for (let lparent of Object.keys(parents)) {
                console.log(`the names of ${lparent}'s kids are: ${parents[lparent].join(", ")}`)
            }
        }
        grandkids()
    }
    praentstochildren()
}
grandpa()