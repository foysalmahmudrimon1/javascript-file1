function cubeNumber(number) {
  if (typeof number !== "number") {
    return "please provide a number";
  } else {
    const result = number * number * number;
    return result;
  }
}
console.log(cubeNumber(3));
