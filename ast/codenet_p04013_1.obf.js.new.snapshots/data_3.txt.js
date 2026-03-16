function __STRING_ARRAY__() {
  var _0x403361 = ["split", "3145842iNlRJF", "fill", "532710oXPoZD", "log", "8jQItdX", "1622104sAbMao", "length", "1730550VYOVXu", "469642OkXMid", "141204GiehLn", "9tdGTQk", "450933oPTMGn", "9VanfkH", "/dev/stdin", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x403361;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("141204GiehLn") / 1 + parseInt("469642OkXMid") / 2 * (parseInt("9VanfkH") / 3) + parseInt("1622104sAbMao") / 4 + -parseInt("1730550VYOVXu") / 5 + -parseInt("3145842iNlRJF") / 6 + parseInt("450933oPTMGn") / 7 * (parseInt("8jQItdX") / 8) + -parseInt("9tdGTQk") / 9 * (parseInt("532710oXPoZD") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 391924);
function __DECODE_0__(BbAsls, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 270;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BbAsls, key);
}
function Main(input) {
  input = input.split("\n");
  tmp1 = input[0]["split"](" ");
  var n = parseInt(tmp1[0]);
  var a = parseInt(tmp1[1]);
  tmp = input[1]["split"](" ");
  x = new Array(n);
  var sum2 = 0;
  for (i = 0; i < tmp["length"]; i++) {
    x[i] = parseInt(tmp[i]);
  }
  var s = 0;
  for (i = 0; i < n; i++) {
    sum2 = sum2 + x[i];
  }
  var b = new Array(sum2 + 1);
  for (var y = 0; y < sum2 + 1; y++) {
    b[y] = new Array(n + 1)["fill"](0);
  }
  b[0][0] = 1;
  for (j = 0; j < n; j++) {
    for (i = sum2; i >= 0; i--) {
      for (k = 0; k < n + 1; k++) {
        if (b[i][k] >= 1) {
          b[i + x[j]][k + 1] = b[i + x[j]][k + 1] + b[i][k];
        }
      }
    }
  }
  for (i = 1; i <= n && i * a <= sum2; i++) {
    s = s + b[i * a][i];
  }
  console["log"]("%s", s);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
