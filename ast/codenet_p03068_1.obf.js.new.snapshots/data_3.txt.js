(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("7GOlSxh") / 1 * (parseInt("113638NSzJiK") / 2) + -parseInt("505539QDDhqN") / 3 + parseInt("1129892niOYlv") / 4 + -parseInt("315CHorbF") / 5 * (-parseInt("87480fNLzFf") / 6) + parseInt("2248386iYxkJK") / 7 + parseInt("4461976nxiGhi") / 8 + -parseInt("639RbVYrh") / 9 * (parseInt("259380eWzAjY") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 467580);
var lines = [];
var readline = require("readline");
function __STRING_ARRAY__() {
  var _0x3f9f80 = ["split", "113638NSzJiK", "7GOlSxh", "line", "push", "readline", "1129892niOYlv", "close", "259380eWzAjY", "505539QDDhqN", "2248386iYxkJK", "4461976nxiGhi", "639RbVYrh", "stdin", "87480fNLzFf", "315CHorbF"];
  __STRING_ARRAY__ = function () {
    return _0x3f9f80;
  };
  return __STRING_ARRAY__();
}
var rl = readline.createInterface({
  input: process["stdin"],
  output: process.stdout
});
function __DECODE_0__(SkgLqZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 327;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SkgLqZ, key);
}
rl.on("line", function (x) {
  lines["push"](x);
});
rl.on("close", function () {
  var N = Number(lines[0]);
  var S = lines[1]["split"]("");
  var K = Number(lines[2]);
  for (var i = 0; i < N; i++) {
    if (S[K - 1] !== S[i]) {
      S[i] = "*";
    }
  }
  var result = "";
  for (var i = 0; i < N; i++) {
    result = result + S[i];
  }
  console.log(result);
});
