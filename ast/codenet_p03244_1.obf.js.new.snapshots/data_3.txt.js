'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("815547STFfAv") / 1 + parseInt("920926TTuEaf") / 2 * (parseInt("3DGkzMX") / 3) + -parseInt("5612224moTmXq") / 4 + parseInt("3017890zEyBJN") / 5 * (-parseInt("12Bxvkvn") / 6) + -parseInt("7xUbwnc") / 7 * (-parseInt("9091376WhrqeA") / 8) + parseInt("3723858TPVrMc") / 9 + parseInt("20rmMHaY") / 10 * (parseInt("12894739pdLsMo") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 929386);
function Main(input) {
  let lines = input["split"]("\n");
  let N = lines["shift"]() - 0;
  let V = lines["shift"]()["split"](/\s/)["map"](v => v - 0);
  let ans = 0;
  for (let n = 0; n < N - 2; n++) {
    if (V[n] == V[n + 1]) {
      ans += 1;
    }
    if (V[n] != V[n + 2]) {
      ans += 1;
    }
  }
  console.log(ans);
}
function __STRING_ARRAY__() {
  const _0x14220e = ["12894739pdLsMo", "5612224moTmXq", "split", "815547STFfAv", "map", "/dev/stdin", "utf8", "7xUbwnc", "3723858TPVrMc", "3DGkzMX", "readFileSync", "920926TTuEaf", "20rmMHaY", "shift", "12Bxvkvn", "3017890zEyBJN", "9091376WhrqeA"];
  __STRING_ARRAY__ = function () {
    return _0x14220e;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(JVFkzn, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 221;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JVFkzn, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
