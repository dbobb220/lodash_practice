const _ = require('lodash');
const chunk = require('lodash.chunk');
const shuffle = require('lodash.shuffle');
const reverse = require('lodash.reverse');
const without = require('lodash.without');
const assert = require("assert");


let firstArray = [1, 6, 3, 8, 9, 2, 5, 10, 5, 9];

// chunk the first array

let chunkedArray = _.chunk(firstArray, 4);
console.log(chunkedArray)

// shuffle array

let secondArray = [65, 23, 9, 85, 21, 7, 89];

let shuffledArray = _.shuffle(secondArray);
console.log(shuffledArray)

// reverse array

let thirdArray = [45, 87, 1, 6, 20, 55, 89, 3];

let reversedArray = _.reverse(thirdArray);
console.log(reversedArray)

// without array

let fourthArray = [9, 45, 87, 1, 6, 9, 2, 5, 10, 5, 55, 9, 3];

let withoutedArray = _.without(fourthArray, 5, 9);
console.log(withoutedArray);

// compact array

let fifthArray = [0, 1, false, 5, 9, '', 3, null, NaN];

let compactedArray = _.compact(fifthArray);
console.log(compactedArray);

if (typeof describe === 'function') {
    describe('chunk test', () => {
        it ('should correctly chunk array', () => {
            assert.deepEqual(chunkedArray, [ [ 1, 6, 3, 8 ], [ 9, 2, 5, 10 ], [ 5, 9 ] ] );
        });
    });

    describe('reverse test', () =>{
        it ('should correctly reverse array', ()=>{
            assert.deepEqual(reversedArray, [ 3, 89, 55, 20, 6, 1, 87, 45 ]);
        });
    });

    describe('without test', () =>{
        it ('should correctly without array', ()=>{
            assert.deepEqual(withoutedArray, [ 45, 87, 1, 6, 2, 10, 55, 3 ]);
        });
    });

    describe('compact test', () =>{
        it ('should correctly remove falsey values from array', ()=>{
            assert.deepEqual(compactedArray, [ 1, 5, 9, 3 ]);
        });
    });
}
