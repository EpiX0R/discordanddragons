import Race from "./Race.js";

/**
 * The Elf race. 
 */
class Elf extends Race {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Race values */
        super();

        /* Generic */
        this.name = "Elf";
        this.short_description = "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.";
        this.long_description = "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world.";

        /* Stat Increases */
        this.agility = 2;
        this.traits = ["Darkvision", "Keen Senses", "Fey Ancestry", "Trance"];
    }
}

module.exports = Elf;
