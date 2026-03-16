process.stdin.resume();
process["stdin"]["setEncoding"]("utf8");
function Main(input) {
  var tmp = input["split"]("\n");
  var line0 = tmp[0].split(" ");
  var line1 = tmp[1]["split"](" ");
  var n = Number(line0[0]);
  var k = Number(line1[0]);
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    if (ans < k) {
      ans *= 2;
    } else {
      ans += k;
    }
  }
  console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
