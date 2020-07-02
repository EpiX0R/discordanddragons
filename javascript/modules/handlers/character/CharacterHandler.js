/* Libraries */
let fs = require("fs");

/* Modules */
let Character = require("../../classes/character/Character");
let ClassHandler = require("./ClassHandler");

/**
 * A CharacterHander object for usage in CommandHandler, handles all "#!character ..." commands.
 */
class CharacterHandler {
    /**
     * Construct method, prepares sub-handlers
     */
    constructor() {
        this.class_handler = new ClassHandler();
    }

    /**
     * Determines which character-related function to use upon command execution.
     *
     * @param {Message} msg A Message object.
     */
    interpret(msg) {
        let command = msg.content.split(" ")[1]
        let user = msg.author.id;
        
        switch(command) {
            case "create":
                let character = new Character(user);

                fs.writeFile(__dirname + "/../../../../data/characters/" + user + "_ch.json", JSON.stringify(character, null, 2), (err) => {
                    if (err) throw err;
                });

                break;
            case "class":
                break;
            default:
                break;
        }
    }
}

module.exports = CharacterHandler;
