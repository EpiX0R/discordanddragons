let Race = require("./Race.js");

/**
 * The Dragonborn race. 
 */
class Dragonborn extends Race {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Race values */
        super();

        /* Generic */
        this.name = "Dragonborn";
        this.short_description = "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.";
        this.long_description = "Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life.";

        /* Stat Increases */
        this.attributes["strength"] = 2;
        this.attributes["charisma"] = 1;
        this.traits = ["Draconic Ancestry", "Breath Weapon", "Damage Resistance"];
    }
}

module.exports = Dragonborn;
