const prompt = require('prompt-sync')({sigint: true});
// alles muss man selber machen lassen! ...
let firstName = prompt("Vorname?: ")
let familiyName = prompt("Name?: ") 
console.log ("Hallo, " + firstName + " " + familiyName + "!" );
