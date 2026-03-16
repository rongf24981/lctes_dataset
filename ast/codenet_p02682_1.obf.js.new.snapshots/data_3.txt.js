'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1158762SDcGzw") / 1 + parseInt("1622ywpccp") / 2 * (parseInt("3399ZipyTT") / 3) + -parseInt("123672spiUtT") / 4 + -parseInt("4943715YeJdsi") / 5 + -parseInt("12SOSnJL") / 6 * (parseInt("362733ftavBb") / 7) + parseInt("3865400CVvaTo") / 8 + -parseInt("9SPOveJ") / 9 * (-parseInt("14618570fQNbVy") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 581834);
function main(arg) {
  let getInt = arg.trim()["split"](" ")[3];
  let oneCount = arg["trim"]()["split"](" ")[0];
  let zeroCnt = arg["trim"]().split(" ")[1];
  let minusCnt = arg["trim"]()["split"](" ")[2];
  let result = 0;
  if (oneCount == 0 && zeroCnt == 0 && minusCnt == 0) {
    console["log"](0);
    return;
  }
  if (getInt > 0) {
    if (getInt > oneCount) {
      result = oneCount * 1;
    } else {
      result = getInt * 1;
    }
    getInt = getInt - oneCount;
  }
  if (getInt > 0) {
    getInt = getInt - zeroCnt;
  }
  if (getInt > 0) {
    result = result + getInt * -1;
  }
  console["log"](result);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(sfpybl, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 114;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(sfpybl, key);
}
function __STRING_ARRAY__() {
  const _0x16a897 = ["12SOSnJL", "utf8", "readFileSync", "split", "trim", "1622ywpccp", "4943715YeJdsi", "1158762SDcGzw", "14618570fQNbVy", "9SPOveJ", "log", "362733ftavBb", "123672spiUtT", "3399ZipyTT", "3865400CVvaTo"];
  __STRING_ARRAY__ = function () {
    return _0x16a897;
  };
  return __STRING_ARRAY__();
}
