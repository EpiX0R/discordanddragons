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
        this.characters = this.getCharacterList();

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
        let users_characters = this.getUserCharacterList(user);
        
        switch(command) {
            case "create":
                let character = new Character(user);

                fs.writeFile(__dirname + "/../../../../data/characters/" + user + "_ch" + users_characters.length + ".json", JSON.stringify(character, null, 2), (err) => {
                    if (err) throw err;
                });

                this.characters = this.getCharacterList();
                
                msg.channel.send("<@" + msg.author.id + ">: Created a new character.");

                break;
            case "list":
                msg.channel.send("<@" + msg.author.id + ">'s Characters: \n" + users_characters);

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
        let users_characters = [];

        // Loops all filenames and finds characters for specific user.
        for (let character of this.characters) {
            let owner = character.owner;

            if (user === owner) {
                users_characters.push(character);
            }
        }
        
        return users_characters;
    }

    /**
     * Updates the CharacterHandler objects internal character list by scanning the data/characters/ directory. 
     */
    getCharacterList() {
        let character_files = fs.readdirSync(__dirname + "/../../../../data/characters/");
        let character_array = [];

        character_files.forEach(file => {
            fs.readFile(__dirname + "/../../../../data/characters/" + file, 'utf8', function(err, data) {
                if (err) throw err;

                let character_data = JSON.parse(data);
                let character = new Character(character_data.owner, character_data.name, character_data.race, character_data.class);

                character_array.push(character);
            });
        });

        return character_array;
    }
}

module.exports = CharacterHandler;
