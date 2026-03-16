function __STRING_ARRAY__() {
  var _0x1bac14 = ["trim", "map", "log", "length", "utf8", "2676695roSwiD", "2231428azBILq", "splice", "/dev/stdin", "2956DJWZMF", "21004320IeqVCQ", "shift", "readFileSync", "548808xrmRVV", "6DTjGAD", "88OgpEbq", "463167GtiXOM", "2354240hodzyO", "457ZnLFto"];
  __STRING_ARRAY__ = function () {
    return _0x1bac14;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("457ZnLFto") / 1 * (parseInt("2956DJWZMF") / 2) + parseInt("548808xrmRVV") / 3 + -parseInt("2231428azBILq") / 4 + parseInt("2354240hodzyO") / 5 + parseInt("6DTjGAD") / 6 * (-parseInt("2676695roSwiD") / 7) + parseInt("88OgpEbq") / 8 * (-parseInt("463167GtiXOM") / 9) + parseInt("21004320IeqVCQ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 572435);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(pYMKNZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 283;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pYMKNZ, key);
}
var arr = input["trim"]().split("\n");
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var Arr = arr["splice"](0, n);
  Arr = Arr["map"](function (v) {
    return v.length;
  });
  for (var i = 0; i < Arr["length"]; i++) {
    var good = [5, 7, 5, 7, 7];
    var sum = 0;
    for (var j = i; j < Arr["length"]; j++) {
      if (good["length"] == 0) {
        break;
      }
      sum += Arr[j];
      if (good[0] > sum) {
        continue;
      } else if (good[0] < sum) {
        break;
      } else if (good[0] == sum) {
        good["shift"]();
        sum = 0;
      }
    }
    if (good["length"] == 0) {
      console["log"](i + 1);
      break;
    }
  }
}
