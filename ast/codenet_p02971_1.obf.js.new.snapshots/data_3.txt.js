'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("23MTDsOf") / 1 * (parseInt("144130AHqnyU") / 2) + -parseInt("3934635UHyUEZ") / 3 + parseInt("2708gSJJNW") / 4 * (parseInt("2005lYHzki") / 5) + parseInt("1360170lcgDEF") / 6 + parseInt("1616797yqGsKH") / 7 * (-parseInt("56YDILBs") / 8) + parseInt("9215163gKKIOy") / 9 * (-parseInt("10RNOsZn") / 10) + parseInt("29947665xiTBeE") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 925933);
function __STRING_ARRAY__() {
  var _0x5bdd27 = ["slice", "utf8", "max", "23MTDsOf", "144130AHqnyU", "push", "readFileSync", "1360170lcgDEF", "/dev/stdin", "apply", "29947665xiTBeE", "1616797yqGsKH", "2005lYHzki", "split", "9215163gKKIOy", "log", "splice", "length", "56YDILBs", "3934635UHyUEZ", "2708gSJJNW", "10RNOsZn"];
  __STRING_ARRAY__ = function () {
    return _0x5bdd27;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(rXmdFe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 157;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rXmdFe, key);
}
function main(arg) {
  var input = arg["split"]("\n");
  var retu = input[0];
  var kazu = [];
  for (var i = 1; retu >= i; i++) {
    kazu["push"](input[i]);
  }
  for (var x = 0, len = kazu.length; x < len; ++x) {
    var kazu2 = kazu["slice"](0, kazu["length"]);
    kazu2["splice"](x, 1);
    console["log"](Math["max"]["apply"](null, kazu2));
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
