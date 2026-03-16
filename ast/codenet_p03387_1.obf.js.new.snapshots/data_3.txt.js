function __DECODE_0__(Rjvpsu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 475;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Rjvpsu, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("4ShIcbe") / 1 * (parseInt("104956HaGqUT") / 2) + parseInt("3WACwAn") / 3 * (parseInt("1766764gIExNb") / 4) + parseInt("1016300tvSzXS") / 5 * (parseInt("6SENwaw") / 6) + parseInt("35QegbPa") / 7 * (parseInt("220344BbQucF") / 8) + -parseInt("5931gykjTY") / 9 * (-parseInt("4280SsrUYR") / 10) + -parseInt("1464562VXonHc") / 11 * (parseInt("24PEQSaZ") / 12) + -parseInt("9671454qQursb") / 13;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 264388);
function Main(s) {
  var s = s["split"]("\n")[0].split(" ")["map"](e => parseInt(e, 10))["sort"]((a, b) => b - a);
  var cnt = 0;
  if ((s[1] - s[2]) % 2 === 0) {
    cnt += s[0] - s[1];
    s[2] += cnt;
    cnt += (s[0] - s[2]) / 2;
  } else {
    s[0]++;
    s[1]++;
    cnt++;
    cnt += s[0] - s[1];
    s[2] += s[0] - s[1];
    cnt += (s[0] - s[2]) / 2;
  }
  console["log"](cnt);
}
function __STRING_ARRAY__() {
  var _0x1e0018 = ["4ShIcbe", "sort", "1016300tvSzXS", "4280SsrUYR", "readFileSync", "3WACwAn", "35QegbPa", "log", "24PEQSaZ", "5931gykjTY", "220344BbQucF", "/dev/stdin", "6SENwaw", "split", "104956HaGqUT", "map", "1464562VXonHc", "1766764gIExNb", "9671454qQursb"];
  __STRING_ARRAY__ = function () {
    return _0x1e0018;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
