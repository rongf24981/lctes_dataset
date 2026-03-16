'use strict';

function __STRING_ARRAY__() {
  const _0x19bc68 = ["2853imepyP", "log", "3352740YhhQQQ", "830961twoPGZ", "abs", "22600uVPhkO", "4sTZmJM", "6706931TgzeaL", "utf8", "1412938NXYkMm", "5268495LLxEVx", "readFileSync", "6sYccLf", "72226610LFcztr", "split"];
  __STRING_ARRAY__ = function () {
    return _0x19bc68;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1412938NXYkMm") / 1 + -parseInt("3352740YhhQQQ") / 2 + parseInt("830961twoPGZ") / 3 * (-parseInt("4sTZmJM") / 4) + -parseInt("5268495LLxEVx") / 5 + parseInt("6sYccLf") / 6 * (-parseInt("6706931TgzeaL") / 7) + parseInt("22600uVPhkO") / 8 * (-parseInt("2853imepyP") / 9) + parseInt("72226610LFcztr") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 949009);
function main(stdin) {
  const input = stdin["split"](" ").map(v => parseInt(v, 10));
  const N = input[0];
  const L = input[1];
  let sum = 0;
  let min = Infinity;
  for (let i = L; i < L + N; ++i) {
    sum += i;
    if (Math["abs"](i) < Math["abs"](min)) {
      min = i;
    }
  }
  console["log"](sum - min);
}
function __DECODE_0__(huUTuX, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 498;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(huUTuX, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
