function __DECODE_0__(koHqoz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 410;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(koHqoz, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("61453ZqtxoS") / 1 + parseInt("1684120OdTbAk") / 2 + parseInt("313317wEcoOF") / 3 * (-parseInt("16wlpycJ") / 4) + parseInt("3519865fJOehS") / 5 + parseInt("30UBnVfo") / 6 * (-parseInt("730338BkANTo") / 7) + -parseInt("306664LGYqaY") / 8 * (parseInt("9BicBRn") / 9) + parseInt("297890dokqNc") / 10 * (-parseInt("11fuRMKz") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 477032);
function Main(input) {
  input = input["split"]("\n");
  const N = input["shift"]();
  const A = input["map"](v => parseInt(v));
  f = false;
  for (i = 0; i < A["length"]; i++) {
    if (A[i] % 2 == 0) {
      if (A[i] % 3 != 0 && A[i] % 5 != 0) {
        f = true;
      }
    }
  }
  if (f) {
    console["log"]("DENIED");
  } else {
    console["log"]("APPROVED");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x76feac = ["APPROVED", "shift", "readFileSync", "16wlpycJ", "length", "1684120OdTbAk", "3519865fJOehS", "306664LGYqaY", "61453ZqtxoS", "297890dokqNc", "313317wEcoOF", "split", "log", "9BicBRn", "map", "11fuRMKz", "utf8", "730338BkANTo", "30UBnVfo"];
  __STRING_ARRAY__ = function () {
    return _0x76feac;
  };
  return __STRING_ARRAY__();
}
