//JS to practice DOM Manipulation, querySelector and querySelectorAll

// wrote this because I was having difficulty
// writing JS to find things in the DOM,
// caused all my conditionals to return incorrect results

//query selector for "main" id, returns id and all child elements
let mainSectionID;

//define mainSectionID as the #main ID and its child elements
// mainSectionID = document.querySelector("#main");
// console.log(mainSectionID);

//define mainSectionID as the .heading class, there are 3
//produces a node list
// mainSectionID = document.querySelectorAll(".heading");

//find the first li under mainSectionID, a property
// mainSectionID = document.querySelector("ul li");
// console.log(mainSectionID);

//without using the variable, return the 3rd list item
// console.log(document.querySelector("li:nth-child(3)"));

//same thing but this time use the variable
// mainSectionID = document.querySelector("li:nth-child(3)");
// console.log(mainSectionID);

//using the varible, return the even list items (there are 3,
// this worked: li 2)
// mainSectionID = document.querySelector("li:nth-child(even)");
// console.log(mainSectionID);

//tried to return only the odd children
//without redefining the variable, this doesn't work,
//still only got the even child, one property doesn't replace
//the first one
// mainSectionID.querySelectorAll("li:nth-child(odd)");
// console.log(mainSectionID);

// console.log(mainSectionId); //returns all li elements,
//3 of them as a node list, 0, 1 2
// mainSectionId = document.querySelectorAll("li");

//redefine mainSectionId, to show odd children, returns 0, 1
// mainSectionId = document.querySelectorAll("li:nth-child(odd)");
// console.log(mainSectionId);

//below should return the even items, 0 and 2, but only returned 0
// mainSectionId = document.querySelectorAll("li:nth-child(even)");
// console.log(mainSectionId);

//below returned a blank node list, the CSS selector is 1, 2, 3
//but the node list in console is 0-indexed
// mainSectionId = document.querySelectorAll("li:nth-child(0)");
// console.log(mainSectionId);

//because of querySelectorAll, the below returned the first child
// in a 0-indexed node list, always labeled 0
// mainSectionId = document.querySelectorAll("li:nth-child(1)");
// console.log(mainSectionId);

//below returned the 2nd child in a 0-indexed node list
// mainSectionId = document.querySelectorAll("li:nth-child(2)");
// console.log(mainSectionId);

//below returned the 2nd child but only the element and inner text
//querySelectorAll would have returned a node list with every
//possible property
mainSectionId = document.querySelector("li:nth-child(2)");
console.log(mainSectionId);
