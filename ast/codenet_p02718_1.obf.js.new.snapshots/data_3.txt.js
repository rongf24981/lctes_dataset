'use strict';

function __STRING_ARRAY__() {
  const _0x19495c = ["20FMvvnv", "222165BhlCUE", "12784bpgACr", "1679325BhKKyF", "split", "33lsPzMd", "utf8", "/dev/stdin", "log", "1280052HVeKPd", "751770CTXSrh", "52145QdzaRk", "1092wWleSM", "Yes", "3453560PnEMxN", "6tcyxZk"];
  __STRING_ARRAY__ = function () {
    return _0x19495c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("52145QdzaRk") / 1 * (parseInt("6tcyxZk") / 2) + -parseInt("222165BhlCUE") / 3 * (parseInt("20FMvvnv") / 4) + -parseInt("1679325BhKKyF") / 5 + -parseInt("751770CTXSrh") / 6 + parseInt("1092wWleSM") / 7 * (-parseInt("12784bpgACr") / 8) + parseInt("1280052HVeKPd") / 9 + parseInt("3453560PnEMxN") / 10 * (parseInt("33lsPzMd") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 254008);
function __DECODE_0__(CuVVYa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 256;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CuVVYa, key);
}
function main(input) {
  const n = Number(input["split"]("\n")[0].split(" ")[0]);
  const m = Number(input["split"]("\n")[0]["split"](" ")[1]);
  let a = [];
  let sum = 0;
  for (let index = 0; index < n; index++) {
    a[index] = input["split"]("\n")[1]["split"](" ")[index];
    sum += Number(a[index]);
  }
  let count = 0;
  for (let index = 0; index < n; index++) {
    if (a[index] * (m * 4) - sum > 0) {
      count++;
    }
  }
  if (count >= m) {
    console["log"]("Yes");
  } else {
    console["log"]("No");
  }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
