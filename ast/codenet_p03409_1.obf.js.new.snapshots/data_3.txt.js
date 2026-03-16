function __DECODE_0__(rfXApk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 207;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rfXApk, key);
}
function __STRING_ARRAY__() {
  var _0x4ecaf8 = ["split", "trim", "3882393RNjOqg", "map", "61836UVnPdk", "21616727ohARfA", "log", "readFileSync", "545ojqlzD", "128CDXvTS", "utf8", "/dev/stdin", "sort", "11410430yaQVYv", "2750328whiGXc", "18022ZMrltu", "splice", "4DvrDUw", "2851896vWqyjq", "8kinrAj"];
  __STRING_ARRAY__ = function () {
    return _0x4ecaf8;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("18022ZMrltu") / 1 * (-parseInt("128CDXvTS") / 2) + -parseInt("2851896vWqyjq") / 3 * (-parseInt("4DvrDUw") / 4) + parseInt("545ojqlzD") / 5 * (parseInt("61836UVnPdk") / 6) + parseInt("2750328whiGXc") / 7 + parseInt("8kinrAj") / 8 * (parseInt("3882393RNjOqg") / 9) + parseInt("11410430yaQVYv") / 10 + -parseInt("21616727ohARfA") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 920745);
function Main(s) {
  s = s["split"]("\n");
  var n = parseInt(s[0]);
  var a = Array(n);
  var c = Array(n);
  for (var i = 0; i < n; i++) {
    a[i] = s[i + 1]["split"](" ")["map"](a => parseInt(a));
  }
  for (var i = 0; i < n; i++) {
    c[i] = s[i + n + 1]["split"](" ")["map"](a => parseInt(a));
  }
  a = a["sort"]((a, b) => a[1] - b[1]);
  a = a["sort"]((a, b) => a[0] - b[0]);
  c = c["sort"]((a, b) => a[0] - b[0]);
  c = c["sort"]((a, b) => b[1] - a[1]);
  var ans = 0;
  for (i = n - 1; i >= 0; i--) {
    for (var j = c.length - 1; j >= 0; j--) {
      if (a[i][0] < c[j][0] && a[i][1] < c[j][1]) {
        ans++;
        c["splice"](j, 1);
        break;
      }
    }
  }
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
