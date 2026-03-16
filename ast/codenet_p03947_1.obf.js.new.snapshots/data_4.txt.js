function Main(input) {
  function counter(str, seq) {
    return str["split"](seq)["length"] - 1;
  }
  lines = input.split("\n");
  var s = lines[0];
  var bw = counter(s, "BW");
  var wb = counter(s, "WB");
  console["log"](bw + wb);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
