import Race from "./Race.js";

/**
 * The Human race. 
 */
class Human extends Race {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Race values */
        super();

        /* Generic */
        this.name = "Human";
        this.short_description = "Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers o";
        this.long_description = "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.";

        /* Stat Increases */
        this.strength = 1;
        this.perception = 1;
        this.endurance = 1;
        this.charisma = 1;
        this.intellegence = 1;
        this.agility = 1;
        this.luck = 1;
        this.traits = ["Extra Language"];
    }
}

module.exports = Human;