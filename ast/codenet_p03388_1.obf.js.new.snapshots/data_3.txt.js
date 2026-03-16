function __DECODE_0__(CuDlgy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 213;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CuDlgy, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("44RTIulF") / 1 * (parseInt("4234ZnSowD") / 2) + parseInt("51dSrmVX") / 3 * (-parseInt("23884qYkBkz") / 4) + parseInt("380zcTxBC") / 5 * (parseInt("9966HGBSpN") / 6) + parseInt("56vLHkkn") / 7 * (-parseInt("316696aYHpiy") / 8) + -parseInt("1604322DrBpxI") / 9 + -parseInt("2040680VbbQub") / 10 * (-parseInt("11UoINag") / 11) + parseInt("6289044VRSrTi") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 164782);
function __STRING_ARRAY__() {
  var _0x58832f = ["44RTIulF", "316696aYHpiy", "11UoINag", "56vLHkkn", "ceil", "readFileSync", "51dSrmVX", "split", "380zcTxBC", "/dev/stdin", "log", "4234ZnSowD", "2040680VbbQub", "9966HGBSpN", "6289044VRSrTi", "1604322DrBpxI", "max", "utf8", "map", "sqrt", "23884qYkBkz"];
  __STRING_ARRAY__ = function () {
    return _0x58832f;
  };
  return __STRING_ARRAY__();
}
function Main(s) {
  s = s["split"]("\n");
  const q = +s[0];
  for (var i = 0; i < q; i++) {
    var a = s[i + 1].split(" ")["map"](a => +a);
    var b = Math["max"](a[0], a[1]);
    a = Math.min(a[0], a[1]);
    var c = Math["ceil"](Math["sqrt"](a * b));
    var ans = (a - 1) * 2;
    if (a < b - 1) {
      ans++;
    }
    for (var j = a + 1; j < c; j++) {
      if (Math.floor(a / j * b) === j) {
        ans++;
      } else {
        ans += 2;
      }
    }
    console["log"](ans);
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
