let output = (num) => {
  isPrime = (num) => {
    for (var i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return true;
  };
  let arr = [2];
  for (var i = 3; i < num; i += 2)
    if (isPrime(i)) {
      arr.push(i);
    } else {
      0;
    }
  console.log(arr);
};
output(55); //creates an array with prime numbers between 2 and 55

// attempt one
// function isPrime(num) {
//   let numbers = [];
//   numbers.push(num[i]);
//   if (num < 2) return false;
//   for (var i = 2; i < num.length; i++) {
//     if (num % i == 0) return false;
//   }
//   return [i];
// }
// // console.log(isPrime([2, 3, 55, 20, 100]));

// for (var i = 0; i < 20; i++) {
//   if (isPrime(i)) console.log(i);
// }

// attempt two
// function checkPrime(number) {
//   if (number <= 1) {
//     return false;
//   } else {
//     for (let i = 2; i < number; i++) {
//       if (number % i == 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }
