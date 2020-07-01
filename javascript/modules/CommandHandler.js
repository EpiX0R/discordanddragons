const CharacterHandler = require("./handlers/character/CharacterHandler.js");
//const PlanningHandler = require("./handlers/PlanningHandler.js");

/**
 * A CommandHandler object for usage in bot.
 */
class CommandHandler {
    /**
     * Construct method, prepares handlers
     */
    constructor() {
        this.character_handler = new CharacterHandler();
    }

    /**
     * Determines which function to use upon command execution.
     *
     * @param {Message} msg 
     */
    interpret(msg) {
        let command = msg.content.split(" ")[0];

        switch(command) {
            case "#!character":
                this.character_handler.interpret(msg);
            default:
                break;
        }
    }

}

module.exports = CommandHandler;
