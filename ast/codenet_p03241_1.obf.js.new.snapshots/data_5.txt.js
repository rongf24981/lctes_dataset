function Main(input) {
  input = input["split"]("\n");
  tmp = input[0]["split"](" ");
  var N = parseInt(tmp[0], 10);
  var M = parseInt(tmp[1], 10);
  var divisors = divisor(M);
  var max = 0;
  for (var i = 0; i < divisors["length"]; i++) {
    var d = divisors[i];
    if (M / d >= N) {
      max = Math["max"](max, d);
    }
  }
  console["log"]("%d", max);
}
function divisor(n) {
  var res = [];
  for (var i = 1; i * i <= n; i++) {
    if (n % i == 0) {
      res["push"](i);
      if (n / i != i) {
        res["push"](n / i);
      }
    }
  }
  return res;
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
