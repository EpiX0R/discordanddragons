/**
 * A class that handles basic Game functions, like storing players, rotating players, etc.
*/

const CharacterHandler = require("../../handlers/character/CharacterHandler");
const User = require("../user/User");

class Game {


    /**
     * Creates a new game
     *
     * @param {String[]} [players] A list of Discord ID:s corresponding to those playing.
     * @param {String} [dm]      The Discord ID of the dungeon master.
     */
    constructor(players,dm) {
        this.numplayers = players.length;
        this.players = players;

        this.currplayer;
        this.dm = new User("DungeonMaster", dm);
        this.orderArr = [];
    }


    /**
     * Initializes game. Users pick a character and this user obj is stored in
     * corresponding index in 'players' 
     */
    gameInit() {

        /*TODO*/
        //User might be afk, while loop could be infinite
        //IO is temporary

        for (var i = 0; i < numplayers; i++) {
        
            var charlist = CharacterHandler.getCharacterList(players[i]);
            var playerpicked = 0;

            while (!playerpicked) {
                let u = new User(players[i]);
                var input = readline();
                let re = new RegExp('[0 - 9]');

                console.log("Choose one of your listed characters. (write a number)");
                for (var i = 0; i < charlist.length; i++) {
                    console.log(i + ": " + charList[i].getCharacterShortInfo);
                }

                if(input.replace(re,"") == "" && input < (charlist.length-1)) {
                    playerpicked = 1;
                    u.setActiveCharacter(charlist[input]);
                    players[i] = u;
                }

            }

        }

        currplayer = dm;
    }


    /**
     * All players roll, then the order array is updated
    */
    turnInit() {
        for (var i = 0; i < numplayers; i++) {
            var c = players[i].getActiveCharacter;
            c.roll();
            orderArr[players[i].id] = c.lastRoll;
        }
    }


    /**
    * Calculates which player is first and then which is next using the orderArr
    */
    nextPlayer() {

        for(var user in players)
        {
            var value = this.orderArr[u.id];
            if(value >= Math.max(orderArr)) {
                currPlayer = user;
            }
            this.orderArr[key] = 0;
        }

        play_turn(dm);
    }


    /**
    * Gets active character from current player, then prompts user to insert command
    */
    playTurn() {
        /*TODO Maybe check if player stunned, dead, or something? */
        var c = user.getActiveCharacter();

        if(c.hp <= 0 /*|| TODO c.debuff.stunned*/) {
            this.nextPlayer();
        }
        else {
            /*TODO (action will be implemented by IO class) */
            //action(currplayer);
        }

    }

}
