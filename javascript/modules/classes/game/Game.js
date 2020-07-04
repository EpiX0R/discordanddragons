/**
 * A class that handles basic Game functions, like storing players, rotating players, etc.
*/

const CharacterHandler = require("../../handlers/character/CharacterHandler");

class Game {

    constructor(numplayers,players,dm /*etc?*/) {
        this.numplayers = numplayers;
        this.players = players;
        this.currplayer;
        this.dm = dm;
        this.orderArr = [];
    }

    gameInit() {
        for (var i = 0; i < numplayers; i++) {
            //Prompt current player to choose what character from DB they pick
            var charlist = CharacterHandler.getCharacterList(players[i]);
            var playerpicked = 0;

            while (!playerpicked) {

                var input = readline();
                let re = new RegExp('[0 - 9]');

                console.log("Choose one of your listed characters. (write a number)");
                for (var i = 0; i < charlist.length; i++) {
                    /*Io is temporary*/
                    console.log(i + ": " + charList[i].getCharacterShortInfo);
                }

                if(input.replace(re,"") == "" && input < (charlist.length-1)) {
                    playerpicked = 1;
                    //Need to have a way to associate which character currently
                    // the discord user associates with
                }

            }

        }

        currplayer = dm;
    }

    turnInit() {
        //All players roll, then the order array is updated
        for (var i = 0; i < numplayers; i++) {
            var c = getCharacter(players[i]);
            c.roll();
            orderArr[players[i]] = c.lastRoll;
        }
    }

    nextPlayer() {

        for(var key in arr)
        {
            var value = arr[key];
            if(value == Math.max(orderArr)) {
                currPlayer = key;
            }
            arr[key] = 0;
        }

        play_turn(dm);
    }

    playTurn() {
        //Maybe check if player stunned, dead, or something? 
        var c = getCharacter(currplayer);
        if(c.health <= 0 || c.attr.stunned) {
            this.nextPlayer();
        }
        else {
            action(currplayer);
        }

    }

}
