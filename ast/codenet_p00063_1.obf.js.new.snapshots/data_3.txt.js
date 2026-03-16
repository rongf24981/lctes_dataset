(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1EcFUlu") / 1 * (parseInt("605732sbbvow") / 2) + parseInt("83679prUScG") / 3 * (-parseInt("200VrRMcD") / 4) + -parseInt("5881390nIFzMf") / 5 + parseInt("5033034XcNjcQ") / 6 + -parseInt("2183538yDGvwY") / 7 + parseInt("6101720PAasPo") / 8 + parseInt("19206OmuzoA") / 9 * (parseInt("7960GaWUGo") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 720222);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
function __DECODE_0__(bMYkod, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 474;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bMYkod, key);
}
var cnt = 0;
Arr["forEach"](function (v) {
  var str = v["split"]("")["reverse"]()["join"]("");
  if (str == v) {
    cnt++;
  }
});
function __STRING_ARRAY__() {
  var _0x30a1c4 = ["6101720PAasPo", "trim", "605732sbbvow", "2183538yDGvwY", "join", "readFileSync", "200VrRMcD", "5033034XcNjcQ", "utf8", "split", "5881390nIFzMf", "7960GaWUGo", "reverse", "forEach", "19206OmuzoA", "1EcFUlu", "83679prUScG"];
  __STRING_ARRAY__ = function () {
    return _0x30a1c4;
  };
  return __STRING_ARRAY__();
}
console.log(cnt);
