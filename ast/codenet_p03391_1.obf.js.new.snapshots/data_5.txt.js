'use strict';

function myin() {
  return require("fs")["readFileSync"]("/dev/stdin", "utf8").trim();
}
function myout(t) {
  console["log"](t);
}
function myconv(i, no) {
  switch (no) {
    case 0:
      return i;
    case 1:
      return parseInt(i);
    case 2:
      return i.split(" ");
    case 3:
      return i["split"]("\n");
    case 4:
      return i["split"](" ")["map"](a => Number(a));
    case 5:
      return i["split"]("\n")["map"](a => Number(a));
    case 6:
      return i["split"]("");
    case 7:
      return i["split"]("")["map"](a => Number(a));
  }
}
function Main(input) {
  input = myconv(input, 3);
  input["shift"]();
  var output = 0;
  for (var i = 0; i < input["length"]; i++) {
    var A = parseInt(input[i]["split"](" ")[0]);
    var B = parseInt(input[i]["split"](" ")[1]);
    if (A < B) {
      output += B;
    }
  }
  myout(output);
}
Main(myin());
