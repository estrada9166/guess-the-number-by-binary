var min = 0;
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];


var searchTheNumber = function(min, max, numberToBeFind, arr) {
    //We find the middle number of the arr
    var guess = Math.floor(((min + max) / 2));
    // we find the top number of the middle on the arr
    var guessTop = Math.ceil(((min + max) / 2));

    // we chek if the number guessed is lower or higher than the number that we are finding
    // or if the top possition is higher than the length of the arr
    // if it's true we return -1
    if(arr[guess] < numberToBeFind && arr[guessTop] > numberToBeFind || guessTop > max){
        return -1
    // if the number that we find is different to the number that we need to find
    // then we check the position, and + or - 1 because is binary
    // and we call again the same function changing the min or the max
    } else if(arr[guess] != numberToBeFind) {
        if(arr[guess] < numberToBeFind) {
            return searchTheNumber((guess + 1), max, numberToBeFind, arr);
        } else {
            return searchTheNumber(min, (guess - 1), numberToBeFind, arr);
        }
    }
    // if the number is find we return the guess
    return guess;
}

var assertEqual = function(expected, result) {
    if(expected === result) {
        return 'PASS';
    } else {
        return `Expected ${expected} but actually got ${result}`
    }
}

console.log(searchTheNumber(min, primes.length - 1, 37, primes))

console.log(assertEqual(-1, searchTheNumber(min, primes.length - 1, 38, primes)));
console.log(assertEqual(0, searchTheNumber(min, primes.length -1, 2, primes)));
console.log(assertEqual(3, searchTheNumber(min, primes.length - 1, 7, primes)));
console.log(assertEqual(-1, searchTheNumber(min, primes.length - 1, 45, primes)));
console.log(assertEqual(-1, searchTheNumber(min, primes.length - 1, 65, primes)));
console.log(assertEqual(24, searchTheNumber(min, primes.length - 1, 97, primes)));
console.log(assertEqual(23, searchTheNumber(min, primes.length - 1, 89, primes)));
console.log(assertEqual(-1, searchTheNumber(min, primes.length - 1, 99, primes)));


