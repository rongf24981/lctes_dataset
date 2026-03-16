'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("5ZeOpZF") / 1 * (-parseInt("75222SMbnHI") / 2) + -parseInt("549411CZnxef") / 3 + parseInt("445544RmNBfy") / 4 + parseInt("110MjirOY") / 5 * (parseInt("38604HgOXLE") / 6) + parseInt("1876714BZTBxJ") / 7 + -parseInt("1262848SjRcsi") / 8 + parseInt("36Oboegv") / 9 * (-parseInt("520860PVqMDs") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 159754);
const input = require("fs").readFileSync("/dev/stdin", "utf8")["split"]("\n");
let ws = new Set();
function __DECODE_0__(qYflAC, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 370;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qYflAC, key);
}
let prev = null;
function __STRING_ARRAY__() {
  const _0x109c75 = ["1876714BZTBxJ", "slice", "add", "520860PVqMDs", "36Oboegv", "/dev/stdin", "has", "445544RmNBfy", "substr", "110MjirOY", "5ZeOpZF", "split", "log", "Yes", "75222SMbnHI", "38604HgOXLE", "utf8", "549411CZnxef", "1262848SjRcsi"];
  __STRING_ARRAY__ = function () {
    return _0x109c75;
  };
  return __STRING_ARRAY__();
}
console["log"]((() => {
  for (const w of input["slice"](1, parseInt(input[0]) + 1)) {
    if (prev && prev != w[0]) {
      return "No";
    }
    if (ws["has"](w)) {
      return "No";
    }
    ws["add"](w);
    prev = w["substr"](-1);
  }
  return "Yes";
})());
