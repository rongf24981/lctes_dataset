(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1099840MMWhux") / 1 + -parseInt("743398kjiSxk") / 2 + -parseInt("1612584TesOXt") / 3 + -parseInt("2828676IYcjNi") / 4 + parseInt("65GVZpNO") / 5 * (parseInt("26382MgyKxJ") / 6) + parseInt("5173gxuJLc") / 7 * (-parseInt("8744bNMKVJ") / 8) + parseInt("17043300QFHaKH") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 626578);
function Main(s) {
  s = s["split"]("\n");
  var n = +s[0];
  for (var i = 0; i < n; i++) {
    s[i] = s[i + 1]["split"](" ")["map"](a => +a);
  }
  var ans = 0;
  for (i = n - 1; i >= 0; i--) {
    var x = (s[i][0] + ans) % s[i][1];
    if (x) {
      ans += s[i][1] - x;
    }
  }
  console["log"](ans);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(imJBvK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 243;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(imJBvK, key);
}
function __STRING_ARRAY__() {
  var _0x45873d = ["17043300QFHaKH", "65GVZpNO", "26382MgyKxJ", "743398kjiSxk", "1099840MMWhux", "/dev/stdin", "utf8", "map", "1612584TesOXt", "5173gxuJLc", "split", "2828676IYcjNi", "log", "readFileSync", "8744bNMKVJ"];
  __STRING_ARRAY__ = function () {
    return _0x45873d;
  };
  return __STRING_ARRAY__();
}
