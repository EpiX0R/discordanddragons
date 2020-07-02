let Class = require("./Class.js");

/**
 * The Sorcerer class. 
 */
class Sorcerer extends Class {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Class values */
        super();

        /* Generic */
        this.name = "Sorcerer";
        this.short_description = "A spellcaster who draws on inherent magic from a gift or bloodline.";
        this.long_description = "Golden eyes flashing, a human stretches out her hand and unleashes the dragonfire that burns in her veins. As an inferno rages around her foes, leathery wings spread from her back and she takes to the air. Long hair whipped by a conjured wind, a half-elf spreads his arms wide and throws his head back. Lifting him momentarily off the ground, a wave of magic surges up in him, through him, and out from him in a mighty blast of lightning. Crouching behind a stalagmite, a halfling points a finger at a charging troglodyte. A blast of fire springs from her finger to strike the creature. She ducks back behind the rock formation with a grin, unaware that her wild magic has turned her skin bright blue. Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can’t study sorcery as one learns a language, any more than one can learn to live a legendary life. No one chooses sorcery; the power chooses the sorcerer.";

        /* Stat Increases */
        this.hit_die = "d6";
        this.primary_ability = ["charisma"];
        this.saves = ["endurance", "charisma"];
    }
}

module.exports = Sorcerer;