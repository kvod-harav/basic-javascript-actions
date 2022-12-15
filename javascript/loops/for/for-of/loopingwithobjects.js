let textobject = {};
let count = 0;
let justtext = "Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an."
for (let word of justtext.split(" ")) {
    textobject[count] = word;
    count++;
}
console.log(textobject)
console.log(Object.entries(textobject))
for (let wordvalarray of Object.entries(textobject)) {
    console.log(`word number ${parseInt(wordvalarray[0]) + 1}: ${wordvalarray[1]}`)
}
