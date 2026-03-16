'use strict';

function __STRING_ARRAY__() {
  const _0x5712ec = ["901892blqYeD", "21164076cAlJav", "/dev/stdin", "1398195MRSqHg", "splice", "590464pubGFB", "261KiubWd", "11WrOaje", "shift", "35uaSxdi", "30RHJKpq", "log", "828726JSwfEO", "trim", "560270ZgYzfu", "utf8", "6DdzcHZ", "1065054JKUXMk"];
  __STRING_ARRAY__ = function () {
    return _0x5712ec;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QDAajF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 301;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QDAajF, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1398195MRSqHg") / 1 + -parseInt("1065054JKUXMk") / 2 * (-parseInt("6DdzcHZ") / 3) + -parseInt("901892blqYeD") / 4 * (-parseInt("30RHJKpq") / 5) + parseInt("828726JSwfEO") / 6 + -parseInt("35uaSxdi") / 7 * (parseInt("590464pubGFB") / 8) + parseInt("261KiubWd") / 9 * (-parseInt("560270ZgYzfu") / 10) + -parseInt("11WrOaje") / 11 * (-parseInt("21164076cAlJav") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 927668);
console["log"](function (args) {
  const _tmp = args["trim"]().split("\n");
  const N = _tmp["shift"]() | 0;
  const A = [];
  const x = [];
  const y = [];
  for (let i = 0; i < N; i++) {
    A[i] = _tmp["shift"]() | 0;
    x[i] = [];
    y[i] = [];
    for (let j = 0; j < A[i]; j++) {
      const xy = _tmp[j].split(" ");
      x[i][j] = xy[0] - 1;
      y[i][j] = xy[1] | 0;
    }
    _tmp["splice"](0, A[i]);
  }
  let K = 0;
  TEST: for (let honest = 1; honest < 1 << N; honest++) {
    let k = 0;
    for (let i = 0; i < N; i++) {
      if (!(honest & 1 << i)) {
        continue;
      }
      k++;
      for (let j = 0; j < A[i]; j++) {
        const Xij = x[i][j];
        const Yij = y[i][j];
        const target = honest & 1 << Xij;
        if (target !== Yij << Xij) {
          continue TEST;
        }
      }
    }
    if (k > K) {
      K = k;
    }
  }
  return K;
}(require("fs").readFileSync("/dev/stdin", "utf8")));
