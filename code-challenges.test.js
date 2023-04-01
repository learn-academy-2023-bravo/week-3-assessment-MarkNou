// // // ASSESSMENT 3: Coding Practical Questions with Jest

// const { array } = require("yargs")

// // // const { array } = require("yargs")

// // // const { describe } = require("yargs")

// // // Please read all questions thoroughly
// // // Pseudo coding is REQUIRED
// // // If you get stuck, please leave comments to help us understand your thought process

// // // Use test driven development to complete the following questions
// // // Add appropriate dependencies: $ yarn add jest

// // // Reminder: The test will call your function
// // // Run the file with the following command: $ yarn jest

// // // --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// // // a) Create a test with expect statements for each of the variables provided.

// // describe("fibSeq", () => {
// //   it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. If number is not greater than 2, return 'error'", () => {
// //     expect(fibSeq(6)).toEqual([1, 1, 2, 3, 5, 8])
// //     expect(fibSeq(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
// //   })
// // })

// // //Jest test output:  
// // // FAIL  ./code-challenges.test.js
// // //   fibSeq
// // //   ✕ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)

// // // ● fibSeq › takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence

// // const fibLength1 = 6
// // // Expected output: [1, 1, 2, 3, 5, 8]

// // const fibLength2 = 10
// // // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// // //Pseudo Code:
// // //Create a function called fibSeq (short for Fibonacci Sequence)
// // //Create a parameter called arrayLength that will hold the length of an array, which will be a number.
// // //Create a variable called 'fib' that will hold the array of numbers. It will start off having [1, 1] since the array needs to be greater than two numbers. Also the fibonacci sequence always starts off with 1 and 1.
// // //Create a for loop. Since we already have the first two indexes in our fib array, we start the loop at index 2 (the third value). We set the length of the array to our parameter arrayLength. We then use i++ to itertate over value at an increment of 1.
// // //Using the arrayLength, we iterate through that many times. fib[i-1] + fib[i-2] will add the previous and next indexs together into an array.
// // //Console.log the function with a parameter and return an array with the fibonacci sequence.

 const fibSeq = (arrayLength) => {
  const fib = [1, 1];
  for (let i = 2; i < arrayLength; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};



console.log(fibSeq(fibLength2)) //outcome: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log(fibSeq(fibLength1)) //outcome: [1, 1, 2, 3, 5, 8]//

// // //Jest Test:
// // // PASS  ./code-challenges.test.js
// // // fibSeq
// // //   ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. If number is not greater than 2, return 'error' (8 ms)

// // // Test Suites: 1 passed, 1 total
// // // Tests:       1 passed, 1 total
// // // Snapshots:   0 total
// // // Time:        0.858 s
  


// // // b) Create the function that makes the test pass.

// // // --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// // // Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// // // a) Create a test with expect statements for each of the variables provided.

describe("objectSorter", () => {
  it("takes in an object and returns an array of the values sorted from least to greatest", () => {
    expect(
      objectSorter({
        sunday: 90,
        monday: 30,
        tuesday: 20,
        wednesday: 15,
        thursday: 30,
        friday: 15,
        saturday: 60,
      })
    ).toEqual([15, 15, 20, 30, 30, 60, 90]);
    expect(
      objectSorter({
        sunday: 100,
        monday: 10,
        tuesday: 45,
        wednesday: 60,
        thursday: 20,
        friday: 15,
        saturday: 65,
      })
    ).toEqual([10, 15, 20, 45, 60, 65, 100]);
  });
});

// //Jest Test:
// // FAIL  ./code-challenges.test.js

// // objectSorter
// //   ✕ takes in an object and returns an array of the values sorted from least to greatest (2 ms)

// // ● objectSorter › takes in an object and returns an array of the values sorted from least to greatest

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// // b) Create the function that makes the test pass.



// // Create a function called objectSorter that takes in an object and returns an array of the values sorted from least to greatest
// // Create a parameter called 'data' as a placeholder for the object we will sort. I used 'data' instead of 'object' since the method we will be using already contains the word 'object'. This will prevent any confusion
// // Create a variable called 'sorted' to hold the logic
// // Use 'Object.value()' to extract the values from the keys in an object
// // Chain .sort() at the end to sort the values from least to greatest
// // Return the variable 'sorted'
// // Console.log 'objectSorter' to get the sorted values in an array



const objectSorter = (data) => {
  let sorted = Object.values(data).sort((a,b)=>a-b)
  return sorted
}
console.log(objectSorter(studyMinutesWeek1)) //outcome: [15, 15, 20, 30, 30, 60, 90]
console.log(objectSorter(studyMinutesWeek2)) //outcome: [10, 15, 20, 45, 60, 65, 100]

// Jest Test:

// PASS  ./code-challenges.test.js
// objectSorter
//   ✓ takes in an object and returns an array of the values sorted from least to greatest (5 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.895 s


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("arraySum", () => {
  it("Takes in an array and returns an array of the same length and the accumulating sum", () => {
    expect(arraySum([100, -17, -23, -9])).toEqual([100, 83, 60, 51]);
    expect(arraySum([250, -89, 100, -96])).toEqual([250, 161, 261, 165]);
    expect(arraySum([])).toEqual([]);
  });
});

//Jest Test
//

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

const arraySum = (array) => {
  let sum = 0;
  return array.map((value) => (sum += value));
};

console.log(arraySum(accountTransactions1));
console.log(arraySum(accountTransactions2));
console.log(arraySum(accountTransactions3));

//Jest Test:
// PASS  ./code-challenges.test.js
// arraySum
//   ✓ Takes in an array and returns an array of the same length and the accumulating sum (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.676 s, estimated 1 s

