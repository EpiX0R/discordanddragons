/**
 * A Logger object for usage in every handler. Logs user commands and bot activity to "log.dat"
 */
class Logger {
    /**
     * Logs activity to the console and to the "log.dat" file.
     *
     * @param {Message} msg A message used to issue a command.
     */
    log(msg) {
        // Set up variables for logging output
        let date = new Date();
        let handler = msg.content.split(" ")[0];
        let command = msg.content.split(" ")[1];
        let args = msg.content.split(" ").slice(2);

        this.getFormattedDate(date);

        // Output differntiates if there are 0 arguments that follow the command.
        if (args.length === 0) {
            //console.log(msg.author.id + " issued '" + handler + " " + command + "'");
        } else {
            //console.log(msg.author.id + " issued '" + handler + " " + command + " " + args.join(" ") + "'");
        }
    }

    /**
     * Returns a string in the format of "YYYY-MM-DD HH:MM:SS"
     *
     * @param {Date} date A JavaScript Date object with the time to be returned.
     *
     * @returns {String} A string in the format of "YYYY-MM-DD HH:MM:SS"
     */
    getFormattedDate(date) {
        let output = "";

        console.log(date);

        return null;
    }
}

module.exports = Logger;
