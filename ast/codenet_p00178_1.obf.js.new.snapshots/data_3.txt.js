function __STRING_ARRAY__() {
  var _0x1a8216 = ["2375TpxIau", "length", "438eWndBc", "readFileSync", "3189164CONdgU", "split", "50994CCyMTM", "339508kDmSGM", "1eEHHQy", "11111", "/dev/stdin", "740UKRpnM", "replace", "1875410pKCtVn", "shift", "map", "log", "501728yzmlDB", "trim", "max", "14eQZFuN", "3942UIFjnk"];
  __STRING_ARRAY__ = function () {
    return _0x1a8216;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(nWQYIk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 359;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nWQYIk, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1eEHHQy") / 1 * (-parseInt("339508kDmSGM") / 2) + -parseInt("3942UIFjnk") / 3 * (-parseInt("740UKRpnM") / 4) + -parseInt("2375TpxIau") / 5 * (-parseInt("438eWndBc") / 6) + -parseInt("14eQZFuN") / 7 * (-parseInt("501728yzmlDB") / 8) + -parseInt("50994CCyMTM") / 9 + parseInt("1875410pKCtVn") / 10 + -parseInt("3189164CONdgU") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 125394);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
while (true) {
  var n = arr["shift"]() - 0;
  if (n == 0) {
    break;
  }
  var base = ["", "", "", "", ""];
  for (var i = 0; i < n; i++) {
    var [d, p, q] = arr["shift"]()["split"](" ")["map"](Number);
    q--;
    if (d == 1) {
      var max = 0;
      for (var j = 0; j < p; j++) {
        max = Math["max"](max, base[q + j]["length"]);
      }
      for (var j = 0; j < p; j++) {
        while (base[q + j]["length"] < max) {
          base[q + j] += "0";
        }
        base[q + j] += "1";
      }
    } else if (d == 2) {
      for (var j = 0; j < p; j++) {
        base[q] += "1";
      }
    }
  }
  var max = 0;
  for (var i = 0; i < 5; i++) {
    max = Math.max(max, base[i].length);
  }
  for (var i = 0; i < 5; i++) {
    while (base[i].length < max) {
      base[i] += "0";
    }
  }
  var cnt = 0;
  for (var i = 0; i < max; i++) {
    var str = base["map"](v => v[i]).join("");
    str = str["replace"]("11111", "")["replace"](/0/g, "");
    cnt += str["length"];
  }
  console["log"](cnt);
}
