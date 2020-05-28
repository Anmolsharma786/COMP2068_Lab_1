'use strict';

console.log('Hello world');

console.log("***");
console.log("Computer Chooses" + computerResult); 
for (var index = 0; index <= 100; index++) {
    var randomPick = getRandomInt(0, 3);
    var computerResult = possibleAnswer[randomPick];
    compare(ourAnswer, computerResult);    
}
