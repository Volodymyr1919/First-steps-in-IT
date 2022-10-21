console.log("first.js is redy...");
const name = "Ima";
let lastname = "familia";
var age = "31";
console.log("name is:", name, ";", "age is:", age);
let h1 = document.createElement("h1");
h1.append(name);
console.log("h1 is:", h1);

document.getElementsByTagName("body")[0].appendChild(h1);
h1.style.color = "blue";
h1.style.background = "yellow";

let a = document.createElement("a");
a.append(lastname);
document.getElementsByTagName("body")[0].appendChild(a);
a.style.textDecoration = "none";
a.style.color = "purple";
a.style.background = "gray";
a.style.padding = "10px";
a.style.borderRadius = "5px";