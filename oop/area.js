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
        let containerDiv = document.querySelector('.containeroop'); //we select the item with the "containeroop" class
        if(!containerDiv){ //if it doesn't exist
            containerDiv = document.createElement('div'); //we make a div
            containerDiv.className = 'containeroop'; //we add the class to it
            document.body.appendChild(containerDiv); //and append it to the body
        }
        this.#div = document.createElement('div'); //we make a div
        this.#div.className = className; //we set the class to the input
        containerDiv.appendChild(this.#div); //we append it to the container
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
    }
}