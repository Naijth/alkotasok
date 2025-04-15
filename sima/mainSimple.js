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
const table = document.createElement('table'); //we create a table
tableDiv.appendChild(table); //we append it to the div

const thead = document.createElement('thead'); //we make a thead
table.appendChild(thead); //we append it to the table
const theadRow = document.createElement('tr'); //we make a row
thead.appendChild(theadRow); //we append it to the thead
const theadCells = ['szerzo', 'cim', 'iro'] //we make an array with text
for (const cellContent of theadCells){ //we go through the array
    const theadCell = document.createElement('th'); //we make a new 'th' cell
    theadCell.innerHTML = cellContent; //we add the current array member as the text
    theadRow.appendChild(theadCell); //we append it to the row
}

const tbody = document.createElement('tbody'); //we make a tbody
table.appendChild(tbody); //we append it to the table

const formDiv = makeDiv('form'); //makes a div with the form class
containerDiv.appendChild(formDiv); //appends it to the container