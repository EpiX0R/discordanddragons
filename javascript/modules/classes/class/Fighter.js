let Class = require("./Class.js");

/**
 * The Fighter class. 
 */
class Fighter extends Class {
    /**
     * Constructor, prepares variables for stats, name and description.
     */
    constructor() {
        /* Inherits Class values */
        super();

        /* Generic */
        this.name = "Fighter";
        this.short_description = "A master of martial combat, skilled with a variety of weapons and armor.";
        this.long_description = "A human in clanging plate armor holds her shield before her as she runs toward the massed goblins. An elf behind her, clad in studded leather armor, peppers the goblins with arrows loosed from his exquisite bow. The half-orc nearby shouts orders, helping the two combatants coordinate their assault to the best advantage. A dwarf in chain mail interposes his shield between the ogre’s club and his companion, knocking the deadly blow aside. His companion, a half-elf in scale armor, swings two scimitars in a blinding whirl as she circles the ogre, looking for a blind spot in its defenses. A gladiator fights for sport in an arena, a master with his trident and net, skilled at toppling foes and moving them around for the crowd’s delight—and his own tactical advantage. His opponent’s sword flares with blue light an instant before she sends lightning flashing forth to smite him. All of these heroes are fighters, perhaps the most diverse class of characters in the worlds of Dungeons & Dragons. Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings—as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.";

        /* Stat Increases */
        this.hit_die = "d10";
        this.primary_ability = ["agility"];
        this.saves = ["strength", "endurance"];
    }
}

module.exports = Fighter;
