/**
 * class which we use to store the peeps
 */
class Creation{
    /**
     * @type {String}
     */
    #name;
    
    /**
     * @type {String}
     */
    #title;

    /**
     * @type {String}
     */
    #genre;

    /**
     * getter for the name
     * @returns {String}
     */
    get name(){
        return this.#name;
    }

    /**
     * getter for the title
     * @returns {String}
     */
    get title(){
        return this.#title;
    }

    /**
     * getter for the genre
     * @returns {String}
     */
    get genre(){
        return this.#genre;
    }

    /**
     * Basically the setter
     * @param {String} name 
     * @param {String} title 
     * @param {String} genre 
     */
    constructor(name, title, genre){
        this.#name = name; //setter of the name
        this.#title = title; //setter
        this.#genre = genre; //setter
    }
}