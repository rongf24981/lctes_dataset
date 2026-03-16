'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("384827ApbxaE") / 1 + -parseInt("1105392TVFsfp") / 2 + parseInt("915099xxTvNm") / 3 + parseInt("1609056hASneE") / 4 + -parseInt("38665uyKWNm") / 5 * (-parseInt("60YisYvt") / 6) + parseInt("687666kaFuLV") / 7 + -parseInt("3494712IwxEtP") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 278157);
function __DECODE_0__(fWAEek, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 458;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fWAEek, key);
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var cin = input["split"](/ |\n/);
var cid = 0;
var myOut = main();
if (myOut !== undefined) {
  console["log"](myOut);
}
function main() {
  let n = +cin.shift();
  let B = {};
  let C = {};
  cin.forEach((v, i) => {
    let x = +v;
    B[String(i + x)] = B[String(i + x)] + 1 || 1;
    C[String(i - x)] = C[String(i - x)] + 1 || 1;
  });
  let keys = Object["keys"](B);
  let ans = 0;
  keys["forEach"](i => {
    ans += B[i] * C[i] || 0;
  });
  return ans;
}
function __STRING_ARRAY__() {
  const _0x1f45bb = ["3494712IwxEtP", "915099xxTvNm", "60YisYvt", "687666kaFuLV", "split", "1609056hASneE", "384827ApbxaE", "keys", "38665uyKWNm", "forEach", "/dev/stdin", "readFileSync", "log", "1105392TVFsfp"];
  __STRING_ARRAY__ = function () {
    return _0x1f45bb;
  };
  return __STRING_ARRAY__();
}
