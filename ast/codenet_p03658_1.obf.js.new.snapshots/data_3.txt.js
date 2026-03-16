'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("539797kbqQLc") / 1 * (-parseInt("2TzTHUM") / 2) + parseInt("368241rDPxAE") / 3 + parseInt("90108gEdHSG") / 4 * (-parseInt("115NdcYBK") / 5) + -parseInt("18QSiTol") / 6 * (parseInt("1302546cOxIPO") / 7) + -parseInt("8oYBPtx") / 8 * (parseInt("1706769OpINyl") / 9) + -parseInt("1259380kupotI") / 10 + parseInt("5962uVdjTK") / 11 * (parseInt("22848jPlvFc") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 302578);
function __STRING_ARRAY__() {
  const _0x5a5ed2 = ["/dev/stdin", "readFileSync", "1259380kupotI", "539797kbqQLc", "115NdcYBK", "log", "18QSiTol", "utf8", "22848jPlvFc", "1706769OpINyl", "8oYBPtx", "5962uVdjTK", "2TzTHUM", "1302546cOxIPO", "sort", "split", "368241rDPxAE", "push", "90108gEdHSG"];
  __STRING_ARRAY__ = function () {
    return _0x5a5ed2;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(NxajBc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 425;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NxajBc, key);
}
const Main = input => {
  let xs = input.trim().split("\n");
  let N = Number(xs[0]["split"](" ")[0]);
  let K = Number(xs[0]["split"](" ")[1]);
  let l = [];
  for (let i = 0; i < N; i++) {
    l["push"](xs[1]["split"](" ")[i]);
  }
  const compare = (b, a) => {
    return a - b;
  };
  l["sort"](compare);
  let ans = 0;
  for (let i = 0; i < K; i++) {
    ans += Number(l[i]);
  }
  console["log"](ans);
};
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
