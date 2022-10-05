function separate(numbers) {
  //creates empty arrays
  let odd = [];
  let even = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      // number is even
      even.push(numbers[i]);
    } else {
      // number is odd
      odd.push(numbers[i]);
    }
  }
  // create an object with the odd and even array in it
  const returnObject = {
    odd,
    even,
  };
  return returnObject;
}
console.log(separate([13, 4, 22, 333, 9, 1, 53, 14]));

// attempt one
// function seperateArray(array) {
//   const odd = array.filter((num) => num % 2 === 1);

//   const even = array.filter((num) => num % 2 === 0);

//   return { odd, even };
// }
// console.log(odd);
// console.log(even);

// attempt two
// const evens = [];
// for (const num of numbers) {
//   if (num % 2 === 0) {
//     evens.push(num);
//   }
// }
// // [ 4, 22, 14 ]
// console.log(`these numbers are even: ${evens}`);
