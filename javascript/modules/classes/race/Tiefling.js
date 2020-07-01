let Race = require("./Race.js");

/**
 * The Tiefling race. 
 */
class Tiefling extends Race {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Race values */
        super();

        /* Generic */
        this.name = "Tiefling";
        this.short_description = "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.";
        this.long_description = "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable.";

        /* Stat Increases */
        this.attributes["charisma"] = 1;
        this.attributes["intellegence"] = 1;
        this.traits = ["Darkvision", "Hellish Resistance", "Infernal Legacy"];
    }
}

module.exports = Tiefling;
