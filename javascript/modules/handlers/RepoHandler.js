/**
 * A RepoHander object for usage in CommandHandler, handles all "#!repo commands".
 */
class RepoHandler {
    /**
     * Determines which function to use upon command execution.
     *
     * @param {Message} msg 
     */
    interpret(msg) {
        // Just a test command
        if (msg.content.substr(7, 11) == "check") {
            console.log("works!");
        }
    }
}

module.exports = RepoHandler;
