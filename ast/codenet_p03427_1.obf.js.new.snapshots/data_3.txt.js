'use strict';

function __DECODE_0__(VOApbZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 264;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VOApbZ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("67NHRXFW") / 1 * (-parseInt("8994BKnnHt") / 2) + -parseInt("3433332ujqzYx") / 3 + parseInt("3281012JvoBtk") / 4 + -parseInt("5SmVHhF") / 5 * (-parseInt("5184150TTxeWC") / 6) + parseInt("112HHUgYU") / 7 * (parseInt("434792BMrMDq") / 8) + parseInt("3366891OyTGzk") / 9 + -parseInt("13966530LibIsw") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 688163);
function __STRING_ARRAY__() {
  const _0x2f110e = ["13966530LibIsw", "log", "67NHRXFW", "112HHUgYU", "5SmVHhF", "8994BKnnHt", "readFileSync", "3433332ujqzYx", "split", "length", "434792BMrMDq", "5184150TTxeWC", "utf8", "3366891OyTGzk", "3281012JvoBtk"];
  __STRING_ARRAY__ = function () {
    return _0x2f110e;
  };
  return __STRING_ARRAY__();
}
const main = input => {
  const lines = input["split"]("\n");
  if (lines[0].length === 1) {
    console.log(lines[0]);
    return;
  }
  const len9 = lines[0]["length"] - 1;
  const head = parseInt(lines[0][0]) - 1;
  console["log"](head + len9 * 9);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
