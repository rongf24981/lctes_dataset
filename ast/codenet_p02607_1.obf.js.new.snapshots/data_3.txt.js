'use strict';

function __DECODE_0__(YyiSOA, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 178;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YyiSOA, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("409280NiOdJN") / 1 + -parseInt("2863512IpHosm") / 2 + parseInt("4075398RbVrEA") / 3 + parseInt("4zkREuH") / 4 * (parseInt("704020NkQxjF") / 5) + -parseInt("6023184ZIlizB") / 6 + -parseInt("2660399auPhTH") / 7 + parseInt("21220200BZvzwm") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 926838);
function __STRING_ARRAY__() {
  const _0x40bc03 = ["split", "/dev/stdin", "2660399auPhTH", "2863512IpHosm", "4075398RbVrEA", "409280NiOdJN", "21220200BZvzwm", "length", "log", "trim", "readFileSync", "704020NkQxjF", "4zkREuH", "6023184ZIlizB"];
  __STRING_ARRAY__ = function () {
    return _0x40bc03;
  };
  return __STRING_ARRAY__();
}
function main(arg) {
  let a = arg["trim"]().split("\n")[1]["split"](" ").map(Number);
  let N = a["length"];
  let ans = 0;
  for (let i = 0; i < N; i++) {
    if ((i + 1) % 2 === 0) {
      continue;
    }
    if (a[i] % 2 === 0) {
      continue;
    }
    ans++;
  }
  console["log"](ans);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
