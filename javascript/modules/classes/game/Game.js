/**
 * A class that handles basic Game functions, like storing players, rotating players, etc.
*/

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
            pickChar(idArr[i]);
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
