'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("2GuenZt") / 1 * (-parseInt("2202mvFhqR") / 2) + -parseInt("1037520yIrOEE") / 3 + parseInt("16nobqoz") / 4 * (-parseInt("88940NeiCGD") / 5) + -parseInt("2196828wboUoB") / 6 + -parseInt("3327835WVGijT") / 7 + -parseInt("425680FugBiP") / 8 * (parseInt("135kWORfP") / 9) + parseInt("12371840aXwGrL") / 10 * (parseInt("22ucILoM") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 419885);
function main(s) {
  s = s.split("\n");
  const K = Number(s[0]["split"](" ")[1]);
  const balls = s[1]["split"](" ")["map"](el => Number(el));
  const countBucket = [...Array(200001)]["fill"](0);
  for (const num of balls) {
    countBucket[num] += 1;
  }
  countBucket["sort"]((a, b) => b - a);
  const answer = countBucket["slice"](K)["reduce"]((a, b) => a + b);
  console.log(answer);
}
function __STRING_ARRAY__() {
  const _0xd0dae3 = ["utf8", "135kWORfP", "fill", "sort", "12371840aXwGrL", "3327835WVGijT", "425680FugBiP", "split", "22ucILoM", "reduce", "map", "readFileSync", "slice", "2GuenZt", "/dev/stdin", "2202mvFhqR", "16nobqoz", "1037520yIrOEE", "2196828wboUoB", "88940NeiCGD"];
  __STRING_ARRAY__ = function () {
    return _0xd0dae3;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(dYkXeR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 466;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dYkXeR, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
