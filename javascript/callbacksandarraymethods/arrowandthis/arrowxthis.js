const person = {
    firstName: "Ryan",
    lastName: "Renolds",
    fullName: function () { return `${this.firstName} ${this.lastName}` },
    shoutName: function () { setTimeout(() => { console.log(this); console.log(this.fullName) }) }
}