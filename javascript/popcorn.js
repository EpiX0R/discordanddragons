const Popcorn = require("./modules/Popcorn.js");

/**
 * Starts the bot.
 */
function main() {
    // Before startup, node and packages loads and works.
    console.log("Bringing pot...");
    
    // Initiating new Bot Object
    console.log("Adding oil...");

    let bot = new Popcorn();

    // Loading Bot prerequisites
    console.log("Frying corn...\n");

    bot.initialize();
    bot.start();
}

// Start up
main();