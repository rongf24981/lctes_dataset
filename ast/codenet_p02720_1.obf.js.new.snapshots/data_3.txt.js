'use strict';

function __DECODE_0__(utQyxs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 460;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(utQyxs, key);
}
function __STRING_ARRAY__() {
  const _0x3323f9 = ["1966959VRbsyb", "6IWIbij", "404FHCjdu", "754142AVbNWX", "log", "10XVmxuS", "utf8", "readFileSync", "647383wpwpDo", "1MRHLtT", "24GCrsii", "abs", "length", "join", "56335YDAAQB", "1548KigZaM", "293033dNELdi", "4898313izWXRj", "1872489SISplt", "trim", "split"];
  __STRING_ARRAY__ = function () {
    return _0x3323f9;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1MRHLtT") / 1 * (parseInt("754142AVbNWX") / 2) + parseInt("1872489SISplt") / 3 + -parseInt("404FHCjdu") / 4 * (parseInt("56335YDAAQB") / 5) + -parseInt("6IWIbij") / 6 * (parseInt("4898313izWXRj") / 7) + parseInt("24GCrsii") / 8 * (-parseInt("1966959VRbsyb") / 9) + parseInt("10XVmxuS") / 10 * (-parseInt("647383wpwpDo") / 11) + -parseInt("1548KigZaM") / 12 * (-parseInt("293033dNELdi") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 602649);
function main(input) {
  const k = parseInt(input[0]);
  let i = 1;
  let runruncounter = 0;
  while (true) {
    const j = (i + "")["split"]("").map(a => parseInt(a));
    let judge = true;
    for (let l = 1; l < j["length"]; l++) {
      if (Math["abs"](j[l] - j[l - 1]) > 1) {
        judge = false;
        if (j[l] === 9) {
          j[l - 1] += 1;
          j[l] = 0;
        } else {
          j[l] += 1;
        }
        i = parseInt(j["join"](""));
        break;
      }
    }
    if (judge) {
      runruncounter++;
      if (runruncounter === k) {
        console["log"](i);
        break;
      }
      i++;
    }
  }
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]().split("\n"));
