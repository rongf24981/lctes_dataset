function Main(input) {
  input = input["split"]("\n");
  var X = input[0] - 0;
  console["log"](Math["ceil"]((Math.abs(X) * 2 + 1 / 4) ** (1 / 2) - 1 / 2));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
