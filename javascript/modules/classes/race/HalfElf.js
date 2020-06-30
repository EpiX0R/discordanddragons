import Race from "./Race.js";

/**
 * The Half-Elf race. 
 */
class HalfElf extends Race {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Race values */
        super();

        /* Generic */
        this.name = "Half-Elf";
        this.short_description = "Half-elves combine what some say are the best qualities of their elf and human parents.";
        this.long_description = "Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children. Many half-elves, unable to fit into either society, choose lives of solitary wandering or join with other misfits and outcasts in the adventuring life.";

        /* Stat Increases */
        this.charisma = 2;
        this.intellegence = 1;
        this.perception = 1;
        this.traits = ["Darkvision", "Fey Ancestry", "Skill Versatility"];
    }
}

module.exports = HalfElf;
