const chunk = require('lodash.chunk')
const shuffle = require('loadash.shuffle')
const reverse = require('lodash.reverse')
const without = require('lodash.without')


let firstArray = [1, 6, 3, 8, 9, 2, 5, 10, 5, 9];

// chunk the first array

console.log(_.chunk(firstArray, 4));

// shuffle array

let secondArray = [65, 23, 9, 85, 21, 7, 89];

console.log(_.shuffle(collection));

// reverse array

let thirdArray = [45, 87, 1, 6, 20, 55, 89, 3];

console.log(_.reverse(thirdArray));

// without array

let fourthArray = [9, 45, 87, 1, 6, 9, 2, 5, 10, 5, 55, 9, 3];

console.log(_.without(fourthArray, 5, 9));

// compact array

let fifthArray = [0, 1, false, 5, 9, '', 3, null, Nan];

console.log(_.compact(fifthArray));
