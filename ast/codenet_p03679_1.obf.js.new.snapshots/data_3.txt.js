'use strict';

function __STRING_ARRAY__() {
  const _0x53887f = ["/dev/stdin", "log", "762qnJWDk", "utf8", "18edFQzY", "readFileSync", "569779YBHzSE", "469616gpyxAI", "split", "2576484WzmiXn", "30NadrJi", "1043928MCdGcT", "14366935gHajVW", "570BdiTll", "2227088pBsazM", "safe", "45jotGLk", "abs"];
  __STRING_ARRAY__ = function () {
    return _0x53887f;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(GZjWZY, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 216;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GZjWZY, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1043928MCdGcT") / 1 + -parseInt("2576484WzmiXn") / 2 + -parseInt("18edFQzY") / 3 * (-parseInt("469616gpyxAI") / 4) + -parseInt("570BdiTll") / 5 * (parseInt("762qnJWDk") / 6) + -parseInt("569779YBHzSE") / 7 + parseInt("2227088pBsazM") / 8 * (-parseInt("45jotGLk") / 9) + -parseInt("30NadrJi") / 10 * (-parseInt("14366935gHajVW") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 802704);
const main = INPUT => {
  const input = INPUT.split("\n")[0];
  const [X, A, B] = input["split"](" ").map(n => Number(n));
  if (A - B >= 0) {
    console["log"]("delicious");
  } else if (A - B < 0 && Math["abs"](A - B) <= X) {
    console["log"]("safe");
  } else {
    console["log"]("dangerous");
  }
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
