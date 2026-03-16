'use strict';

function __STRING_ARRAY__() {
  const _0x4c1bf0 = ["2112150ZkogOa", "/dev/stdin", "split", "72399iXguaA", "1262176bnFSGj", "90qINvkt", "indexOf", "11144480mzXqwS", "102JftJMr", "length", "utf8", "readFileSync", "212455tfpvMK", "shift", "trim", "409320mCAeFh", "968380AbYjtj", "map", "min", "apply", "104zfzaKr"];
  __STRING_ARRAY__ = function () {
    return _0x4c1bf0;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(pFdqyT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 440;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pFdqyT, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("409320mCAeFh") / 1 + -parseInt("102JftJMr") / 2 * (parseInt("72399iXguaA") / 3) + -parseInt("104zfzaKr") / 4 * (-parseInt("212455tfpvMK") / 5) + parseInt("2112150ZkogOa") / 6 + -parseInt("968380AbYjtj") / 7 + parseInt("1262176bnFSGj") / 8 * (parseInt("90qINvkt") / 9) + -parseInt("11144480mzXqwS") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 960260);
(function (input) {
  input = input["trim"]()["split"](/\s+/)["map"](x => x - 0);
  const N = input["shift"]();
  const a = input;
  var ans = 0;
  while (a["length"] > 1) {
    let x = a.splice(a["indexOf"](Math["min"].apply(null, a)), 1)[0];
    let y = a.splice(a["indexOf"](Math["min"]["apply"](null, a)), 1)[0];
    a.push(x + y);
    ans += x + y;
  }
  console.log(ans);
})(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
