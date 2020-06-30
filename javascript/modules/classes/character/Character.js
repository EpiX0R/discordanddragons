/**
 * A generic Character Sheet with attributes and stats. 
 */
class Character {
    /**
     * Constructs stats to a character
     */
    constructor() {
        /* Race */
        this.race = null;

        /* Class */
        this.class = null;

        /* Stats */
        this.strength = 0;
        this.perception = 0;
        this.endurance = 0;
        this.charisma = 0;
        this.intellegence = 0;
        this.agility = 0;
        this.luck = 0;
    }

    /**
     * Updates the characters race by using the Race classes.
     *
     * @param {String} race_string 
     */
    selectRace(race_string) {
        switch(race_string){
            case "dragonorn":
                this.race = null;
                //addRacialStats();
                break;
            case "dwarf":
                this.race = null;
                //addRacialStats();
                break;
            case "elf":
                this.race = null;
                //addRacialStats();
                break;
            case "gnome":
                this.race = null;
                //addRacialStats();
                break;
            case "half-elf":
                this.race = null;
                //addRacialStats();
                break;
            case "halfling":
                this.race = null;
                //addRacialStats();
                break;
            case "half-orc":
                this.race = null;
                //addRacialStats();
                break;
            case "human":
                this.race = null;
                //addRacialStats();
                break;
            case "tiefling":
                this.race = null;
                //addRacialStats();
                break;
            default:
                this.race = null;
                break;
        }
    }

    /**
     * Updates the characters class by using the Class classes.
     *
     * @param {String} class_string 
     */
    selectClass(class_string) {
        switch(class_string){
            case "barbarian":
                this.class = null;
                //addClassStats();
                break;
            case "bard":
                this.class = null;
                //addClassStats();
                break;
            case "cleric":
                this.class = null;
                //addClassStats();
                break;
            case "druid":
                this.class = null;
                //addClassStats();
                break;
            case "fighter":
                this.class = null;
                //addClassStats();
                break;
            case "monk":
                this.class = null;
                //addClassStats();
                break;
            case "paladin":
                this.class = null;
                //addClassStats();
                break;
            case "ranger":
                this.class = null;
                //addClassStats();
                break;
            case "rogue":
                this.class = null;
                //addClassStats();
                break;
            case "sorcerer":
                this.class = null;
                //addClassStats();
                break;
            case "warlock":
                this.class = null;
                //addClassStats();
                break;
            case "wizard":
                this.class = null;
                //addClassStats();
                break;
            default:
                this.class = null;
                break;
        }
    }
}

module.exports = Character;
