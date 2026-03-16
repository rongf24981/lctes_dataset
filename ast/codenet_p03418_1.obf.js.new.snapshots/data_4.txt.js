function Main(input) {
  var line = input["split"]("\n");
  var tmp = line[0]["split"](" ");
  var maxint = Number(tmp[0]);
  var minrest = Number(tmp[1]);
  var ans = 0;
  for (var a = minrest || 1; a <= maxint; a++) {
    for (var b = minrest || 1; b <= maxint; b++) {
      if (a < b) {
        ans++;
      } else if (a % b >= minrest) {
        ans++;
      }
    }
  }
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
