const separator = document.createElement('hr'); //we make a spearator (which is unnecessary here, but it does help me differentiate between the two html files)
document.body.appendChild(separator); //we append it to the body
const fieldConfig = [{ //array
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
const manager = new Manager() //makes a new manager
const table = new Table('table', manager); //we use the class to make a div with the 'table' class
const form = new Form('form', fieldConfig, manager); //we make a div with the 'form' class