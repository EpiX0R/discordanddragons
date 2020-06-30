// Load up libraries and modules
const Discord = require("discord.js");
const CommandHandler = require("./CommandHandler.js");
const Logger = require("./base/logger.js");

/**
 * Class for the Popcorn bot
 */
class Popcorn {

    /**
     * Retrieves needed packages & files and loads configurations
     */
    initialize() {
        this.client = new Discord.Client();
        this.secret = require("../secret/secret.js");
        this.ch = new CommandHandler();
        this.logger = new Logger();
    }

    /**
     * Starts the bot object
     */
    start() {
        this.client.on('ready', () => {
            console.log(`${this.client.user.tag} is now popping!\n`);
        });
        
        this.client.on('message', msg => {
            if (msg.content.substring(0, 2) == "#!") {
                //this.ch.interpret(msg);
                this.logger.log(msg);
            }
        });
        
        this.client.login(this.secret.token);
    }
}

module.exports = Popcorn;
