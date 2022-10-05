function checker(input1, input2) {
  letters = (x) => x.toLowerCase().split("").sort().join(""); //split separates the characters, sort puts the characters in abc order, join creates a new string with ordered characters
  if (letters(input1) == letters(input2)) {
    //checks if the new string from input1 matches the new string of input2
    console.log("yes! ᵔᴥᵔ");
  } else {
    console.log("no! ʕ •ₒ• ʔ");
  }
}
checker("cat", "act"); //is true, will console log yes
checker("apple", "pie"); //is false, will console log no
