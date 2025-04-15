/**
 * Function is used to reduce code repetition
 * @param {String} className 
 * @returns HTML div Element
 */
const makeDiv = (className) => { //input is string
    const div = document.createElement('div'); //creates and div HTML Element
    div.className = className; //gives it the input as a class
    return div; //returns the div
}

const containerDiv = makeDiv('conatiner'); //makes a div with the container class
document.body.appendChild(containerDiv); //appends it to the body

const tableDiv = makeDiv('table'); //makes a div with the table class
containerDiv.appendChild(tableDiv); //appends it to the container

const formDiv = makeDiv('form'); //makes a div with the form class
containerDiv.appendChild(formDiv); //appends it to the container