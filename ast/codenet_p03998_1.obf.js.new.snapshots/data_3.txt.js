'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("20269xdSVwd") / 1 + -parseInt("741290UylYjs") / 2 + parseInt("4196445UkwlEk") / 3 + parseInt("665104oIpvix") / 4 + parseInt("1367070KOuplB") / 5 * (-parseInt("24yRFxLG") / 6) + parseInt("7553AotTkd") / 7 * (-parseInt("1744qVafgr") / 8) + -parseInt("18wZvgTD") / 9 * (-parseInt("4675210agTaiV") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 820879);
function __STRING_ARRAY__() {
  const _0x2c8a77 = ["1367070KOuplB", "18wZvgTD", "24yRFxLG", "utf8", "665104oIpvix", "4675210agTaiV", "20269xdSVwd", "shift", "readFileSync", "4196445UkwlEk", "741290UylYjs", "/dev/stdin", "7553AotTkd", "split", "1744qVafgr", "toUpperCase"];
  __STRING_ARRAY__ = function () {
    return _0x2c8a77;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  const input = arg.trim()["split"]("\n");
  let a = input[0]["split"]("");
  let b = input[1].split("");
  let c = input[2]["split"]("");
  function shiftCard(man) {
    let out = eval(man)["shift"]();
    if (out === undefined) {
      console.log(man["toUpperCase"]());
      return;
    }
    shiftCard(out);
  }
  shiftCard("a");
};
function __DECODE_0__(LYUKPU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 116;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LYUKPU, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
