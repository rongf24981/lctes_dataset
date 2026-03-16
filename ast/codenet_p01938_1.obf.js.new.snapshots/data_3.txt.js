function __STRING_ARRAY__() {
  var _0xe092c6 = ["2IGpwBs", "/dev/stdin", "2373909wSDGhS", "93359HQEicD", "forEach", "9pTxgRs", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "3283844cLdClc", "log", "readFileSync", "split", "14738170mFacIp", "indexOf", "249459XaxOzf", "1285765UWLZGT", "138zIBElw", "3082904WLynqB", "map"];
  __STRING_ARRAY__ = function () {
    return _0xe092c6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("249459XaxOzf") / 1 + -parseInt("2IGpwBs") / 2 * (parseInt("2373909wSDGhS") / 3) + -parseInt("3283844cLdClc") / 4 + parseInt("1285765UWLZGT") / 5 + parseInt("138zIBElw") / 6 * (-parseInt("93359HQEicD") / 7) + parseInt("3082904WLynqB") / 8 * (parseInt("9pTxgRs") / 9) + parseInt("14738170mFacIp") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 446777);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var s = input.trim().split("");
var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"["split"]("");
s = s["map"](v => abc["indexOf"](v));
var cnt = 0;
var memo = 0;
function __DECODE_0__(TJBITH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 141;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TJBITH, key);
}
s["forEach"](v => {
  if (memo >= v) {
    cnt++;
  }
  memo = v;
});
console["log"](cnt);
