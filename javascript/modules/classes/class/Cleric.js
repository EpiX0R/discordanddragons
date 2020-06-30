import Class from "./Class.js";

/**
 * The Cleric class. 
 */
class Cleric extends Class {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Class values */
        super();

        /* Generic */
        this.name = "Cleric";
        this.short_description = "A priestly champion who wields divine magic in service of a higher power";
        this.long_description = "Arms and eyes upraised toward the sun and a prayer on his lips, an elf begins to glow with an inner light that spills out to heal his battle-worn companions. Chanting a song of glory, a dwarf swings his axe in wide swaths to cut through the ranks of orcs arrayed against him, shouting praise to the gods with every foe’s fall. Calling down a curse upon the forces of undeath, a human lifts her holy symbol as light pours from it to drive back the zombies crowding in on her companions. Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic.";

        /* Stat Increases */
        this.hit_die = "d8";
        this.primary_ability = "perception";
        this.saves = ["perception", "charisma"];
    }
}

module.exports = Cleric;
