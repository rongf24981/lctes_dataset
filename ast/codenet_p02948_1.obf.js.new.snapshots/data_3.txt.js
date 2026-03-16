'use strict';

function __DECODE_0__(YVTRXK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 229;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YVTRXK, key);
}
function __STRING_ARRAY__() {
  const _0x18f004 = ["sort", "2917240pyaRDA", "119189qAvamM", "17872659jYfWEk", "length", "272865UPMnwH", "1284240Hxtflw", "log", "slice", "map", "88MOAjFf", "/dev/stdin", "1523352zzZnNN", "1849602vCvIib", "trim", "split", "filter", "28qzKOiU"];
  __STRING_ARRAY__ = function () {
    return _0x18f004;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1284240Hxtflw") / 1 + -parseInt("1849602vCvIib") / 2 + parseInt("272865UPMnwH") / 3 * (-parseInt("28qzKOiU") / 4) + -parseInt("2917240pyaRDA") / 5 + -parseInt("1523352zzZnNN") / 6 + -parseInt("119189qAvamM") / 7 * (parseInt("88MOAjFf") / 8) + parseInt("17872659jYfWEk") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 683968);
function Main(input) {
  const N = Number(input["split"]("\n")[0]["split"](" ")[0]);
  const M = Number(input["split"]("\n")[0]["split"](" ")[1]);
  const list = input["split"]("\n")["slice"](1)["map"](x => x.split(" ").map(x => Number(x)))["filter"](x => x[0] <= M)["sort"]((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else {
      return b[1] - a[1];
    }
  });
  let ans = 0;
  let now = 0;
  if (list["length"] === 0) {
    console["log"](0);
    return;
  }
  for (let i = 0; i < N; i++) {
    if (now === M) {
      break;
    }
    if (list[i][0] > M - now) {
      continue;
    }
    ans += list[i][1];
    now++;
  }
  console["log"](ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8")["trim"]());
