(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1351016NWAyqD") / 1 + -parseInt("2WxiSOS") / 2 * (parseInt("1212132DPzWkE") / 3) + -parseInt("7164OepKmV") / 4 * (parseInt("3510oCqBst") / 5) + -parseInt("1063230hlSILT") / 6 + -parseInt("6455197ZDictd") / 7 * (parseInt("8fQlrXa") / 8) + parseInt("143199JiTkyC") / 9 * (parseInt("670IxsslP") / 10) + parseInt("44BkgppR") / 11 * (parseInt("3312060EUbVQT") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 760371);
function __STRING_ARRAY__() {
  var _0x115cc2 = ["replace", "8fQlrXa", "1212132DPzWkE", "3312060EUbVQT", "670IxsslP", "6455197ZDictd", "forEach", "split", "2WxiSOS", "3510oCqBst", "readFileSync", "/dev/stdin", "1351016NWAyqD", "1063230hlSILT", "143199JiTkyC", "44BkgppR", "7164OepKmV"];
  __STRING_ARRAY__ = function () {
    return _0x115cc2;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(IcPwkt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 271;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IcPwkt, key);
}
var Arr = input.trim()["split"]("\n");
Arr["forEach"](function (v) {
  v = v["replace"](/@(\d)(.)/g, function (s, s1, s2) {
    return Array(s1 - 0 + 1).join(s2);
  });
  console.log(v);
});
