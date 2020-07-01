let Class = require("./Class.js");

/**
 * The Monk class. 
 */
class Monk extends Class {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Class values */
        super();

        /* Generic */
        this.name = "Monk";
        this.short_description = "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.";
        this.long_description = "Her fists a blur as they deflect an incoming hail of arrows, a half-elf springs over a barricade and throws herself into the massed ranks of hobgoblins on the other side. She whirls among them, knocking their blows aside and sending them reeling, until at last she stands alone. Taking a deep breath, a human covered in tattoos settles into a battle stance. As the first charging orcs reach him, he exhales and a blast of fire roars from his mouth, engulfing his foes. Moving with the silence of the night, a black-clad halfling steps into a shadow beneath an arch and emerges from another inky shadow on a balcony a stone’s throw away. She slides her blade free of its cloth-wrapped scabbard and peers through the open window at the tyrant prince, so vulnerable in the grip of sleep. Whatever their discipline, monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.";

        /* Stat Increases */
        this.hit_die = "d8";
        this.primary_ability = ["agility", "perception"];
        this.saves = ["strength", "agility"];
    }
}

module.exports = Monk;
