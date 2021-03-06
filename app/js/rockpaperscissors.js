(function() {
    'use strict';

    ////////////////////////////////////////////////
    /*   Provided Code - Please Don't Edit   */
    ////////////////////////////////////////////////

    function getInput() {
        console.log("Please choose either 'rock', 'paper', or 'scissors'.");
        return prompt();
    }

    function randomPlay() {
        var randomNumber = Math.random();
        if (randomNumber < 0.33) {
            return "rock";
        } else if (randomNumber < 0.66) {
            return "paper";
        } else {
            return "scissors";
        }
    }

    ////////////////////////////////////////////////
    /*           Write Your Code Below            */
    ////////////////////////////////////////////////

    function getPlayerMove(move) {
        // Write an expression that operates on a variable called `move`
        // If a `move` has a value, your expression should evaluate to that value.
        // However, if `move` is not specified / is null, your expression should equal `getInput()`.
        if (move !== null) {
            move = move;
        } else {
            move = getInput();
        }
        return move;
    }

    function getComputerMove(move) {
        // Write an expression that operates on a variable called `move`
        // If a `move` has a value, your expression should evaluate to that value.
        // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
        if (move !== null) {
            move = move;
        } else {
            move = randomPlay();
        }
        return move;
    }

    function getWinner(playerMove, computerMove) {
        var winner;
        // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
        // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
        // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
        /* YOUR CODE HERE */

        if (playerMove === computerMove) {
            winner = 'tie';

        } else if (playerMove === 'rock') {
            if (computerMove === "scissors") {
                winner = 'player';
            } else {
                winner = 'computer';
            }

        } else if (playerMove === 'scissors') {
            if (computerMove === 'paper') {
                winner = 'player';
            } else {
                winner = 'computer';
            }
        } else if (playerMove === "paper") {
            if (computerMove === "rock") {
                winner = 'player';
            } else {
                winner = 'computer';
            }
        }

        //RETURN VALUE 
        return winner;
    }

    function playToFive() {
        console.log("Let's play Rock, Paper, Scissors");
        var playerWins = 0;
        var computerWins = 0;

        // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
        // what, who won, and what the current scoreboard looks like.
        /* YOUR CODE HERE */

        var playerMove;
        var computerMove;
        var winner;

        while (playerWins < 5 && computerWins < 5) {
            // Ask player and computer for their move
            // (using "null" as a value forces the prompt)
            playerMove = getPlayerMove();
            computerMove = getComputerMove();

            // calculate winner of the round and pass that to "winner"
            winner = getWinner(playerMove, computerMove);

            // determine if there was a winner. If so, increment their wins. 
            if (winner == 'player') {
                playerWins++;
            } else if (winner == 'computer') {
                computerWins++;
            }

            // console.log last play and current score
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');

        } // end of while, anything above is part of each "round"

        return [playerWins, computerWins];
    }

    playToFive();

    //If you are interested in an additional challenge, try writing another function called playTo(x) that allows us to play Rock Paper Scissors until either the player or the computer has won x times. Feel free to steal liberally from playToFive().

}());