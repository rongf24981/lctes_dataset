'use strict';

function __STRING_ARRAY__() {
  const _0x40e632 = ["579542OsqqhN", "23916690KzZaXd", "5gEzRQT", "980184elAqgN", "utf8", "3404277JBfYnC", "1643346UItyGx", "log", "273732rnRIvC", "join", "2QlGXXd", "7YUzrbQ", "3032286gjejtC", "map"];
  __STRING_ARRAY__ = function () {
    return _0x40e632;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("2QlGXXd") / 1 * (parseInt("579542OsqqhN") / 2) + -parseInt("1643346UItyGx") / 3 + -parseInt("273732rnRIvC") / 4 * (parseInt("5gEzRQT") / 5) + -parseInt("3032286gjejtC") / 6 + parseInt("7YUzrbQ") / 7 * (parseInt("980184elAqgN") / 8) + -parseInt("3404277JBfYnC") / 9 + parseInt("23916690KzZaXd") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 434801);
function __DECODE_0__(PZVTNR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 199;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PZVTNR, key);
}
(function (input) {
  input = input.trim().split(/\s+/)["map"](x => x - 0);
  const r = input[0];
  const D = input[1];
  let x = input[2];
  let ans = new Array(10);
  for (let i = 0; i < 10; i++) {
    x = r * x - D;
    ans[i] = x;
  }
  console["log"](ans["join"]("\n"));
})(require("fs").readFileSync("/dev/stdin", "utf8"));
