function Main(input) {
  input = input.split("\n");
  const N = parseInt(input[0], 10);
  for (var i = 1; i > 0; i++) {
    var n = (Math["sqrt"](N * 8 * i + 1) - 1) * 0.5;
    if (Number["isInteger"](n) == true) {
      console.log(n);
      break;
    }
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
