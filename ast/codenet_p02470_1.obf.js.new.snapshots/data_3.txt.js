(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("805794eFbqUr") / 1 + -parseInt("622jeClkk") / 2 * (parseInt("12828lvjBIp") / 3) + parseInt("1232584SWMKyW") / 4 + parseInt("67265FvqsMz") / 5 * (parseInt("30cQAUQJ") / 6) + parseInt("308ohLapM") / 7 * (-parseInt("23128KiMges") / 8) + -parseInt("2612889qmDhSD") / 9 * (parseInt("40KKsoeh") / 10) + -parseInt("125411dYohnd") / 11 * (-parseInt("2244iMAJXD") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 694868);
function __DECODE_0__(ZOfMON, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 288;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZOfMON, key);
}
function Main(input) {
  var n = parseInt(input, 10);
  var count = 0;
  for (i = 1; i < n; i++) {
    if (gcd(n, i) == 1) {
      count++;
    }
  }
  console["log"](count);
}
function __STRING_ARRAY__() {
  var _0x2c3c1e = ["308ohLapM", "67265FvqsMz", "min", "40KKsoeh", "1232584SWMKyW", "622jeClkk", "2244iMAJXD", "125411dYohnd", "23128KiMges", "30cQAUQJ", "utf8", "log", "805794eFbqUr", "/dev/stdin", "2612889qmDhSD", "12828lvjBIp", "max"];
  __STRING_ARRAY__ = function () {
    return _0x2c3c1e;
  };
  return __STRING_ARRAY__();
}
function gcd(n, m) {
  var a;
  var b;
  var c;
  a = Math["max"](n, m);
  b = Math["min"](n, m);
  c = a % b;
  if (c == 0) {
    return b;
  } else {
    return gcd(b, c);
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
