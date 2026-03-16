(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("50njbqRg") / 1 * (parseInt("6568arHXct") / 2) + parseInt("32976gULgkC") / 3 + -parseInt("3203664jpeKnA") / 4 + parseInt("1390GxXfUX") / 5 * (-parseInt("14526uQuGGx") / 6) + parseInt("6993686aZQpxP") / 7 * (parseInt("8wgEVnz") / 8) + -parseInt("7937613SShMFX") / 9 * (parseInt("10HUgooc") / 10) + -parseInt("11XuOJgl") / 11 * (-parseInt("20237892SVoXiO") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 504870);
function __DECODE_0__(ktomJm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 250;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ktomJm, key);
}
function __STRING_ARRAY__() {
  var _0x387740 = ["8wgEVnz", "trim", "log", "10HUgooc", "1390GxXfUX", "/dev/stdin", "32976gULgkC", "6568arHXct", "50njbqRg", "20237892SVoXiO", "split", "11XuOJgl", "3203664jpeKnA", "7937613SShMFX", "14526uQuGGx", "6993686aZQpxP", "utf8", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x387740;
  };
  return __STRING_ARRAY__();
}
require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"](/\s/).map(function (i) {
  j = i["split"](",");
  s = 0;
  m = n = 10;
  while (m--) {
    j[m] = s -= j[m];
  }
  for (s *= j[11] / (-j[11] - j[n]); j[--n] >= -s;);
  console["log"](++n);
});
