'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("89486zkoCTu") / 1 + -parseInt("395288YsMLsu") / 2 + parseInt("63UDizko") / 3 * (parseInt("24816YjEdmj") / 4) + parseInt("1222380HXUHdE") / 5 + parseInt("30IAkvBZ") / 6 * (-parseInt("295435qvqCMv") / 7) + parseInt("375272sVKMWU") / 8 * (-parseInt("9YjFldI") / 9) + parseInt("1466820IpTggM") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 155350);
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]()["split"](" ").map(x => x * 1);
let ans = 0;
function __STRING_ARRAY__() {
  const _0x581ac1 = ["readFileSync", "1466820IpTggM", "30IAkvBZ", "375272sVKMWU", "89486zkoCTu", "split", "63UDizko", "295435qvqCMv", "9YjFldI", "24816YjEdmj", "/dev/stdin", "1222380HXUHdE", "log", "395288YsMLsu", "trim"];
  __STRING_ARRAY__ = function () {
    return _0x581ac1;
  };
  return __STRING_ARRAY__();
}
let max = input[1];
let div = input[0];
let tmpNum = div;
while (tmpNum < max + 1) {
  tmpNum *= 2;
  ans++;
}
function __DECODE_0__(NKjdkq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 334;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NKjdkq, key);
}
console["log"](ans);
