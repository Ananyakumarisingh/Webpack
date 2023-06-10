import { mult } from "./calc";
const { add } = require("./calc")
console.log(add(5, 6));
console.log(mult(5, 6));

// import Icon from "./icon.png";  // ! for imgs

import("./index.css");
// ! It will throw an error because webpack is taking the css code as javaScript.
// ! Here we will use loder



// const h1 = document.createElement("h1")
// h1.innerText = "Hello Webpack";
// h1.classList.add("redtext");

// document.getElementById('root').appendChild(h1);


// * React
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
//     React.createElement("h1", {className: "redtext"},[ 
//         "Hello Webpack from react",
//         React.createElement("i", null, " italic")
    
// ]),   // What 

    <h1>Hello New React</h1>,
    document.getElementById("root")   // Where
)


