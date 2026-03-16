function myout(text) {
  console["log"](text);
}
function Main(input) {
  input = input["trim"]()["split"]("\n");
  var tmpInput = JSON["parse"](JSON["stringify"](input[1]));
  var left = 0;
  var right = 0;
  while (tmpInput["indexOf"]("()") != -1) {
    tmpInput = tmpInput.replace("()", "");
  }
  for (var i = 0; i < tmpInput["length"]; i++) {
    var tmp = tmpInput["slice"](i, i + 1);
    if (tmp == "(") {
      left++;
    } else if (tmp == ")") {
      right++;
    }
  }
  for (var i = 0; i < right; i++) {
    input[1] = "(" + input[1];
  }
  for (var i = 0; i < left; i++) {
    input[1] += ")";
  }
  myout(input[1]);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8")["trim"]());
