import Race from "./Race.js";

/**
 * The Dwarf race. 
 */
class Dwarf extends Race {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Race values */
        super();

        /* Generic */
        this.name = "Dwarf";
        this.short_description = "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.";
        this.long_description = "Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs—these common threads unite all dwarves.";

        /* Stat Increases */
        this.endurance = 2;
        this.traits = ["Darkvision", "Dwarven Resilience", "Dwarven Combat Training", "Stonecunning"];
    }
}

module.exports = Dwarf;
