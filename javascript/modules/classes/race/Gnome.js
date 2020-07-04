let Race = require("./Race.js");

/**
 * The Gnome race. 
 */
class Gnome extends Race {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Race values */
        super();

        /* Generic */
        this.name = "Gnome";
        this.short_description = "A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.";
        this.long_description = "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.";

        /* Stat Increases */
        this.attributes["intellegence"] = 2;
        this.traits = ["Darkvision", "Gnome Cunning"];
    }
}

module.exports = Gnome;
