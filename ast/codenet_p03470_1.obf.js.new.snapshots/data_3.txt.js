(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("626049sJYQtl") / 1 + -parseInt("844330stwdeD") / 2 + -parseInt("1955313Ihasof") / 3 + -parseInt("3598968SYsejc") / 4 * (parseInt("5mmaNoq") / 5) + -parseInt("404454HdZhxh") / 6 + -parseInt("7iQcXuv") / 7 * (-parseInt("1085912yRbyNH") / 8) + parseInt("16037199AIVxqT") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 502612);
var lines = [];
function __DECODE_0__(aLNdgU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 444;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aLNdgU, key);
}
var readline = require("readline");
var rl = readline["createInterface"]({
  input: process["stdin"],
  output: process["stdout"]
});
rl.on("line", function (x) {
  lines["push"](x);
});
function __STRING_ARRAY__() {
  var _0x57ad6f = ["indexOf", "stdout", "1955313Ihasof", "5mmaNoq", "626049sJYQtl", "close", "stdin", "map", "shift", "3598968SYsejc", "1085912yRbyNH", "filter", "7iQcXuv", "createInterface", "16037199AIVxqT", "844330stwdeD", "line", "readline", "404454HdZhxh", "push"];
  __STRING_ARRAY__ = function () {
    return _0x57ad6f;
  };
  return __STRING_ARRAY__();
}
rl.on("close", function () {
  var N = Number(lines[0]);
  lines["shift"]();
  var D = lines["map"](i => Number(i));
  D = D["filter"]((value, index, array) => {
    return array["indexOf"](value) === index;
  });
  console.log(D.length);
});
