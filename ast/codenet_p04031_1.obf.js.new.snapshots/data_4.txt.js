function myout(text) {
  console.log(text);
}
function Main(input) {
  input = input["trim"]()["split"]("\n");
  var N = parseInt(input[0]);
  var list = input[1]["split"](" ").map(a => Number(a));
  var ave;
  var sum = 0;
  var output = 0;
  for (var i = 0; i < list["length"]; i++) {
    sum += list[i];
  }
  ave = Math["round"](sum / N);
  for (var i = 0; i < list.length; i++) {
    output += Math["pow"](list[i] - ave, 2);
  }
  myout(output);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
