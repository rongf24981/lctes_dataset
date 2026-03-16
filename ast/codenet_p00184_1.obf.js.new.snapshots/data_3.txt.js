function __DECODE_0__(RHlWhp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 442;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RHlWhp, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("61630TYflCY") / 1 + parseInt("31052TbcMAl") / 2 * (parseInt("39fahtAu") / 3) + parseInt("4vJitCw") / 4 * (-parseInt("1293815BPxILU") / 5) + -parseInt("13128QaEwFJ") / 6 * (-parseInt("406QjfbQV") / 7) + parseInt("2641888VqSAqk") / 8 + -parseInt("9981iPoefo") / 9 * (-parseInt("150RhICIz") / 10) + -parseInt("11lXpZLp") / 11 * (parseInt("1935852NWDZPC") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 193899);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n")["map"](Number);
var n = 0;
function __STRING_ARRAY__() {
  var _0x3969c8 = ["9981iPoefo", "13128QaEwFJ", "log", "utf8", "406QjfbQV", "trim", "31052TbcMAl", "length", "1293815BPxILU", "/dev/stdin", "split", "4vJitCw", "2641888VqSAqk", "1935852NWDZPC", "61630TYflCY", "39fahtAu", "11lXpZLp", "map", "readFileSync", "150RhICIz"];
  __STRING_ARRAY__ = function () {
    return _0x3969c8;
  };
  return __STRING_ARRAY__();
}
var arr = [0, 0, 0, 0, 0, 0, 0];
for (var i = 0; i < Arr["length"]; i++) {
  if (n == 0) {
    if (i != 0) {
      arr.forEach(function (v) {
        console["log"](v);
      });
    }
    if (Arr[i] == 0) {
      break;
    }
    n = Arr[i];
    arr = [0, 0, 0, 0, 0, 0, 0];
  } else {
    n--;
    if (Arr[i] >= 60) {
      arr[6]++;
    } else if (Arr[i] >= 50) {
      arr[5]++;
    } else if (Arr[i] >= 40) {
      arr[4]++;
    } else if (Arr[i] >= 30) {
      arr[3]++;
    } else if (Arr[i] >= 20) {
      arr[2]++;
    } else if (Arr[i] >= 10) {
      arr[1]++;
    } else {
      arr[0]++;
    }
  }
}
