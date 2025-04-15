const array = []; //an empty array

/**
 * Function is used to reduce code repetition
 * @param {String} className 
 * @returns {HTMLElement}
 */
const makeDiv = (className) => { //input is string
    const div = document.createElement('div'); //creates and div HTML Element
    div.className = className; //gives it the input as a class
    return div; //returns the div
}

const containerDiv = makeDiv('container'); //makes a div with the container class
document.body.appendChild(containerDiv); //appends it to the body

const tableDiv = makeDiv('table'); //makes a div with the table class
containerDiv.appendChild(tableDiv); //appends it to the container
const table = document.createElement('table'); //we create a table
tableDiv.appendChild(table); //we append it to the div

const thead = document.createElement('thead'); //we make a thead
table.appendChild(thead); //we append it to the table
const theadRow = document.createElement('tr'); //we make a row
thead.appendChild(theadRow); //we append it to the thead
const theadCells = ['szerzo', 'cim', 'mufaj'] //we make an array with text
for (const cellContent of theadCells){ //we go through the array
    const theadCell = document.createElement('th'); //we make a new 'th' cell
    theadCell.innerHTML = cellContent; //we add the current array member as the text
    theadRow.appendChild(theadCell); //we append it to the row
}

const tbody = document.createElement('tbody'); //we make a tbody
table.appendChild(tbody); //we append it to the table

const formDiv = makeDiv('form'); //makes a div with the form class
containerDiv.appendChild(formDiv); //appends it to the container
const form = document.createElement('form'); //we make a form
formDiv.appendChild(form); //we append the form to the 

const fieldElements = [{ //array
    fieldid: 'name', //a variable
    fieldLabel: 'szerzo' //a variable
},
{
    fieldid: 'title', //a variable
    fieldLabel: 'cim' //a variable
},
{
    fieldid: 'genre', //a variable
    fieldLabel: 'mufaj' //a variable
}]

for (const fieldElement of fieldElements){ //we go through the array
    const field = makeDiv('field'); //we make a new div for the field
    form.appendChild(field); //we append it
    const label = document.createElement('label'); //we make a label
    label.htmlFor = fieldElement.fieldid; //we make it so that clickong on the name selects the textbox
    label.textContent = fieldElement.fieldLabel; //the textcontent
    field.appendChild(label); //we append it
    const input = document.createElement('input'); //we make an input
    input.id = fieldElement.fieldid; //we assign an id so this highlights when we click the name
    field.appendChild(document.createElement('br')); //we break the line
    field.appendChild(input); //we append the entire thing
}

const buttonForm = document.createElement('button'); //we make a button
buttonForm.textContent = 'hozzáadás'; //we add text to the button
form.appendChild(buttonForm); //we append the button to the form (button do nothing)

form.addEventListener('submit', (e) => { //we make an eventListener
    e.preventDefault(); //we prevent default
    const object = {}; //we make an empty object
    const inputFields = e.target.querySelectorAll('input'); //we put everything with the input  class into an array
    for (const inputField of inputFields){ //we go through said array
        object[inputField.id] = inputField.value; //we take the id of the input as a name and add the value of the input to it
    }
    array.push(object); //we add the object to the array
    const tbodyRow = document.createElement('tr'); //we make a new row in the body
    tbody.appendChild(tbodyRow); //we append it to the body

    const nameCell = document.createElement('td'); //we make a new cell
    nameCell.textContent = object.name; //we make the name the same as the object's name variable
    tbodyRow.appendChild(nameCell); //we append it

    const titleCell = document.createElement('td'); //we make new cell
    titleCell.textContent = object.title; //we give it text
    tbodyRow.appendChild(titleCell); //we append it

    const genreCell = document.createElement('td'); //we make new cell
    genreCell.textContent = object.genre; //we give it text
    tbodyRow.appendChild(genreCell); //we append it
})