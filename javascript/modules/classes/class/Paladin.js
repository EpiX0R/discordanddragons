let Class = require("./Class.js");

/**
 * The Paladin class. 
 */
class Paladin extends Class {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Class values */
        super();

        /* Generic */
        this.name = "Paladin";
        this.short_description = "A holy warrior bound to a sacred oath.";
        this.long_description = "Clad in plate armor that gleams in the sunlight despite the dust and grime of long travel, a human lays down her sword and shield and places her hands on a mortally wounded man. Divine radiance shines from her hands, the man’s wounds knit closed, and his eyes open wide with amazement. A dwarf crouches behind an outcrop, his black cloak making him nearly invisible in the night, and watches an orc war band celebrating its recent victory. Silently, he stalks into their midst and whispers an oath, and two orcs are dead before they even realize he is there. Silver hair shining in a shaft of light that seems to illuminate only him, an elf laughs with exultation. His spear flashes like his eyes as he jabs again and again at a twisted giant, until at last his light overcomes its hideous darkness. Whatever their origin and their mission, paladins are united by their oaths to stand against the forces of evil. Whether sworn before a god’s altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin’s oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.";

        /* Stat Increases */
        this.hit_die = "d10";
        this.primary_ability = ["strength", "charisma"];
        this.saves = ["perception", "charisma"];
    }
}

module.exports = Paladin;
