'use strict';

function __STRING_ARRAY__() {
  const _0x517b68 = ["length", "8514xOcOXi", "split", "readFileSync", "488FCrFiC", "utf8", "map", "2402NDDSaH", "3070DQhXlQ", "1067941bmWakc", "log", "9OFPTsC", "3264088vkGBdL", "/dev/stdin", "4uukeDb", "keys", "115325HmHUDw", "18HgOHQT", "759558mbyVgO", "1677vmlgVG", "60lSFiuS"];
  __STRING_ARRAY__ = function () {
    return _0x517b68;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("488FCrFiC") / 1 * (-parseInt("2402NDDSaH") / 2) + parseInt("759558mbyVgO") / 3 + parseInt("4uukeDb") / 4 * (parseInt("115325HmHUDw") / 5) + -parseInt("18HgOHQT") / 6 * (-parseInt("1067941bmWakc") / 7) + parseInt("3264088vkGBdL") / 8 * (parseInt("9OFPTsC") / 9) + parseInt("3070DQhXlQ") / 10 * (-parseInt("8514xOcOXi") / 11) + parseInt("60lSFiuS") / 12 * (-parseInt("1677vmlgVG") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 317600);
const combi = function (n) {
  return n * (n - 1) / 2;
};
const main = arg => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]["split"](" ")[0]);
  const A = input[1]["split"](" ")["map"](n => parseInt(n));
  let m = {};
  for (let i = 0; i < A["length"]; i++) {
    if (!m[A[i]]) {
      m[A[i]] = 1;
    } else {
      m[A[i]]++;
    }
  }
  let orgCnt = 0;
  let keys = Object["keys"](m);
  for (let i = 0; i < keys.length; i++) {
    orgCnt = orgCnt + combi(m[keys[i]]);
  }
  for (let i = 0; i < A.length; i++) {
    let num = m[A[i]];
    const diff = combi(num) - combi(num - 1);
    console["log"](orgCnt - diff);
  }
};
function __DECODE_0__(bQDNuz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 205;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bQDNuz, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
