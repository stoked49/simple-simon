/**
 * Created by Irby on 12/9/16.
 */
var getRandomNumber = function () {
    var result = Math.floor((Math.random() * 4));
    return result
};
console.log(getRandomNumber());
var simonArray = [];
var userArray = [];

var pushRandomToArray = function () {
    simonArray.push(getRandomNumber());
};
pushRandomToArray();

console.log(simonArray);

