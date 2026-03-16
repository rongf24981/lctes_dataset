(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("168992oQiikc") / 1 + -parseInt("393186HAsAYK") / 2 * (-parseInt("3DIbqWf") / 3) + parseInt("167868qrUtgD") / 4 * (parseInt("15udITTj") / 5) + -parseInt("6qXbRtO") / 6 * (-parseInt("111937rIdODo") / 7) + -parseInt("1571680BkAzFZ") / 8 + parseInt("9zkWnGz") / 9 * (-parseInt("247300HsXGbN") / 10) + -parseInt("11CrlUFl") / 11 * (-parseInt("1960512oVnAKf") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 111679);
function __DECODE_0__(UDvKwJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 140;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UDvKwJ, key);
}
function Main(s) {
  s = s.split("\n");
  var n = s[0]["split"](" ")["map"](a => +a);
  var m = n[1];
  n = n[0];
  var x;
  var a = Array(4).fill(0)["map"](a => Array(n));
  for (var i = 0; i < n; i++) {
    x = s[i + 1]["split"](" ").map(a => +a);
    a[0][i] = x[0] + x[1] + x[2];
    a[1][i] = x[0] + x[1] - x[2];
    a[2][i] = x[0] - x[1] + x[2];
    a[3][i] = -x[0] + x[1] + x[2];
  }
  var ans = 0;
  for (i = 0; i < 4; i++) {
    a[i]["sort"]((a, b) => a - b);
    var t = 0;
    for (var j = 0; j < m; j++) {
      t += a[i][j];
    }
    ans = Math["max"](ans, Math["abs"](t));
    t = 0;
    for (j = n; j > n - m;) {
      t += a[i][--j];
    }
    ans = Math.max(ans, Math["abs"](t));
  }
  console["log"](ans);
}
function __STRING_ARRAY__() {
  var _0x37b2da = ["1960512oVnAKf", "168992oQiikc", "3DIbqWf", "9zkWnGz", "11CrlUFl", "111937rIdODo", "split", "15udITTj", "map", "readFileSync", "/dev/stdin", "abs", "max", "247300HsXGbN", "393186HAsAYK", "log", "1571680BkAzFZ", "sort", "6qXbRtO", "167868qrUtgD"];
  __STRING_ARRAY__ = function () {
    return _0x37b2da;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
