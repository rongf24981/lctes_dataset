function Main(input) {
  var X = parseInt(input["split"](" ")[0]);
  var Y = parseInt(input["split"](" ")[1]);
  var Z = parseInt(input["split"](" ")[2]);
  var N = 1;
  var x = 0;
  while (true) {
    x = N * Y + (N + 1) * Z;
    if (x > X) {
      break;
    }
    N++;
  }
  console["log"](--N);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
