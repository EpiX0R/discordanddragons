/**
 * A generic Race with empty attribute additions and traits. 
 */
class Race {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Generic */
        this.name = "Race";
        this.short_description = "Short Description";
        this.long_description = "Long Description";

        /* Stat Increases */
        this.strength = 0;
        this.perception = 0;
        this.endurance = 0;
        this.charisma = 0;
        this.intellegence = 0;
        this.agility = 0;
        this.luck = 0;
        this.traits = [];
    }
}

module.exports = Race;
