'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("838768yxUGjU") / 1 + parseInt("987582iYKZQE") / 2 + parseInt("11196FXCTeI") / 3 * (parseInt("4ziQKHZ") / 4) + -parseInt("2380120SIYHzD") / 5 + -parseInt("228342DUwvWZ") / 6 + parseInt("11746tWkSVr") / 7 * (parseInt("1544BRPgZq") / 8) + -parseInt("4444254xmGVbL") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 652258);
function __STRING_ARRAY__() {
  const _0x211d9e = ["/dev/stdin", "split", "838768yxUGjU", "Borys", "1544BRPgZq", "utf8", "987582iYKZQE", "abs", "4ziQKHZ", "2380120SIYHzD", "11746tWkSVr", "228342DUwvWZ", "4444254xmGVbL", "11196FXCTeI", "log", "Alice"];
  __STRING_ARRAY__ = function () {
    return _0x211d9e;
  };
  return __STRING_ARRAY__();
}
let input = require("fs").readFileSync("/dev/stdin", "utf8");
let N = input["split"](" ")[0] * 1;
let A = input["split"](" ")[1] * 1;
let B = input["split"](" ")[2] * 1;
function __DECODE_0__(CwcbAW, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 479;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CwcbAW, key);
}
let dist = Math["abs"](A - B) % 2;
let ans = dist == 0 ? "Alice" : "Borys";
console["log"](ans);
