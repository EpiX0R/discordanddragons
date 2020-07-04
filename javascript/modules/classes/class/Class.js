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
        this.short_description = "Short description.";
        this.long_description = "Long description.";

        /* Class Specific */
        this.hit_die = "d0";
        this.primary_ability = [];
        this.saves = [];
    }
}

module.exports = Class;
