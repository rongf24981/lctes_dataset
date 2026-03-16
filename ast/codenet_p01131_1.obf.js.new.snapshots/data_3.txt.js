(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("103DPgeJq") / 1 * (parseInt("8732avegui") / 2) + -parseInt("1716807mdTjxz") / 3 * (-parseInt("4bbRYhX") / 4) + parseInt("8644420BSklMC") / 5 + -parseInt("8575248pRdwHA") / 6 + parseInt("9574271HQQPGW") / 7 + parseInt("8nANJcS") / 8 * (-parseInt("13085001TbGonT") / 9) + -parseInt("2397540YtlrbS") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 995753);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
var AL = Arr["shift"]();
var abc = ["", ".,!? ", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
abc = abc["map"](function (v) {
  return v.split("");
});
function __DECODE_0__(xQbqYr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 133;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xQbqYr, key);
}
for (var i = 0; i < AL; i++) {
  var arr = Arr[i]["split"]("").map(Number);
  var str = "";
  var a = "";
  var n = -1;
  arr["forEach"](function (v) {
    if (v > 0) {
      n++;
      a = abc[v][n % abc[v]["length"]];
    } else {
      str += a;
      n = -1;
      a = "";
    }
  });
  console["log"](str);
}
function __STRING_ARRAY__() {
  var _0x2712c2 = ["8nANJcS", "2397540YtlrbS", "4bbRYhX", "1716807mdTjxz", "length", "forEach", "8732avegui", "/dev/stdin", "readFileSync", "8644420BSklMC", "map", "8575248pRdwHA", "trim", "split", "wxyz", "shift", "pqrs", "103DPgeJq", ".,!? ", "13085001TbGonT", "9574271HQQPGW", "log"];
  __STRING_ARRAY__ = function () {
    return _0x2712c2;
  };
  return __STRING_ARRAY__();
}
