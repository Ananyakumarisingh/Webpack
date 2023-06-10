import { mult } from "./calc";

import("./index.css");
// ! It will throw an error because webpack is taking the css code as javaScript.
// ! Here we will use loder


const { add } = require("./calc")


console.log(add(5, 6));
console.log(mult(5, 6));


const h1 = document.createElement("h1")
h1.innerText = "Hello Webpack";
h1.classList.add("redtext");

document.getElementById('root').appendChild(h1);