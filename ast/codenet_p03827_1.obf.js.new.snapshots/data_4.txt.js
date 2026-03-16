function Main(input) {
  input = input["split"]("\n");
  var num = input[0];
  var character = input[1];
  var max = 0;
  var x = 0;
  for (var i = 0; i < character.length; i++) {
    if (character[i] === "I") {
      x++;
    } else {
      x--;
    }
    if (max < x) {
      max = x;
    }
  }
  console["log"](max);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
