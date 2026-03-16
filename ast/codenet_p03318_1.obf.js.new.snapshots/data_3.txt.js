'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("37UyxKUJ") / 1 * (-parseInt("14494FbwNxM") / 2) + parseInt("1138836HKumXh") / 3 + -parseInt("4sByfPv") / 4 * (parseInt("1798505LSXvDl") / 5) + parseInt("1118382Bnnirb") / 6 + parseInt("2957675PjoYrw") / 7 + -parseInt("866832fibFSO") / 8 * (parseInt("9czPqMp") / 9) + -parseInt("40oitaTL") / 10 * (parseInt("1319582gCoSmM") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 308770);
function main(s) {
  const K = Number(s.split("\n")[0]);
  const list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "19", "29", "39", "49", "59", "69", "79", "89", "99", "199"];
  const head = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
  let rest = "99";
  for (let i = 0; i <= 20; i++) {
    for (let j = 0; j < head.length; j++) {
      list["push"](head[j] + rest);
    }
    rest += "9";
  }
  const ans = list["slice"](0, K).join("\n");
  console["log"](ans);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(ZVKBcu, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 318;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZVKBcu, key);
}
function __STRING_ARRAY__() {
  const _0x422902 = ["4sByfPv", "log", "37UyxKUJ", "push", "866832fibFSO", "9czPqMp", "readFileSync", "2957675PjoYrw", "1138836HKumXh", "40oitaTL", "utf8", "slice", "1319582gCoSmM", "1798505LSXvDl", "/dev/stdin", "14494FbwNxM", "1118382Bnnirb"];
  __STRING_ARRAY__ = function () {
    return _0x422902;
  };
  return __STRING_ARRAY__();
}
