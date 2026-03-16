'use strict';

function __STRING_ARRAY__() {
  const _0x57b980 = ["log", "7356330ZJqIlG", "291TuRRln", "69712ZxInFH", "3461919HhVdVB", "1141CHUVQV", "floor", "utf8", "/dev/stdin", "1322BqGWMM", "5142198qBXCnO", "20kXpQhm", "902612fDYwjy", "18190278Bghaiy", "split", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x57b980;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("291TuRRln") / 1 * (parseInt("1322BqGWMM") / 2) + -parseInt("3461919HhVdVB") / 3 + -parseInt("902612fDYwjy") / 4 + -parseInt("7356330ZJqIlG") / 5 + parseInt("5142198qBXCnO") / 6 + -parseInt("1141CHUVQV") / 7 * (parseInt("69712ZxInFH") / 8) + -parseInt("18190278Bghaiy") / 9 * (-parseInt("20kXpQhm") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 820394);
const main = arg => {
  const input = arg["trim"]()["split"]("\n");
  let x = Number(input[0]["split"](" ")[0]);
  if (x % 11 > 6) {
    console["log"](Math["floor"](x / 11) * 2 + 2);
  } else if (x % 11 > 0) {
    console["log"](Math["floor"](x / 11) * 2 + 1);
  } else {
    console.log(Math["floor"](x / 11) * 2);
  }
};
function __DECODE_0__(xWgBtE, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 294;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xWgBtE, key);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
