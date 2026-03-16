'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("247105ZzrAdO") / 1 + -parseInt("436rkuuQn") / 2 * (-parseInt("1722gOnGdU") / 3) + -parseInt("222328RHaRvd") / 4 + parseInt("1760310wPUhox") / 5 + parseInt("18zDlcsk") / 6 * (-parseInt("1190567dvzSor") / 7) + -parseInt("1369816YBoPiF") / 8 + parseInt("27594QGlAVj") / 9 * (parseInt("1020BgBoYd") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 299979);
const create = () => {
  const input = require("fs")["readFileSync"]("/dev/stdin", "utf8").trim()["split"]("\n");
  const res = {
    list: input,
    index: 0,
    max: input.length,
    hasNext: function () {
      return this["index"] < this["max"];
    },
    next: function () {
      if (!this["hasNext"]()) {
        throw "ArrayIndexOutOfBoundsException";
      } else {
        return this["list"][this.index++];
      }
    }
  };
  return res;
};
const o = create();
const next = () => o.next();
function __DECODE_0__(lmTmeT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 207;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lmTmeT, key);
}
const nextInt = () => parseInt(o["next"]());
const nextStrArray = () => o["next"]()["split"](" ");
const nextIntArray = () => o["next"]()["split"](" ")["map"](el => parseInt(el));
const nextCharArray = () => o["next"]().split("");
const hasNext = () => o.hasNext();
function __STRING_ARRAY__() {
  const _0x44362b = ["27594QGlAVj", "222328RHaRvd", "map", "18zDlcsk", "next", "log", "split", "1190567dvzSor", "hasNext", "index", "readFileSync", "1760310wPUhox", "247105ZzrAdO", "1722gOnGdU", "list", "ArrayIndexOutOfBoundsException", "utf8", "436rkuuQn", "max", "1369816YBoPiF", "/dev/stdin", "1020BgBoYd", "floor"];
  __STRING_ARRAY__ = function () {
    return _0x44362b;
  };
  return __STRING_ARRAY__();
}
const myout = (...x) => console["log"](...x);
const Main = () => {
  const [n, m] = nextIntArray();
  let ans = m <= n * 2 ? Math["floor"](M / 2) : Math["floor"]((n * 2 + m) / 4);
  console.log(ans);
};
Main();
