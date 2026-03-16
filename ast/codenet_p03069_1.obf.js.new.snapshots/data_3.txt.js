(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("940048fCrmZX") / 1 + -parseInt("105052YHIsxB") / 2 * (-parseInt("21unRImb") / 3) + parseInt("1976772HVrXRw") / 4 + parseInt("513065QwFCbF") / 5 * (-parseInt("6DNjBLQ") / 6) + parseInt("2942282LmxGfg") / 7 + parseInt("696NGjlvl") / 8 * (parseInt("3411pwovke") / 9) + -parseInt("15672790FxDvQk") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 585330);
function __DECODE_0__(GGhDQS, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 149;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GGhDQS, key);
}
function __STRING_ARRAY__() {
  const _0x4f842e = ["utf-8", "log", "3411pwovke", "/dev/stdin", "split", "15672790FxDvQk", "21unRImb", "940048fCrmZX", "513065QwFCbF", "readFileSync", "2942282LmxGfg", "105052YHIsxB", "1976772HVrXRw", "6DNjBLQ", "696NGjlvl"];
  __STRING_ARRAY__ = function () {
    return _0x4f842e;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  'use strict';

  const elements = input["split"]("\n");
  let blackFlag = false;
  let numBlack = 0;
  let numWhiteAfterBlack = 0;
  for (let i = 0; i < elements[0]; i++) {
    if (blackFlag === false && elements[1][i] === "#") {
      blackFlag = true;
    }
    if (blackFlag === true && elements[1][i] === ".") {
      numWhiteAfterBlack++;
    }
    if (elements[1][i] === "#") {
      numBlack++;
    }
  }
  if (numWhiteAfterBlack === 0 && blackFlag === false) {
    console["log"]("0");
  } else if (numWhiteAfterBlack === 0 && blackFlag === true) {
    console.log(numBlack);
  } else if (numBlack <= numWhiteAfterBlack) {
    console["log"](numBlack);
  } else {
    console["log"](numWhiteAfterBlack);
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf-8"));
