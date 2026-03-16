'use strict';

function __DECODE_0__(wGNfFU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 187;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wGNfFU, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("175lWCMEl") / 1 * (parseInt("330OfTPFL") / 2) + -parseInt("372924AyaRJw") / 3 + -parseInt("6701096BMGWIv") / 4 + -parseInt("9074835XhaPsG") / 5 + parseInt("929256LpmSMK") / 6 * (-parseInt("49CZDTal") / 7) + -parseInt("368bwGjVt") / 8 * (parseInt("175986RaDSsO") / 9) + -parseInt("10CAtgXM") / 10 * (-parseInt("72106595bMthNt") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 928105);
function __STRING_ARRAY__() {
  const _0x54bc80 = ["10CAtgXM", "shift", "929256LpmSMK", "6701096BMGWIv", "9074835XhaPsG", "372924AyaRJw", "49CZDTal", "utf8", "/dev/stdin", "readFileSync", "map", "368bwGjVt", "log", "175lWCMEl", "330OfTPFL", "72106595bMthNt", "175986RaDSsO"];
  __STRING_ARRAY__ = function () {
    return _0x54bc80;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  input = input.split(/\n/);
  const n = ~~input["shift"]();
  input = input["map"](v => v.split(/\s/)["map"](x => ~~x));
  let ans = "";
  for (let i = 0; i < input.length; i++) {
    let time = 0;
    let wait = 0;
    for (let j = i; j < input.length; j++) {
      time += time > input[j][1] ? 0 : input[j][1] - time;
      time += input[j][0];
    }
    ans += time + "\n";
  }
  ans += "0\n";
  console["log"](ans);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
