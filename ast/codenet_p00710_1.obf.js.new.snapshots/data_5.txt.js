(function (input) {
  var inputs = input["replace"](/\r/g, "")["split"]("\n");
  while (true) {
    var cards = [];
    var line = inputs.shift()["split"](" ");
    var n = parseInt(line[0]);
    var r = parseInt(line[1]);
    if (n === 0 && r === 0) {
      break;
    }
    for (var i = n; i > 0; i--) {
      cards["push"](i);
    }
    while (r--) {
      var line = inputs["shift"]().split(" ");
      var p = parseInt(line[0]) - 1;
      var c = parseInt(line[1]);
      var tmp;
      tmp = cards.splice(p, c);
      cards = tmp["concat"](cards);
    }
    console["log"](cards["shift"]());
  }
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
