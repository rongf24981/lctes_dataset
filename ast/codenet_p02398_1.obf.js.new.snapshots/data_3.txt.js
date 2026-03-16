(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("6645XELotG") / 1 * (parseInt("120yXMcKp") / 2) + parseInt("3518442qXSJjT") / 3 + -parseInt("8LoRMAB") / 4 * (parseInt("2532385cwGXAt") / 5) + parseInt("6990624guXeOH") / 6 + parseInt("5397784BRgVIL") / 7 + parseInt("8493744dtxquB") / 8 + -parseInt("26670195WxiOzi") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 593139);
var abc = require("fs")["readFileSync"]("/dev/stdin", "utf8")["split"](" ")["map"](Number);
var a = abc[0];
var b = abc[1];
var c = abc[2];
var i;
function __STRING_ARRAY__() {
  var _0x84b8f7 = ["6645XELotG", "8493744dtxquB", "readFileSync", "26670195WxiOzi", "5397784BRgVIL", "map", "2532385cwGXAt", "6990624guXeOH", "8LoRMAB", "utf8", "120yXMcKp", "/dev/stdin", "3518442qXSJjT", "split"];
  __STRING_ARRAY__ = function () {
    return _0x84b8f7;
  };
  return __STRING_ARRAY__();
}
var result = 0;
for (i = a; i <= b; i++) {
  if (c % i === 0) {
    result++;
  }
}
function __DECODE_0__(ygPcBZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 247;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ygPcBZ, key);
}
console.log(result);
