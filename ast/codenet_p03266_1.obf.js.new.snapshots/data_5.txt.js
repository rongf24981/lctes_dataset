var lines = [];
var readline = require("readline");
var rl = readline["createInterface"]({
  input: process["stdin"],
  output: process["stdout"]
});
rl.on("line", function (x) {
  lines.push(x);
});
rl.on("close", function () {
  var N = Number(lines[0]["split"](" ")[0]);
  var K = Number(lines[0].split(" ")[1]);
  var ans = 0;
  for (var i = 1; i <= K; i++) {
    if (i * 2 % K === 0) {
      if (Math["floor"]((N - i) / K) >= 1) {
        ans += Math.pow(Math.floor((N - i) / K) + 1, 3);
      } else {
        ans++;
      }
    }
  }
  console["log"](ans);
});
