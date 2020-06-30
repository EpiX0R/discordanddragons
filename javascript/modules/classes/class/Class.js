/**
 * A generic Class with attribute additions and stats. 
 */
class Class {
    /**
     * Construct method, prepares handlers
     */
    constructor() {
        /* Generic */
        this.name = "Class";
        this.short_description = "Short Description";
        this.long_description = "Long Description";

        /* Class Specific */
        this.hit_die = "Dice";
        this.primary_ability = "Primary Ability";
        this.saves = [];
    }
}

module.exports = Class;
