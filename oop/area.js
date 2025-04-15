/**
 * The class we use to make the container divs
 */
class Area{ //creates the area class
    constructor(className){ //the class's constructor (input is string)
        let containerDiv = document.querySelector('.containeroop'); //we select the item with the "containeroop" class
        if(!containerDiv){ //if it doesn't exist
            containerDiv = document.createElement('div'); //we make a div
            containerDiv.className = 'containeroop'; //we add the class to it
            document.body.appendChild(containerDiv); //and append it to the body
        }
        const div = document.createElement('div'); //we make a div
        div.className = className; //we set the class to the input
        containerDiv.appendChild(div); //we append it to the container
    }
}