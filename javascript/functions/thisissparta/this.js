const dog = {
    firstName: "Blake",
    lastName: "Shamash",
    // call: `${this.firstName} ${this.lastName} the first, come here boy`, doesnt work
    prntcall() { console.log(`${this.firstName} ${this.lastName} the first, come here boy`) }
}