'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1475818MBJSQO") / 1 + parseInt("6108qUTChp") / 2 * (parseInt("1167JQiPHn") / 3) + -parseInt("6570204ekSvvd") / 4 * (-parseInt("5XsCJIj") / 5) + -parseInt("714YMELgq") / 6 * (-parseInt("77497aEBAqg") / 7) + parseInt("14592496SrNSiL") / 8 + parseInt("5874453yxCDCY") / 9 + parseInt("20955810WdhxZA") / 10 * (-parseInt("22IqNqBU") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 957805);
function Main(input) {
  let lines = input["split"]("\n");
  let numInfo = lines["shift"]().split(" ")[1];
  let ansObj = {};
  for (let i = 0; i < numInfo; i++) {
    let quesNum = lines[i]["split"](" ")[0];
    let ansKind = lines[i]["split"](" ")[1];
    if (ansObj[quesNum] === undefined) {
      ansObj[quesNum] = "" + ansKind;
    } else {
      ansObj[quesNum] += "," + ansKind;
    }
  }
  let WANum = 0;
  let ACNum = 0;
  let ansObjKeys = Object["keys"](ansObj);
  for (let i = 0; i < ansObjKeys["length"]; i++) {
    let targetKey = ansObjKeys[i];
    let target = ansObj[targetKey]["split"](",");
    for (let j = 0; j < target["length"]; j++) {
      if (target[j] == "AC") {
        ACNum++;
        break;
      } else {
        WANum++;
      }
    }
  }
  console["log"](ACNum + " " + WANum);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(UCecHk, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 274;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UCecHk, key);
}
function __STRING_ARRAY__() {
  const _0x57ec44 = ["shift", "/dev/stdin", "6108qUTChp", "keys", "14592496SrNSiL", "714YMELgq", "utf8", "5XsCJIj", "6570204ekSvvd", "20955810WdhxZA", "5874453yxCDCY", "1167JQiPHn", "length", "log", "77497aEBAqg", "readFileSync", "1475818MBJSQO", "22IqNqBU", "split"];
  __STRING_ARRAY__ = function () {
    return _0x57ec44;
  };
  return __STRING_ARRAY__();
}
