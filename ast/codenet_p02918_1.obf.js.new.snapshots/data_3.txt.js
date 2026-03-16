'use strict';

function __DECODE_0__(mRQZBx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 355;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mRQZBx, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("197210rybilu") / 1 + parseInt("191628pVmdxV") / 2 * (-parseInt("51KWGVYh") / 3) + -parseInt("156CPfeuh") / 4 * (parseInt("21915jNnShw") / 5) + parseInt("10276572StQFFN") / 6 + -parseInt("7lkIYrm") / 7 * (parseInt("1452912KlSdBJ") / 8) + parseInt("2286774djauJi") / 9 + parseInt("6985330jZTsno") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 881202);
function __STRING_ARRAY__() {
  const _0x48397b = ["197210rybilu", "21915jNnShw", "156CPfeuh", "6985330jZTsno", "trim", "191628pVmdxV", "7lkIYrm", "readFileSync", "min", "10276572StQFFN", "2286774djauJi", "split", "/dev/stdin", "utf8", "1452912KlSdBJ", "51KWGVYh"];
  __STRING_ARRAY__ = function () {
    return _0x48397b;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg["trim"]().split("\n");
  const N = parseInt(arg[0]["split"](" ")[0]);
  const K = parseInt(arg[0]["split"](" ")[1]);
  const S = arg[1]["split"]("");
  let alreadyHappy = 0;
  let last;
  for (let i in S) {
    if (last === "L" && S[i] === "L") {
      alreadyHappy++;
    }
    if (last === "R" && S[i] === "R") {
      alreadyHappy++;
    }
    last = S[i];
  }
  console.log(Math["min"](N - 1, alreadyHappy + K * 2));
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
