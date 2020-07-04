let Class = require("./Class.js");

/**
 * The Warlock class. 
 */
class Warlock extends Class {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Class values */
        super();

        /* Generic */
        this.name = "Warlock";
        this.short_description = "A wielder of magic that is derived from a bargain with an extraplanar entity.";
        this.long_description = "With a pseudodragon curled on his shoulder, a young elf in golden robes smiles warmly, weaving a magical charm into his honeyed words and bending the palace sentinel to his will. As flames spring to life in her hands, a wizened human whispers the secret name of her demonic patron, infusing her spell with fiendish magic. Shifting his gaze between a battered tome and the odd alignment of the stars overhead, a wild-eyed tiefling chants the mystic ritual that will open a doorway to a distant world. Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.";

        /* Stat Increases */
        this.hit_die = "d8";
        this.primary_ability = ["charisma"];
        this.saves = ["perception", "charisma"];
    }
}

module.exports = Warlock;
