function Main(input) {
  input = input["split"](" ");
  var a = parseInt(input[0], 10);
  var b = parseInt(input[1], 10);
  var t = parseInt(input[2], 10);
  console["log"]("%d", Math["floor"]((t + 0.5) / a) * b);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
