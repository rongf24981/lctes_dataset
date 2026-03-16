'use strict';

function __STRING_ARRAY__() {
  const _0x3dfa2d = ["length", "reduce", "60694bVhhtC", "data", "map", "325144DvfNyn", "split", "stdin", "1318944keesNn", "log", "391027UsvTzb", "trim", "setEncoding", "1085405CJPqQn", "resume", "keys", "531801NbiVhh", "3vwVJxW", "end", "6dUeNVm", "234911cvTNGU"];
  __STRING_ARRAY__ = function () {
    return _0x3dfa2d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("234911cvTNGU") / 1 + -parseInt("60694bVhhtC") / 2 + -parseInt("3vwVJxW") / 3 * (-parseInt("325144DvfNyn") / 4) + parseInt("1085405CJPqQn") / 5 + parseInt("6dUeNVm") / 6 * (-parseInt("391027UsvTzb") / 7) + -parseInt("1318944keesNn") / 8 + -parseInt("531801NbiVhh") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 223113);
function main(n, array) {
  let counter = {};
  for (let a of array) {
    counter[a] = counter[a] || 0;
    counter[a]++;
  }
  let nums = Object["keys"](counter);
  let evenCount = nums["reduce"]((count, num) => {
    if (counter[num] % 2 === 0) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
  let answer;
  if (evenCount % 2 === 0) {
    answer = nums["length"];
  } else {
    answer = nums["length"] - 1;
  }
  console["log"](answer);
}
function __DECODE_0__(VcwVCF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 182;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VcwVCF, key);
}
function doMain() {
  let input = "";
  process["stdin"]["resume"]();
  process["stdin"]["setEncoding"]("utf8");
  process.stdin.on("data", chunk => {
    input += chunk;
  });
  process.stdin.on("end", () => {
    input = input["trim"]()["split"]("\n");
    let n = Number(input[0]);
    let array = input[1].split(" ")["map"](a => Number(a));
    main(n, array);
  });
}
doMain();
