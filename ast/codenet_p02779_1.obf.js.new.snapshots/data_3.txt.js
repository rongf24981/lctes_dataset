'use strict';

function __STRING_ARRAY__() {
  const _0x5ca500 = ["148722NoiblF", "/dev/stdin", "map", "YES", "split", "utf8", "log", "1003016TJWYyR", "trim", "indexOf", "670779ZzWlSG", "8428216JETbKQ", "3694260UIAtMq", "2895510hlCObO", "readFileSync", "174zRYkne", "170niPrSW", "1058463eDwnFn", "10XmnrCt"];
  __STRING_ARRAY__ = function () {
    return _0x5ca500;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1058463eDwnFn") / 1 + -parseInt("2895510hlCObO") / 2 + -parseInt("3694260UIAtMq") / 3 + parseInt("1003016TJWYyR") / 4 * (-parseInt("10XmnrCt") / 5) + -parseInt("174zRYkne") / 6 * (-parseInt("148722NoiblF") / 7) + parseInt("8428216JETbKQ") / 8 + parseInt("670779ZzWlSG") / 9 * (parseInt("170niPrSW") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 814468);
function __DECODE_0__(ebmfKm, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 295;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ebmfKm, key);
}
function Main(input) {
  input = input["trim"]()["split"]("\n");
  const N = Number(input[0].trim());
  const A = input[1].trim()["split"](" ")["map"](Number);
  let ret = "YES";
  for (let i = 0; i < N; i++) {
    let tmp = A.slice(i + 1);
    let r = tmp["indexOf"](A[i]);
    if (r !== -1) {
      ret = "NO";
      break;
    }
  }
  console["log"](ret);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
