/**
 * A generic User with an associated ID, active character, etc.
 */
class User {
    /**
     * Creates a user
     *
     * @param {String} [name] The name of the user.         //redundant?
     * @param {String} [id] The Discord ID of the user.
     */
    constructor(name = "Player", id) {
        /* Authorization Information */
        this.id = id;
        this.name += toString(id % 43);

        /* General Information */
        this.name = name;
        this.activecharacter;
    }


    /**
    * Gets the users current character.
    */
    getActiveCharacter() {
        return activecharacter;
    }


    /**
    * Sets the users current character.
    *
    * @param {Character} character_object 
    */
    setActiveCharacter(character_object) {
        activecharacter = character_object;
    }

}


module.exports = User;