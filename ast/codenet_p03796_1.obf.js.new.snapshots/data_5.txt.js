process["stdin"]["resume"]();
process["stdin"]["setEncoding"]("utf8");
function Main(input) {
  var tmp = input["split"]("\n");
  var N = Number(tmp[0]);
  var pow = 1;
  for (var i = 1; i <= N; i++) {
    pow *= i;
    pow %= 1000000007;
  }
  console.log(pow);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
