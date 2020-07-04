/**
 * A RepoHander object for usage in CommandHandler, handles all "#!repo commands".
 */
class GameLoopHandler {
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

        switch (command) {
            case "attack":
                
                break;
            case "info":
                break;
            default:
                break;
        }
    }
}

module.exports = GameLoopHandler;
