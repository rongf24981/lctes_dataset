function Main(input) {
  input = input.split("\n");
  N = parseInt(input[0]["split"](" "));
  var result = 0;
  for (var i = 1; i < N; i++) {
    result += Math["floor"]((N - 1) / i);
  }
  console.log("%d", result);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
