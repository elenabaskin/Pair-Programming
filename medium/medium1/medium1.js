// let x = prompt("Enter a letter");
// console.log(x);
// function vowelChecker(x) {
//   var firstChar = x.toLowerCase();
//   charAt(0);
//   if (
//     firstChar === "a" || // ||  means "or"
//     firstChar === "e" ||
//     firstChar === "i" ||
//     firstChar === "o" ||
//     firstChar === "u"
//   ) {
//     console.log("First letter is a vowel 😎");
//   } else {
//     console.log("First letter is not a vowel 😔");
//   }
// }

// var findVowel = function (letter) {
//   var vowels = ["a", "e", "i", "o", "u"];

//   for (var i in vowels) {
//     if (letter === i) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// };

// findVowel("e");

function vowelChecker(x) {
  var firstChar = x.toLowerCase().charAt(0); //takes first character of input x to check if it starts w/ a, e, i, o, or u
  if (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
  ) {
    console.log("The first letter is a vowel ヽ( ▼∀▼)ﾉ");
  } else {
    console.log("First letter is NOT a vowel. (⋟﹏⋞)");
  }
}

vowelChecker("ask"); //true
vowelChecker("nah"); //false
