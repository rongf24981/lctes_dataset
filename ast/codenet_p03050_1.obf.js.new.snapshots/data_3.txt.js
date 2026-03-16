'use strict';

function __STRING_ARRAY__() {
  const _0x39e847 = ["1783572KEjFbI", "387924YVpaUN", "8AIDcwE", "444217MnGvEv", "2543772uoWSGG", "209342gybGgP", "40PkiIUI", "8828100GbzqPo", "834195PhOvpm", "/dev/stdin", "utf8", "trunc"];
  __STRING_ARRAY__ = function () {
    return _0x39e847;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("444217MnGvEv") / 1 + -parseInt("387924YVpaUN") / 2 + -parseInt("1783572KEjFbI") / 3 + -parseInt("8AIDcwE") / 4 * (-parseInt("834195PhOvpm") / 5) + parseInt("2543772uoWSGG") / 6 + parseInt("209342gybGgP") / 7 * (-parseInt("40PkiIUI") / 8) + parseInt("8828100GbzqPo") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 356307);
function __DECODE_0__(FmdEdD, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 364;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FmdEdD, key);
}
function Main(input) {
  const N = parseInt(input);
  let ret = 0;
  for (let i = 1; i * i < N; i++) {
    const ic = i - 1;
    if (ic !== 0 && N % ic === Math["trunc"](N / ic)) {
      ret += ic;
    }
    const j = Math.trunc(N / i) - 1;
    if (N % j === i) {
      ret += j;
    }
  }
  console.log(ret);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
