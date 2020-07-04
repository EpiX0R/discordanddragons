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

        let formattedDate = this.getFormattedDate(date);

        // Output differntiates if there are 0 arguments that follow the command.
        if (args.length === 0) {
            console.log(formattedDate + ": " + msg.author.id + " issued '" + handler + " " + command + "'");
        } else {
            console.log(formattedDate + ": " + msg.author.id + " issued '" + handler + " " + command + " " + args.join(" ") + "'");
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
        /* Year-Month-Date */
        let yyyy = date.getFullYear().toString();
        let mm = (date.getMonth()+1).toString();
        let dd  = date.getDate().toString();

        if (mm.length === 1) mm = "0" + mm;
        if (dd.length === 1) dd = "0" + dd;

        /* Hour:Min:Sec */
        let hour = date.getHours().toString();
        let min = date.getMinutes().toString();
        let sec = date.getSeconds().toString();

        if (hour.length === 1) hour = "0" + hour;
        if (min.length === 1) min = "0" + min;
        if (sec.length === 1) sec = "0" + sec;

        return yyyy + "-" + mm + "-" + dd + " " + hour + ":" + min + ":" + sec;
    }
}

module.exports = Logger;
