function __STRING_ARRAY__() {
  var _0x1f8475 = ["15856995GSaFab", "49605pcjdMB", "map", "1603718HvIdMu", "indexOf", "630222xLMJkx", "split", "1REYwWr", "136jLhjfO", "7952670CbHWmS", "trim", "1429065YdEFLS", "30yKzmoz", "readFileSync", "265090WwliLm", "136azPejk", "length", "every", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x1f8475;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1REYwWr") / 1 * (parseInt("1603718HvIdMu") / 2) + parseInt("49605pcjdMB") / 3 * (parseInt("136azPejk") / 4) + parseInt("30yKzmoz") / 5 * (-parseInt("630222xLMJkx") / 6) + -parseInt("265090WwliLm") / 7 * (-parseInt("136jLhjfO") / 8) + -parseInt("1429065YdEFLS") / 9 + parseInt("7952670CbHWmS") / 10 + -parseInt("15856995GSaFab") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 572554);
function __DECODE_0__(FdThbK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 273;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FdThbK, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var x = input["trim"]()["split"](" ")["map"](Number);
var cnt = 0;
for (var a = 1; a <= 9; a++) {
  for (var b = 1; b <= 9; b++) {
    for (var c = 1; c <= 9; c++) {
      for (var d = 1; d <= 8; d++) {
        for (var e = 1; e <= 9; e++) {
          for (var f = 1; f <= 9; f++) {
            var z = (a + c + f + (b + e) * 10 + d * 100 + "")["split"]("")["map"](Number);
            if (z["length"] != 3) {
              continue;
            }
            z = [a, b, c, d, e, f].concat(z);
            var flag = z["every"](function (v, i) {
              return (x[i] == v || x[i] == -1) && z["indexOf"](i + 1) >= 0;
            });
            if (flag) {
              cnt++;
            }
          }
        }
      }
    }
  }
}
console.log(cnt);
