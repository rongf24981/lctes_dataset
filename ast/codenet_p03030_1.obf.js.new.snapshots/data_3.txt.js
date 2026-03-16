function __STRING_ARRAY__() {
  const _0x3bb3a0 = ["1204971plFEBb", "447480aiEHNZ", "5691826SSzTRp", "4iyWbiW", "map", "45565HPhSnG", "sort", "join", "split", "push", "log", "232488ldGoSt", "readFileSync", "5342670bfUOgy", "509376kzdlqf"];
  __STRING_ARRAY__ = function () {
    return _0x3bb3a0;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("45565HPhSnG") / 1 + parseInt("4iyWbiW") / 2 * (parseInt("1204971plFEBb") / 3) + -parseInt("232488ldGoSt") / 4 + -parseInt("447480aiEHNZ") / 5 + -parseInt("5342670bfUOgy") / 6 + parseInt("5691826SSzTRp") / 7 + -parseInt("509376kzdlqf") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 560262);
function Main(input) {
  'use strict';

  const temp = input["split"]("\n");
  const n = parseInt(temp.shift(), 10);
  for (let i = 0; i < n; i++) {
    temp[i] = temp[i].split(" ");
    temp[i]["push"](i + 1);
    temp[i][1] = parseInt(temp[i][1], 10);
  }
  temp["sort"]((a, b) => b[1] - a[1]);
  temp["sort"]((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    } else {
      0;
    }
  });
  const ans = temp["map"](e => e[2]);
  console["log"](ans["join"]("\n"));
  return false;
}
function __DECODE_0__(UaPckx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 215;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UaPckx, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
