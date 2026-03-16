'use strict';

function __STRING_ARRAY__() {
  const _0x180a48 = ["2089qDgSUb", "length", "48vmyjKO", "3620CBODFL", "trim", "readFileSync", "utf8", "12852917kNIeQY", "165VfrNhn", "2331dwlNIw", "log", "764qVLXRc", "1842127uCfCYD", "134694xcUABa", "35810LRLkSB", "split", "315240CVRdWK"];
  __STRING_ARRAY__ = function () {
    return _0x180a48;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(cIzOwP, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 482;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cIzOwP, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("2089qDgSUb") / 1 * (parseInt("764qVLXRc") / 2) + -parseInt("48vmyjKO") / 3 * (parseInt("3620CBODFL") / 4) + -parseInt("165VfrNhn") / 5 * (-parseInt("134694xcUABa") / 6) + parseInt("1842127uCfCYD") / 7 + parseInt("315240CVRdWK") / 8 + parseInt("2331dwlNIw") / 9 * (-parseInt("35810LRLkSB") / 10) + parseInt("12852917kNIeQY") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 471873);
const main = arg => {
  const times = arg["trim"]().split("\n").map(n => parseInt(n));
  let min = 10;
  let sum = 0;
  for (let i = 0; i < times["length"]; i++) {
    let digitOne = String(times[i])["split"]("");
    digitOne = parseInt(digitOne[digitOne["length"] - 1]);
    let digitMinus = 10 - digitOne;
    sum += parseInt(times[i]);
    if (digitMinus !== 10) {
      sum += digitMinus;
    }
    if (digitMinus !== 10 && digitOne < min) {
      min = digitOne;
    }
  }
  console["log"](parseInt(sum - (10 - min)));
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
