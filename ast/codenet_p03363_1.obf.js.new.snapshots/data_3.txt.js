'use strict';

function __STRING_ARRAY__() {
  const _0x5adada = ["2BryjwS", "keys", "51828UIAcPs", "1370076EwLmst", "700288zSiVWK", "map", "1293935fdQtvm", "utf8", "fill", "1009869DJdeoR", "5571632LLNpQg", "trim", "82989ZlUAMQ", "forEach", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x5adada;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("51828UIAcPs") / 1 + parseInt("2BryjwS") / 2 * (parseInt("82989ZlUAMQ") / 3) + -parseInt("700288zSiVWK") / 4 + -parseInt("1293935fdQtvm") / 5 + -parseInt("1370076EwLmst") / 6 + parseInt("1009869DJdeoR") / 7 + parseInt("5571632LLNpQg") / 8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 154351);
function __DECODE_0__(fvicSF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 197;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fvicSF, key);
}
const main = arg => {
  arg = arg["trim"]().split("\n");
  const N = arg[0] * 1;
  const nums = arg[1].split(" ")["map"](x => x * 1);
  const totalSum = new Array(N)["fill"](0);
  for (let i = 0; i < N; i++) {
    totalSum[i] += (totalSum[i - 1] || 0) + nums[i];
  }
  let accumObj = {
    0: 1
  };
  for (let i = 0; i < N; i++) {
    accumObj[totalSum[i]] = (accumObj[totalSum[i]] || 0) + 1;
  }
  let ans = 0;
  Object["keys"](accumObj)["forEach"](x => {
    ans += accumObj[x] * (accumObj[x] - 1) / 2;
  });
  console.log(ans);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
