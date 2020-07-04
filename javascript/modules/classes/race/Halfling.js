let Race = require("./Race.js");

/**
 * The Halfling race. 
 */
class Halfling extends Race {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Race values */
        super();

        /* Generic */
        this.name = "Halfling";
        this.short_description = "The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.";
        this.long_description = "The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along a dirt road or a raft floating downriver.";

        /* Stat Increases */
        this.attributes["agility"] = 2;
        this.traits = ["Lucky", "Brave", "Halfling Nimbness"];
    }
}

module.exports = Halfling;
