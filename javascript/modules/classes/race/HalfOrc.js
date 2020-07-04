let Race = require("./Race.js");

/**
 * The Half-Orc race. 
 */
class HalfOrc extends Race {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Race values */
        super();

        /* Generic */
        this.name = "Half-Orc";
        this.short_description = "Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see.";
        this.long_description = "Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human tribes sometimes form alliances, joining forces into a larger horde to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury.";

        /* Stat Increases */
        this.attributes["strength"] = 2;
        this.attributes["endurance"] = 1;
        this.traits = ["Darkvision", "Menacing", "Relentless", "Endurance", "Savage Attacks"];
    }
}

module.exports = HalfOrc;
