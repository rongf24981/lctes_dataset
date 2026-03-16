function Main(input) {
  var list = [1, 1, 1, 2, 1, 2, 1, 5, 2, 2, 1, 5, 1, 2, 1, 14, 1, 5, 1, 5, 2, 2, 1, 15, 2, 2, 5, 4, 1, 4, 1, 51];
  input = parseInt(input);
  if (input >= 1 && input <= 32) {
    console["log"](list[input - 1]);
  } else {
    console.log(0);
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
