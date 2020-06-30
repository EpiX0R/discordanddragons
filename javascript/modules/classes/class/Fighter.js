import Class from "./Class.js";

/**
 * The Fighter class. 
 */
class Fighter extends Class {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Class values */
        super();

        /* Generic */
        this.name = "Fighter";
        this.short_description = "";
        this.long_description = "";

        /* Stat Increases */
        this.hit_die = "d10";
        this.primary_ability = "agility";
        this.saves = ["strength", "endurance"];
    }
}

module.exports = Fighter;
