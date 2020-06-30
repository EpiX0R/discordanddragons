const DiscordAndDragons = require("./modules/DiscordAndDragons.js");

/**
 * Starts the bot.
 */
function main() {
    let bot = new DiscordAndDragons();

    bot.initialize();
    bot.start();
}

// Start up
main();