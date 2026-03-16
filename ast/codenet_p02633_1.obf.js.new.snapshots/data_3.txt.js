'use strict';

function __DECODE_0__(dCljYc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 257;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dCljYc, key);
}
function __STRING_ARRAY__() {
  const _0x4c6e99 = ["335772bAqJPY", "utf8", "8249087vTqjZW", "/dev/stdin", "461617cHAYXv", "898767TKhXFF", "readFileSync", "8XBZlFe", "log", "2667679tOaQXU", "1018630Ajyufb", "3fOoXEt", "2DJpUux", "50TOotaD", "1317654mRAUQS", "replace"];
  __STRING_ARRAY__ = function () {
    return _0x4c6e99;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("461617cHAYXv") / 1 * (parseInt("2DJpUux") / 2) + parseInt("3fOoXEt") / 3 * (parseInt("335772bAqJPY") / 4) + -parseInt("1018630Ajyufb") / 5 + -parseInt("1317654mRAUQS") / 6 + -parseInt("2667679tOaQXU") / 7 * (-parseInt("8XBZlFe") / 8) + parseInt("898767TKhXFF") / 9 * (parseInt("50TOotaD") / 10) + -parseInt("8249087vTqjZW") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 252720);
const main = arg => {
  let X = parseInt(arg);
  let result = 360 / X;
  result = String(result);
  var answer = result["replace"](".", "");
  console["log"](answer);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
