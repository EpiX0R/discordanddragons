/**
 * A ClassHander object for usage in CharacterHandler, handles all "#!character class commands".
 */
class ClassHandler {
    /**
     * Determines which character-related function to use upon command execution.
     *
     * @param {Message} msg A Message object.
     */
    interpret(msg) {
        let command = msg.content.split(" ")[1]
        
        switch(command) {
            case "create":
                let character = new Character("Jeff Bezos");
                console.log(character);

                break;
            case "class":
                break;
            default:
                break;
        }
    }
}

module.exports = CharacterHandler;
