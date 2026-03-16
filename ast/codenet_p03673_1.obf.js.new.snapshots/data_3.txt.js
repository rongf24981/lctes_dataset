'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("150977HsmUPd") / 1 + -parseInt("78890aFxRZL") / 2 + parseInt("743190VsJfmh") / 3 + -parseInt("415780LzZibG") / 4 + -parseInt("5jRucWu") / 5 * (-parseInt("636816LZRRpN") / 6) + -parseInt("63bnSvhG") / 7 * (-parseInt("33240sEnvdM") / 8) + -parseInt("18nKqnxZ") / 9 * (parseInt("1247390nCpsKM") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 149370);
function __STRING_ARRAY__() {
  const _0x2d2961 = ["map", "push", "5jRucWu", "63bnSvhG", "636816LZRRpN", "18nKqnxZ", "415780LzZibG", "split", "trim", "/dev/stdin", "1247390nCpsKM", "743190VsJfmh", "join", "150977HsmUPd", "utf8", "33240sEnvdM", "readFileSync", "78890aFxRZL"];
  __STRING_ARRAY__ = function () {
    return _0x2d2961;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg["trim"]()["split"]("\n");
  const N = ~~arg[0];
  const b = arg[1].split(" ")["map"](n => ~~n);
  let answer = [];
  for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
      answer["push"](b[i]);
    } else {
      answer.unshift(b[i]);
    }
  }
  if (N % 2 !== 0) {
    answer = answer.reverse();
  }
  console.log(answer["join"](" "));
};
function __DECODE_0__(FwoIpo, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 312;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FwoIpo, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
