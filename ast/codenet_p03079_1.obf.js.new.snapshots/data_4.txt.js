function Main(input) {
  var str = input;
  var tmp = str["split"](" ")["map"](Number);
  if (tmp[0] == tmp[1] && tmp[1] == tmp[2]) {
    console.log("Yes");
  } else {
    console["log"]("No");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
