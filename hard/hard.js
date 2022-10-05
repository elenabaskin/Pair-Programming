brackets = (string) => {
  const brackets = ["{}", "[]", "()"]; //Adding the different type of brackets into an array
  brackets.forEach(
    (
      x //calls function for each bracket
    ) =>
      x === `${string.slice(0, 1)}${string.slice(-1)}` ? console.log(true) : 0
  ); // Shortens or slices the string
};

brackets("{Hello Osiel}");
