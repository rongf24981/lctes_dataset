'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1623129mGqHao") / 1 + -parseInt("12kksvFJ") / 2 * (-parseInt("745971fTTcJr") / 3) + parseInt("2373176LXCKcC") / 4 + -parseInt("10030CzTPNF") / 5 * (parseInt("810UmPFyU") / 6) + parseInt("8298255pUuQfE") / 7 + -parseInt("13635184LuGDNh") / 8 * (-parseInt("9UdVFtP") / 9) + parseInt("1500NUmfPN") / 10 * (-parseInt("393305lEoPqA") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 964168);
function __DECODE_0__(nDGAgY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 213;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nDGAgY, key);
}
function main(input) {
  var line = input["split"](" ");
  console.log(line[2] + " " + line[0] + " " + line[1]);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  var _0x3d725c = ["split", "9UdVFtP", "12kksvFJ", "745971fTTcJr", "1623129mGqHao", "810UmPFyU", "10030CzTPNF", "/dev/stdin", "2373176LXCKcC", "13635184LuGDNh", "393305lEoPqA", "utf8", "1500NUmfPN", "8298255pUuQfE"];
  __STRING_ARRAY__ = function () {
    return _0x3d725c;
  };
  return __STRING_ARRAY__();
}
