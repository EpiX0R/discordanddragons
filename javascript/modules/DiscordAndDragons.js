// Load up libraries and modules
const Discord = require("discord.js");
const CommandHandler = require("./CommandHandler.js");
const Logger = require("./base/logger.js");

// Import classes
const Character = require("../modules/classes/character/Character.js"); 

/**
 * Class for the DiscordAndDragons bot
 */
class DiscordAndDragons {

    /**
     * Links the bot to Discord through Discord.js library
     */
    constructor() {
        this.client = new Discord.Client();
        this.secret = require("../secret/secret.js");
    }

    /**
     * Retrieves needed packages & files and loads configurations
     */
    initialize() {
        this.ch = new CommandHandler();
        this.logger = new Logger();
        
        //TEST
        this.char = new Character();
        this.char.selectRace("HUMAN");
        this.char.selectClass("BARBARIAN");

        console.log(this.char.class);
    }

    /**
     * Starts the bot object
     */
    start() {
        this.client.on('ready', () => {
            console.log(`${this.client.user.tag} is now running!\n`);
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

module.exports = DiscordAndDragons;
