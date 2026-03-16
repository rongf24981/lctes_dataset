function __DECODE_0__(MgzacI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 114;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(MgzacI, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("646394YpsNOH") / 1 * (parseInt("2PczJmY") / 2) + -parseInt("26526wnjzWp") / 3 * (-parseInt("244kfdymK") / 4) + parseInt("300860TrMODH") / 5 + -parseInt("5115600nXVTiW") / 6 + parseInt("3366993PEXIZy") / 7 + parseInt("1759000TibRqY") / 8 + parseInt("10474785IxJLJu") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 965279);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
while (true) {
  var [n, m] = arr["shift"]()["split"](" ").map(Number);
  if (n == 0 && m == 0) {
    break;
  }
  var h = [];
  for (var i = 0; i < n; i++) {
    h[i] = 0;
  }
  for (var i = 0; i < m; i++) {
    var p = arr.shift()["split"](" ")["map"](Number);
    h = p["map"]((v, i) => h[i] + v);
  }
  console.log(Math["max"](...h));
}
function __STRING_ARRAY__() {
  var _0x25e055 = ["shift", "244kfdymK", "2PczJmY", "readFileSync", "trim", "5115600nXVTiW", "/dev/stdin", "split", "1759000TibRqY", "max", "map", "300860TrMODH", "3366993PEXIZy", "utf8", "26526wnjzWp", "646394YpsNOH", "10474785IxJLJu"];
  __STRING_ARRAY__ = function () {
    return _0x25e055;
  };
  return __STRING_ARRAY__();
}
