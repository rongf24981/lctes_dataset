'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1227800IfDjiw") / 1 + parseInt("592436KQvNEP") / 2 * (-parseInt("3qxNhQB") / 3) + parseInt("16jZYtYg") / 4 * (parseInt("130715qDJSfD") / 5) + -parseInt("5125224syxISx") / 6 + parseInt("6358233JCWyWa") / 7 + -parseInt("267144IvXbtX") / 8 * (parseInt("153qGNSLV") / 9) + -parseInt("5810tMuMXF") / 10 * (-parseInt("48994dnaXxR") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 654762);
function __DECODE_0__(jwIetI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 367;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jwIetI, key);
}
function __STRING_ARRAY__() {
  const _0x178dbb = ["153qGNSLV", "substr", "3qxNhQB", "5125224syxISx", "length", "log", "1227800IfDjiw", "6358233JCWyWa", "/dev/stdin", "16jZYtYg", "592436KQvNEP", "readFileSync", "utf8", "267144IvXbtX", "48994dnaXxR", "130715qDJSfD", "split", "5810tMuMXF"];
  __STRING_ARRAY__ = function () {
    return _0x178dbb;
  };
  return __STRING_ARRAY__();
}
const is_palindrome = s => {
  let n = s["length"];
  for (let i = 0; i < n; i++) {
    if (s[i] !== s[n - i - 1]) {
      return false;
    }
  }
  return true;
};
const main = input => {
  const spi = input["split"]("\n");
  const s = spi[0];
  const n = s["length"];
  if (is_palindrome(s) && is_palindrome(s.substring(0, (n - 1) / 2)) && is_palindrome(s["substr"]((n + 3) / 2 - 1))) {
    console.log("Yes");
  } else {
    console["log"]("No");
  }
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
