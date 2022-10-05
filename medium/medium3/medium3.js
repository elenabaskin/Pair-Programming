// function for greatest common divisor
function gcd(x, y) {
  if (typeof x !== "number" || typeof y !== "number") return false;
  x = Math.abs(x); //returns the absolute value of a number
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(gcd(46, 88));
console.log(gcd(10, 32));
