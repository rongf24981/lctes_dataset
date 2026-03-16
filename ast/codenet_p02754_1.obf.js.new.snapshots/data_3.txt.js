'use strict';

function __DECODE_0__(Xtzeih, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 162;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Xtzeih, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("17zJARSu") / 1 * (-parseInt("11134MxZFSM") / 2) + -parseInt("406515RpvVYW") / 3 + parseInt("275868ULpIMz") / 4 + -parseInt("5KOURqY") / 5 * (parseInt("2119932zAXAuI") / 6) + parseInt("511NydYXY") / 7 * (-parseInt("45624SPbgbQ") / 8) + -parseInt("1440594IeqCxT") / 9 + parseInt("14223370gCcChX") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 331453);
function __STRING_ARRAY__() {
  const _0x5006fc = ["406515RpvVYW", "45624SPbgbQ", "split", "floor", "14223370gCcChX", "2119932zAXAuI", "/dev/stdin", "5KOURqY", "511NydYXY", "utf8", "log", "readFileSync", "275868ULpIMz", "1440594IeqCxT", "11134MxZFSM", "17zJARSu"];
  __STRING_ARRAY__ = function () {
    return _0x5006fc;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  let kari = input[0].trim()["split"](" ");
  let n = parseInt(kari[0]);
  let a = parseInt(kari[1]);
  let b = parseInt(kari[2]);
  let c = a + b;
  let ans = 0;
  if (a === 0) {
    console.log(0);
  } else if (b === 0) {
    console["log"](n);
  } else {
    if (n % c < a) {
      ans = Math["floor"](n / c) * a + n % c;
    } else {
      ans = Math["floor"](n / c) * a + a;
    }
    console["log"](ans);
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8").trim()["split"]("\n"));
