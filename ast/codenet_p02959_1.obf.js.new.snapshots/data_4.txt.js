function Main(input) {
  input = input["split"]("\n");
  var n = parseInt(input[0], 10);
  var a = input[1]["split"](" ");
  a = a.map(str => parseInt(str, 10));
  var b = input[2].split(" ");
  b = b["map"](str => parseInt(str, 10));
  var count = 0;
  for (var i = 0; i < n; i++) {
    var atarget = a[i] + a[i + 1];
    var rest = atarget - b[i];
    if (rest < 0) {
      count += atarget;
      a[i + 1] = 0;
    } else {
      count += b[i];
      a[i + 1] = Math["min"](rest, a[i + 1]);
    }
  }
  console["log"](count);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
