'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1COyQfq") / 1 * (-parseInt("402334qvExNd") / 2) + -parseInt("1099176rhbUVC") / 3 * (-parseInt("8quXKhi") / 4) + -parseInt("15mgAedR") / 5 * (parseInt("1840686aAgScu") / 6) + parseInt("3299422rnVEJX") / 7 + parseInt("1782800LCChAL") / 8 + -parseInt("108OrwRSZ") / 9 * (-parseInt("663610yNwylQ") / 10) + -parseInt("11419518KMwOQu") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 465998);
function __STRING_ARRAY__() {
  const _0x2d9185 = ["15mgAedR", "108OrwRSZ", "trim", "11419518KMwOQu", "1099176rhbUVC", "1COyQfq", "push", "sort", "663610yNwylQ", "shift", "forEach", "/dev/stdin", "split", "keys", "1782800LCChAL", "402334qvExNd", "log", "8quXKhi", "3299422rnVEJX", "1840686aAgScu", "length"];
  __STRING_ARRAY__ = function () {
    return _0x2d9185;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(AxJIkE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 447;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(AxJIkE, key);
}
const main = arg => {
  const rows = arg["trim"]()["split"]("\n");
  const N = rows["shift"]();
  let wordsObj = {};
  rows["forEach"](row => {
    if (wordsObj[row]) {
      wordsObj[row]++;
    } else {
      wordsObj[row] = 1;
    }
  });
  let ansArr = [];
  let max = 0;
  let output = w => {
    console["log"](w);
  };
  for (let i = 0; i < Object.keys(wordsObj)["length"]; i++) {
    if (wordsObj[Object["keys"](wordsObj)[i]] < max) {
      continue;
    } else if (wordsObj[Object["keys"](wordsObj)[i]] > max) {
      ansArr = [];
      ansArr.push(Object["keys"](wordsObj)[i]);
      max = wordsObj[Object["keys"](wordsObj)[i]];
    } else if (wordsObj[Object["keys"](wordsObj)[i]] * 1 == max) {
      ansArr["push"](Object["keys"](wordsObj)[i]);
    }
  }
  ansArr["sort"]();
  ansArr["forEach"](output);
};
main(require("fs").readFileSync("/dev/stdin", "utf8"));
