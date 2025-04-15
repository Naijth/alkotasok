/**
 * The class we use to make the container divs
 */
class Area{ //creates the area class

    #div; //private variable

    get div(){ //getter
        return this.#div; //returns the div
    }

    /**
     * This makes a div in the container
     * @param {String} className 
     */
    constructor(className){ 
        const container = this.#getConntainerDiv(); //we use the function to get the div
        this.#div = document.createElement('div'); //we make a div
        this.#div.className = className; //we set the class to the input
        container.appendChild(this.#div); //we append it to the container
    }

    /**
     * Makes or @returns the container
     */
    #getConntainerDiv(){
        let containerDiv = document.querySelector('.containeroop'); //we select the item with the "containeroop" class
        if(!containerDiv){ //if it doesn't exist
            containerDiv = document.createElement('div'); //we make a div
            containerDiv.className = 'containeroop'; //we add the class to it
            document.body.appendChild(containerDiv); //and append it to the body
        }
        return containerDiv; //we return the div
    }
}

/**
 * Table is the child of Area
 */
class Table extends Area{
    /**
     * This makes a complete header and the tbody for the div
     * @param {String} cssClass 
     */
    constructor(cssClass){
        super(cssClass); //the input for the ARea's constructor will be the same as the input here
        const tbody = this.#createTable();
    }
    /**
     * Creates the table
     * @returns the tbody!!
     */
    #createTable(){
        const table = document.createElement('table'); //we create a table
        this.div.appendChild(table); //we append it to the div

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
        return tbody; //returns the tbody
    }
}

/**
 * Form is the child of Area
 */
class Form extends Area{
    /**
     * makes a complete form that doesn't work
     * @param {String} cssClass 
     */
    constructor(cssClass, fieldElements){
        super(cssClass); //the input will be used in area
        const form = document.createElement('form'); //we make a form
        this.div.appendChild(form); //we append the form to the 

        for (const fieldElement of fieldElements){ //we go through the array
            const field = document.createElement('div'); //we make a new div for the field
            field.className = 'field'; //we give it the field class
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
    }
}