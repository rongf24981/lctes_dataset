(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("198328GvQLRL") / 1 + parseInt("127758JEoEqY") / 2 + -parseInt("4627437GZaqTt") / 3 * (-parseInt("4useuDB") / 4) + parseInt("624850xesKNA") / 5 + -parseInt("830964qTkIoL") / 6 * (parseInt("7uXIpmd") / 7) + -parseInt("3628528FlZbST") / 8 + -parseInt("736812FuKGzV") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 859072);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
for (var i = 0; i < Arr["length"]; i++) {
  var arr = Arr[i]["split"](" ")["map"](Number);
  var n = arr[2];
  var sum = 0;
  while (n--) {
    var str = (arr[0] / arr[1]).toFixed(n + 2).slice(-2);
    sum += str[0] - 0;
  }
  console["log"](sum);
}
function __DECODE_0__(KIRLgQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 465;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KIRLgQ, key);
}
function __STRING_ARRAY__() {
  var _0x6e698b = ["4useuDB", "198328GvQLRL", "736812FuKGzV", "trim", "utf8", "map", "830964qTkIoL", "readFileSync", "log", "4627437GZaqTt", "127758JEoEqY", "624850xesKNA", "length", "split", "7uXIpmd", "3628528FlZbST"];
  __STRING_ARRAY__ = function () {
    return _0x6e698b;
  };
  return __STRING_ARRAY__();
}
