/**
 * A ClassHander object for usage in CharacterHandler, handles all "#!character class ..." commands.
 */
class ClassHandler {
    /**
     * Determines which character-related function to use upon command execution.
     *
     * @param {Message} msg A Message object.
     */
    interpret(msg) {
        let command = msg.content.split(" ")[1];
        let args = msg.content.split(" ");
        let user = msg.author.id;
        
        // Remove command from argument list
        arguments.shift();
        
        switch(command) {
            case "create":
                let character = new Character();

                break;
            case "class":
                break;
            default:
                break;
        }
    }
}

module.exports = ClassHandler;
