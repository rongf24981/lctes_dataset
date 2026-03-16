(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("586827lMRMtX") / 1 + parseInt("1093924zdfmZH") / 2 + parseInt("1374AyDAnx") / 3 * (-parseInt("14444gEnzhT") / 4) + -parseInt("20oSqAjH") / 5 * (-parseInt("1856922YYdhdv") / 6) + parseInt("10954587ySEfPM") / 7 + parseInt("1384sJHgzw") / 8 * (parseInt("16974IsSpCh") / 9) + -parseInt("17365200cJorWM") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 872598);
debug = false;
function __STRING_ARRAY__() {
  var _0x4f8f96 = ["1384sJHgzw", "14444gEnzhT", "586827lMRMtX", "1093924zdfmZH", "split", "slice", "log", "16974IsSpCh", "10954587ySEfPM", "Yes", "test", "20oSqAjH", "1856922YYdhdv", "1374AyDAnx", "17365200cJorWM", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x4f8f96;
  };
  return __STRING_ARRAY__();
}
function log(...args) {
  if (debug) {
    console["log"](...args);
  }
}
function Main(input) {
  lines = input.split("\n");
  f = lines[0]["split"](" ");
  N = f[0];
  A = f[1] * 1;
  B = f[2] * 1;
  C = f[3] * 1;
  D = f[4] * 1;
  s = lines[1];
  log(N, A, B, C, D, s);
  bool = true;
  if (C > D) {
    end = D;
    if (C - D <= 2) {
      end = C;
    }
    s2 = s;
    if (s[D - 2] == "#") {
      log(s2, s2[D - 1]);
      s2[D - 1] = "#";
      s2 = s2["slice"](0, D - 1) + "#" + s2["slice"](D);
    }
    log(s2);
    str = s2["slice"](B - 1, end);
    log(str, bool);
    bool = bool && /\.\.\./["test"](str);
    log(str, bool);
  }
  str = s["slice"](A - 1, C);
  bool = bool && !/##/["test"](str);
  log(str, bool);
  str = s["slice"](B - 1, D);
  bool = bool && !/##/["test"](str);
  log(str, bool);
  ans = bool ? "Yes" : "No";
  console["log"](ans);
}
function __DECODE_0__(iKTjpH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 409;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iKTjpH, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
