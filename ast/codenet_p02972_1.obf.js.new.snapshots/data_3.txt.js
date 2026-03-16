'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("662775MZsdhW") / 1 + -parseInt("2316976iKlrzV") / 2 + -parseInt("123anwnCz") / 3 * (-parseInt("10204JmNJuG") / 4) + -parseInt("255835vmGCOL") / 5 * (-parseInt("6ZsDhDx") / 6) + parseInt("5625564NtJCqE") / 7 * (parseInt("8xEjvQu") / 8) + parseInt("2295FRVlgd") / 9 * (parseInt("890SmLQuM") / 10) + -parseInt("1544422rjNfRC") / 11 * (-parseInt("132CVMipg") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 705264);
function __STRING_ARRAY__() {
  const _0x5b15b0 = ["255835vmGCOL", "map", "2295FRVlgd", "length", "split", "/dev/stdin", "readFileSync", "890SmLQuM", "5625564NtJCqE", "132CVMipg", "8xEjvQu", "log", "10204JmNJuG", "6ZsDhDx", "123anwnCz", "push", "sqrt", "662775MZsdhW", "join", "forEach", "2316976iKlrzV", "1544422rjNfRC", "UTF-8"];
  __STRING_ARRAY__ = function () {
    return _0x5b15b0;
  };
  return __STRING_ARRAY__();
}
const arg_str = require("fs")["readFileSync"]("/dev/stdin", "UTF-8");
const args = arg_str["split"]("\n");
const N = parseInt(args[0]);
const a_array = args[1]["split"](" ")["map"](x => parseInt(x));
function __DECODE_0__(DfcSSg, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 493;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DfcSSg, key);
}
for (let i = N; i >= 1; i--) {
  let i_n = 0;
  if (i == 1) {
    i_n = N;
  } else {
    i_n = Math["sqrt"](N);
  }
  for (let j = i_n; j >= 1; j--) {
    if (i < j) {
      if (j % i == 0) {
        a_array[i - 1] ^= a_array[j - 1];
      }
    } else {
      continue;
    }
  }
}
const result = [];
a_array["forEach"]((item, index) => {
  if (item == 1) {
    result["push"](index + 1);
  }
});
console["log"](result["length"]);
if (result["length"] > 0) {
  console["log"](result["join"](" "));
}
