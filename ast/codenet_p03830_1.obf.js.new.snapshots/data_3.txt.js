function __STRING_ARRAY__() {
  var _0x566d1d = ["utf8", "4BmYyhk", "106491pjbgdR", "1qdKwIJ", "3411480GWdCZR", "log", "5067EmRDJM", "1743182bPIiOY", "845661vPawQs", "145eCOcFh", "1208QqoVJf", "672654XJYayg", "100866BrjIcI"];
  __STRING_ARRAY__ = function () {
    return _0x566d1d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(dpFwxO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 498;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dpFwxO, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1qdKwIJ") / 1 * (-parseInt("672654XJYayg") / 2) + -parseInt("845661vPawQs") / 3 * (-parseInt("4BmYyhk") / 4) + parseInt("145eCOcFh") / 5 * (parseInt("100866BrjIcI") / 6) + parseInt("1743182bPIiOY") / 7 + parseInt("1208QqoVJf") / 8 * (-parseInt("5067EmRDJM") / 9) + -parseInt("3411480GWdCZR") / 10 + -parseInt("106491pjbgdR") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 246263);
function main(input) {
  var n = parseInt(input);
  var map = {};
  for (var i = 2; i <= n; i++) {
    var t = i;
    for (var j = 2; j * j <= t; j++) {
      if (t % j == 0) {
        var cnt = 0;
        while (t % j == 0) {
          cnt++;
          t /= j;
        }
        if (map[j]) {
          map[j] = map[j] + cnt;
        } else {
          map[j] = cnt;
        }
      }
    }
    if (t != 1) {
      if (map[t]) {
        map[t]++;
      } else {
        map[t] = 1;
      }
    }
  }
  var ans = 1;
  var mod = 1000000007;
  for (var x in map) {
    ans = ans * (map[x] + 1) % mod;
  }
  console["log"](ans);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
