'use strict';

function __STRING_ARRAY__() {
  const _0x1cf867 = ["6568248YujjnI", "utf-8", "37535fGRfZe", "map", "abs", "24711220DlWZDI", "3CJGsHS", "push", "split", "5837363XrKuEZ", "27JOQRge", "558370nrLrcg", "/dev/stdin", "log", "readFileSync", "slice", "2047444WDVDaj", "444urUYRi", "2463496nmrFnh"];
  __STRING_ARRAY__ = function () {
    return _0x1cf867;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(BCDSFZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 414;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BCDSFZ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("558370nrLrcg") / 1 + parseInt("2047444WDVDaj") / 2 * (-parseInt("3CJGsHS") / 3) + -parseInt("444urUYRi") / 4 * (-parseInt("37535fGRfZe") / 5) + parseInt("6568248YujjnI") / 6 + parseInt("5837363XrKuEZ") / 7 + -parseInt("2463496nmrFnh") / 8 * (-parseInt("27JOQRge") / 9) + -parseInt("24711220DlWZDI") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 749231);
const main = input => {
  input = input["split"]("\n");
  const N = parseInt(input[0]);
  let X = [];
  let Y = [];
  let Z = [];
  input["slice"](1, N + 1).forEach(v => {
    let tmp = v["split"](" ")["map"](j => parseInt(j));
    X.push(tmp[0]);
    Y.push(tmp[1]);
    Z["push"](tmp[2]);
  });
  const MAX = 100;
  for (let y = 0; y <= MAX; y++) {
    for (let x = 0; x <= MAX; x++) {
      let needH = -1;
      for (let i = 0; i < N; i++) {
        let tmp = Z[i] + Math["abs"](Y[i] - y) + Math["abs"](X[i] - x);
        if (needH === -1) {
          needH = tmp;
        } else if (needH !== tmp) {
          needH = -2;
          break;
        }
      }
      if (needH === -2) {
        continue;
      }
      console["log"]("%d %d %d", x, y, needH);
    }
  }
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf-8"));
