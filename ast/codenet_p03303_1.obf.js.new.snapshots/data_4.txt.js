function myout(text) {
  console["log"](text);
}
function Main(input) {
  input = input["split"]("\n");
  var S = input[0];
  var w = parseInt(input[1]);
  if (w == 1) {
    myout(S);
    return;
  }
  S = S["split"]("");
  var list = [];
  while (S["length"] != 0) {
    var tmp = "";
    for (var i = 0; i < w; i++) {
      if (S["length"] != 0) {
        tmp += S["shift"]();
      }
    }
    list.push(tmp);
  }
  var output = "";
  for (var i = 0; i < list["length"]; i++) {
    output += list[i]["slice"](0, 1);
  }
  myout(output);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
