/**
 * A ClassHander object for usage in CharacterHandler, handles all "#!character class ..." commands.
 */
class ClassHandler {
    /**
     * Determines which class-related function to use upon command execution.
     *
     * @param {Message} msg A Message object.
     */
    interpret(msg) {
        let command = msg.content.split(" ")[2];
        let args = msg.content.split(" ").slice(2);
        let user = msg.author.id;
        
        // Remove command from argument list
        arguments.shift();
        
        switch(command) {
            case "select":
                let character = new Character();

                break;
            case "info":
                break;
            default:
                break;
        }
    }
}

module.exports = ClassHandler;
