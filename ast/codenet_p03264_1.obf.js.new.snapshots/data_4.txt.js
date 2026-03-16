function Main(input) {
  var k = parseInt(input["split"]("\n")[0], 10);
  var a = 0;
  var b = 0;
  for (i = 1; i <= k; i++) {
    if (i % 2 == 0) {
      a++;
    } else {
      b++;
    }
  }
  console["log"](a * b);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
