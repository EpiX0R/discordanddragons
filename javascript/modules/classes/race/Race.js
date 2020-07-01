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
        this.attributes = {
            "strength": 0,
            "perception": 0,
            "endurance": 0,
            "charisma": 0,
            "intellegence": 0,
            "agility": 0,
            "luck": 0
        }

        /* Traits */
        this.traits = [];
    }
}

module.exports = Race;
