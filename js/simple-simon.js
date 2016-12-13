/**
 * Created by Irby on 12/9/16.
 */
"use strict";


var game = {
    count: 0,
    tiles: ['#greenTile', '#blueTile', '#redTile', '#yellowTile'],
    simonArray: [],
    playerArray: [],
    sound:{
        blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
        green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    }
};

function clearGame() {
    game.simonArray = [];
    game.count = 0;
    addCount();
}

function newGame() {
    clearGame();
}

function nextLevel() {
    addCount();
}

function pushNextMove() {
    game.simonArray.push(game.tiles[(Math.floor(Math.random() * 4))]);
    showMoves();
}

function addCount() {
    game.count++;
    pushNextMove();
}

function showMoves() {
    var i = 0;
    var moves = setInterval(function () {
        playGame(game.simonArray[i]);
        i++;
        if (i >= game.simonArray.length) {
            clearInterval(moves);
        }
    }, 600);

    clearPlayer();
}

function sound(name) {
    switch(name) {
        case'#greenTile':
            game.sound.green.play();
            break;
        case '#blueTile':
            game.sound.blue.play();
            break;
        case '#redTile':
            game.sound.red.play();
            break;
        case '#yellowTile':
            game.sound.yellow.play();
            break;
    }
}

function playGame(tile) {
    $(tile).removeClass('shadedTile');
    setTimeout(function () {
        $(tile).addClass('shadedTile');
    }, 400);
}

function clearPlayer() {
    game.playerArray = [];
}

function addToPlayerArray(id) {
    var tile = "#" + id;
    console.log(tile);
    game.playerArray.push(tile);
    playerTurn(tile);
}
function playerTurn(tile) {
    if (game.playerArray[game.playerArray.length - 1] !== game.simonArray[game.playerArray.length - 1]) {
        alert('Try again! ...From scratch!');
        newGame();
    } else {
        console.log('Good Move!');
        sound(tile);
        var check = game.playerArray.length ===
            game.simonArray.length;
        if (check) {
            if (game.count == 20) {
                alert('You won! Congrats.');
            } else {
                alert('Next round!');
                nextLevel();
            }
        }
    }
}

