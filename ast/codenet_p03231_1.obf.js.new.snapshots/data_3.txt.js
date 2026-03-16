function __STRING_ARRAY__() {
  var _0x1071ae = ["1020636iZivzY", "1190IDlbni", "728OCzLpt", "1115516FjaRoZ", "12048oIquMy", "length", "split", "utf8", "15778BXeXkI", "63375JYWXvc", "1687499zawPeq", "readFileSync", "1490172EvHpCx", "6mqwnzN", "72ElwhEI", "10wQWfBH", "1CJhcyL", "log"];
  __STRING_ARRAY__ = function () {
    return _0x1071ae;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1CJhcyL") / 1 * (-parseInt("1490172EvHpCx") / 2) + parseInt("6mqwnzN") / 3 * (parseInt("1115516FjaRoZ") / 4) + -parseInt("1190IDlbni") / 5 * (parseInt("12048oIquMy") / 6) + -parseInt("15778BXeXkI") / 7 * (parseInt("728OCzLpt") / 8) + -parseInt("1020636iZivzY") / 9 * (parseInt("10wQWfBH") / 10) + parseInt("1687499zawPeq") / 11 + parseInt("72ElwhEI") / 12 * (-parseInt("63375JYWXvc") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 630581);
function toNum(str) {
  return parseInt(str, 10);
}
function gcd(a, b) {
  if (a % b === 0) {
    return b;
  } else {
    return gcd(b, a % b);
  }
}
function lcm(a, b) {
  return a * b / gcd(a, b);
}
function Main(input) {
  var N = toNum(input["split"]("\n")[0].split(" ")[0]);
  var M = toNum(input["split"]("\n")[0].split(" ")[1]);
  var S = input["split"]("\n")[1];
  var T = input["split"]("\n")[2];
  var L = lcm(N, M);
  var flag = true;
  var X = [];
  for (var i = 0; i < L; i++) {
    X.push("");
  }
  X[0] = S[0];
  for (var i = 1; i < S.length; i++) {
    X[i * (L / N)] = S[i];
  }
  if (X[0] != T[0]) {
    console.log("-1");
  } else {
    for (var i = 1; i < T["length"]; i++) {
      if (X[i * (L / M)] != "" && X[i * (L / M)] != T[i]) {
        console["log"]("-1");
        flag = false;
        break;
      }
    }
  }
  if (flag) {
    console["log"](L);
  }
}
function __DECODE_0__(ECMBqm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 335;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ECMBqm, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
