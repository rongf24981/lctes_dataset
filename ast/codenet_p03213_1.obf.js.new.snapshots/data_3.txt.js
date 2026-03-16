'use strict';

function __STRING_ARRAY__() {
  const _0x464b3e = ["520290VyWWhz", "1059612JJobaK", "utf8", "242690mAFbLS", "fill", "1349744EbpiDH", "split", "12FIVExy", "reduce", "157668NsvtTE", "/dev/stdin", "36463kkNawq", "10EpUfUV", "63iTYzRg", "433140ZqvIxl"];
  __STRING_ARRAY__ = function () {
    return _0x464b3e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("36463kkNawq") / 1 * (-parseInt("10EpUfUV") / 2) + -parseInt("1059612JJobaK") / 3 + parseInt("12FIVExy") / 4 * (parseInt("520290VyWWhz") / 5) + parseInt("433140ZqvIxl") / 6 + -parseInt("157668NsvtTE") / 7 + -parseInt("1349744EbpiDH") / 8 + parseInt("63iTYzRg") / 9 * (parseInt("242690mAFbLS") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 192116);
function __DECODE_0__(yfZifD, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 296;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yfZifD, key);
}
function Main(input) {
  const N = input["split"]("\n")[0] - 0;
  let e = new Array(N + 1)["fill"](0);
  for (let i = 2; i <= N; i++) {
    let cur = i;
    for (let j = 2; j <= i; j++) {
      while (cur % j == 0) {
        e[j] += 1;
        cur /= j;
      }
    }
  }
  const num = m => e["reduce"]((ac, x) => ac + (x >= m - 1 ? 1 : 0), 0);
  let l75 = num(75);
  let l25 = num(25);
  let l15 = num(15);
  let l5 = num(5);
  let l3 = num(3);
  let r5x5x3 = l5 * (l5 - 1) * (l3 - 2) / 2;
  let r15x5 = l15 * (l5 - 1);
  let r25x3 = l25 * (l3 - 1);
  let r75 = l75;
  console.log(r75 + r25x3 + r15x5 + r5x5x3);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
