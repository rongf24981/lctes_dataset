function Main(input) {
  var a;
  var b;
  var c;
  a = Number(input["split"]("\n")[0].split(" ")[0]);
  b = Number(input["split"]("\n")[0]["split"](" ")[1]);
  c = Number(input["split"]("\n")[0]["split"](" ")[2]);
  console.log(c - (a - b) > 0 ? c - (a - b) : 0);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
