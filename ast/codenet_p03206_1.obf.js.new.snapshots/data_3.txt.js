'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("41754nTDzJO") / 1 * (-parseInt("26wowMXK") / 2) + parseInt("18sjBrLK") / 3 * (parseInt("518084aOxUgI") / 4) + -parseInt("5WcdRwx") / 5 * (parseInt("1422534lnObBN") / 6) + parseInt("11868829sPYJUg") / 7 + -parseInt("32168BGwqml") / 8 * (-parseInt("3186ianZZJ") / 9) + parseInt("5056490UdmDFk") / 10 + -parseInt("28861877iHkvlZ") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 998058);
function __STRING_ARRAY__() {
  const _0x26a459 = ["26wowMXK", "Eve Eve", "11868829sPYJUg", "41754nTDzJO", "18sjBrLK", "5056490UdmDFk", "28861877iHkvlZ", "/dev/stdin", "Eve Eve Eve", "1422534lnObBN", "3186ianZZJ", "readFileSync", "32168BGwqml", "5WcdRwx", "518084aOxUgI"];
  __STRING_ARRAY__ = function () {
    return _0x26a459;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(lYONEM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 414;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(lYONEM, key);
}
const i = require("fs")["readFileSync"]("/dev/stdin", "utf8");
let r = "Christmas ";
switch (i) {
  case "22":
    r = r + "Eve Eve Eve";
    break;
  case "23":
    r = r + "Eve Eve";
    break;
  case "24":
    r = r + "Eve";
    break;
  case "25":
    r = r;
    break;
}
console.log(r);
