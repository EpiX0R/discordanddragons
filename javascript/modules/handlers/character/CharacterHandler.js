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
        this.characters = fs.readdirSync(__dirname + "/../../../../data/characters/");

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
                let userCharacters = this.getUserCharacterList(user);

                fs.writeFile(__dirname + "/../../../../data/characters/" + user + "_ch" + userCharacters.length + ".json", JSON.stringify(character, null, 2), (err) => {
                    if (err) throw err;
                });

                this.updateCharacterList();

                break;
            case "class":
                this.class_handler.interpret(msg);
                break;
            case "tmp":
                this.getUserCharacterList(user);
                break;
            default:
                break;
        }
    }

    /**
     * Retrieves all filenames for the characters that this Discord user owns.
     *
     * @param {String} user The users DiscordID.
     *
     * @returns {Array} An array the filenames of all characters that this Discord user owns.
     */
    getUserCharacterList(user) {
        let usersCharacters = [];

        // Loops all filenames and finds characters for specific user.
        for (let character of this.characters) {
            let owner = character.split("_")[0];

            if (user === owner) {
                usersCharacters.push(character);
            }
        }
        
        return usersCharacters;
    }

    /**
     * Updates the CharacterHandler objects internal character list by scanning the data/characters/ directory. 
     */
    updateCharacterList() {
        this.characters = fs.readdirSync(__dirname + "/../../../../data/characters/");
    }
}

module.exports = CharacterHandler;
