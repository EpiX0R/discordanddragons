let Class = require("./Class.js");

/**
 * The Druid class. 
 */
class Druid extends Class {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Class values */
        super();

        /* Generic */
        this.name = "Druid";
        this.short_description = "A priest of the Old Faith, wielding the powers of nature and adopting animal forms.";
        this.long_description = "Holding high a gnarled staff wreathed with holly, an elf summons the fury of the storm and calls down explosive bolts of lightning to smite the torch-carrying orcs who threaten her forest. Crouching out of sight on a high tree branch in the form of a leopard, a human peers out of the jungle at the strange construction of a temple of Evil Elemental Air, keeping a close eye on the cultists’ activities. Swinging a blade formed of pure fire, a half-elf charges into a mass of skeletal soldiers, sundering the unnatural magic that gives the foul creatures the mocking semblance of life. Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature’s resilience, cunning, and fury. They claim no mastery over nature. Instead, they see themselves as extensions of nature’s indomitable will.";

        /* Stat Increases */
        this.hit_die = "d8";
        this.primary_ability = ["perception"];
        this.saves = ["intellegence", "perception"];
    }
}

module.exports = Druid;
