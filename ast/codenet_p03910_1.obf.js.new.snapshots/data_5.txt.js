function myout(text) {
  console["log"](text);
}
function Main(input) {
  input = parseInt(input);
  var list = [];
  var output = 0;
  for (var i = 1; i <= input; i++) {
    output += i;
    list["push"](i);
    if (output == input) {
      myout(list["join"]("\n"));
      return;
    } else if (output > input) {
      var diff = output - input;
      list["splice"](list["indexOf"](diff), 1);
      myout(list["join"]("\n"));
      return;
    }
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
