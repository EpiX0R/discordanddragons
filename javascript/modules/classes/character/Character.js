const Classes = require("../class");
const Races = require("../race");

/**
 * A generic Character Sheet with attributes and stats. 
 */
class Character {
    /**
     * Creates a character
     */
    constructor(name, race = new Races.Race, class_object = new Classes.Class) {
        /* Basic Information */
        this.name = name;
        this.level = 1;
        this.experience = 0;

        /* Race */
        this.race = race;

        /* Class */
        this.class = class_object;

        /* Stats */
        this.attributes = {
            "strength": 0,
            "perception": 0,
            "endurance": 0,
            "charisma": 0,
            "intellegence": 0,
            "agility": 0,
            "luck": 0
        };

        /* Alignment */
        // TODO: Alignment boundaries? Chaotic Evil, True Neutral etc? System Required?
        this.alignment = 50;
    }

    /**
     * Sets the characters race.
     *
     * @param {Object} race_object An appropriate Race class. 
     */
    setRace(race_object) {
        this.race = race_object;
    }

    /**
     * Sets the characters class.
     *
     * @param {Object} class_object An appropriate Class class. 
     */
    setClass(class_object) {
        this.class = class_object;
    }

    /**
     * Sets the characters name.
     *
     * @param {String} name A string representing the characters name. 
     */
    setName(name) {
        this.name = name;
    }

    /**
     * Updates the characters race by using the Race classes.
     *
     * @param {String} race_string The string
     */
    selectRace(race_string) {
        switch(race_string){
            case "DRAGONBORN":
                this.setRace(new Races.Dragonborn);
                break;
            case "DWARF":
                this.setRace(new Races.Dwarf);
                break;
            case "ELF":
                this.setRace(new Races.Elf);
                break;
            case "GNOME":
                this.setRace(new Races.Gnome);
                break;
            case "HALF_ELF":
                this.setRace(new Races.HalfElf);
                break;
            case "HALFLING":
                this.setRace(new Races.Halfling);
                break;
            case "HALF_ORC":
                this.setRace(new Races.HalfOrc);
                break;
            case "HUMAN":
                this.setRace(new Races.Human);
                break;
            case "TIEFLING":
                this.setRace(new Races.Tiefling);
                break;
            default:
                this.setRace(new Races.Race);
                break;
        }

        this.addRacialStats();
    }

    /**
     * Updates the characters class by using the Class classes.
     *
     * @param {String} class_string 
     */
    selectClass(class_string) {
        switch(class_string){
            case "BARBARIAN":
                this.setClass(new Classes.Barbarian);
                break;
            case "BARD":
                this.setClass(new Classes.Bard);
                break;
            case "CLERIC":
                this.setClass(new Classes.Cleric);
                break;
            case "DRUID":
                this.setClass(new Classes.Druid);
                break;
            case "FIGHTER":
                this.setClass(new Classes.Fighter);
                break;
            case "MONK":
                this.setClass(new Classes.Monk);
                break;
            case "PALADIN":
                this.setClass(new Classes.Paladin);
                break;
            case "RANGER":
                this.setClass(new Classes.Ranger);
                break;
            case "ROGUE":
                this.setClass(new Classes.Rogue);
                break;
            case "SORCERER":
                this.setClass(new Classes.Sorcerer);
                break;
            case "WARLOCK":
                this.setClass(new Classes.Warlock);
                break;
            case "WIZARD":
                this.setClass(new Classes.Wizard);
                break;
            default:
                this.setClass(new Classes.Class);
                break;
        }
    }

    /**
     * Updates the characters attributes with the additions gained from its race.
     */
    addRacialStats() {
        let racialAttributes = this.race.attributes;

        Object.keys(racialAttributes).forEach(key => {
            this.attributes[key] += racialAttributes[key];
        })
    }
}

module.exports = Character;
