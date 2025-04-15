/**
 * @callback AddCreationCallback runs when a new person is added
 */
class Manager {
    /**
     * @type {HTMLElement}
     */
    #array;

    /**
     * @type {AddCreationCallback}
     */
    #addCreationCallback;

    /**
     * makes an empty array
     */
    constructor(){
        this.#array = []; //the empty array
    }

    /**
     * we set the callback here
     * @param {Function} callback 
     */
    setAddCreationCallback(callback){
        this.#addCreationCallback = callback; //we store the callback in a private variable
    }

    /**
     * we add a new data to the array
     * @param {Creation} creation 
     */
    addCreation(creation){
        this.#array.push(creation); //we push the creation into the array
        this.#addCreationCallback(creation); //we call the callback and copy the creation
    }
}