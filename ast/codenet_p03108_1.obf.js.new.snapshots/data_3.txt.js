'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("81713pcecqV") / 1 * (parseInt("6vKLGTj") / 2) + -parseInt("42645DbfxFO") / 3 * (parseInt("32yFiWlG") / 4) + parseInt("370730gjTFlP") / 5 + parseInt("8436dBkeTS") / 6 * (-parseInt("1316QfjOfg") / 7) + parseInt("978968alsjwv") / 8 + -parseInt("222165hgFujZ") / 9 * (parseInt("50WneCaM") / 10) + parseInt("7629149uQcxju") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 143464);
const input = require("fs").readFileSync("/dev/stdin", "utf8").trim()["split"]("\n").map(line => line.split(" ")["map"](val => parseInt(val), 10));
const N = input[0][0];
const M = input[0][1];
const ans = [];
const par = [];
function __STRING_ARRAY__() {
  const _0x4a69cf = ["978968alsjwv", "50WneCaM", "map", "7629149uQcxju", "1316QfjOfg", "log", "370730gjTFlP", "split", "222165hgFujZ", "32yFiWlG", "8436dBkeTS", "6vKLGTj", "utf8", "42645DbfxFO", "81713pcecqV"];
  __STRING_ARRAY__ = function () {
    return _0x4a69cf;
  };
  return __STRING_ARRAY__();
}
for (let i = 1; i <= N; i++) {
  par[i] = -1;
}
function root(x) {
  if (par[x] < 0) {
    return x;
  }
  return par[x] = root(par[x]);
}
function unite(x, y) {
  const rx = root(x);
  const ry = root(y);
  if (rx === ry) {
    return;
  }
  par[ry] += par[rx];
  par[rx] = ry;
}
function isSame(x, y) {
  return root(x) === root(y);
}
function getSize(x) {
  return -par[root(x)];
}
function __DECODE_0__(nvencl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 348;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nvencl, key);
}
ans[M] = N * (N - 1) / 2;
for (let i = M; i > 1; i--) {
  const x = input[i][0];
  const y = input[i][1];
  if (isSame(x, y)) {
    ans[i - 1] = ans[i];
    continue;
  }
  ans[i - 1] = ans[i] - getSize(x) * getSize(y);
  unite(x, y);
}
for (let i = 1; i <= M; i++) {
  console["log"](ans[i]);
}
