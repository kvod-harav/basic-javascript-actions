let password = prompt("please enter your password");

if (password.length >= 6) {
    console.log("valid password length")
    if (password.indexOf(' ') == -1) {
        console.log("valid characters")
    }
    else {
        console.log("invalid characters, must be the space/s there")
    }
}
else {
    console.log("invalid password length, it has to be 6 or more characters")
}