function __DECODE_0__(SGCHNH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 388;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SGCHNH, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("161939stTFwh") / 1 + -parseInt("424wZRJrQ") / 2 * (parseInt("7203DPItUi") / 3) + parseInt("277568TjpvvI") / 4 * (-parseInt("15lCFkNv") / 5) + -parseInt("3340908hYGaCM") / 6 + parseInt("14KvxCHr") / 7 * (parseInt("1670152YLwWAB") / 8) + parseInt("4663035WBEODp") / 9 + parseInt("5112600NuDSuf") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 334846);
function __STRING_ARRAY__() {
  var _0x28553a = ["15lCFkNv", "5112600NuDSuf", "3340908hYGaCM", "split", "/dev/stdin", "utf8", "1670152YLwWAB", "424wZRJrQ", "4663035WBEODp", "readFileSync", "14KvxCHr", "abs", "161939stTFwh", "map", "log", "7203DPItUi", "277568TjpvvI"];
  __STRING_ARRAY__ = function () {
    return _0x28553a;
  };
  return __STRING_ARRAY__();
}
function Main(s) {
  var s = s["split"]("\n");
  var n = parseInt(s[0], 10);
  var a = s[1]["split"](" ")["map"](e => parseInt(e, 10));
  var acc = 0;
  var cnt = 0;
  var arr = [];
  for (var i = 0; i < n; i++) {
    acc += a[i];
    if (i === 0) {
      if (acc === 0) {
        if (a[i + 1] >= 0) {
          acc -= a[i + 1] - 1;
          if (acc === 0) {
            acc--;
          }
          cnt += Math["abs"](acc);
        } else {
          acc += Math["abs"](a[i + 1]) - 1;
          if (acc === 0) {
            acc++;
          }
          cnt += acc;
        }
      }
    } else if (arr[i - 1] > 0) {
      if (acc >= 0) {
        cnt += acc + 1;
        acc -= acc + 1;
      }
    } else if (acc <= 0) {
      cnt += Math.abs(acc) + 1;
      acc += Math["abs"](acc) + 1;
    }
    arr.push(acc);
  }
  console["log"](cnt);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
