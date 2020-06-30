const CharacterHandler = require("./handlers/CharacterHandler.js");
//const PlanningHandler = require("./handlers/PlanningHandler.js");

/**
 * A CommandHandler object for usage in bot.
 */
class CommandHandler {
    /**
     * Construct method, prepares handlers
     */
    constructor() {
        this.rh = new CharacterHandler();
    }

    /**
     * Determines which function to use upon command execution.
     *
     * @param {Message} msg 
     */
    interpret(msg) {
        switch(msg.content.substr(0, 6)) {
            case "#!repo":
                this.rh.interpret(msg);
            //case "#!plan":
            //    PlanningHandler.interpret();
        }
    }

}

module.exports = CommandHandler;
