'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1UNIJPE") / 1 * (-parseInt("255470bMVZAw") / 2) + -parseInt("650763Yxsdrt") / 3 + parseInt("628808DlDdii") / 4 * (-parseInt("5ZFqmlg") / 5) + parseInt("14076nmGqpZ") / 6 * (-parseInt("721Rymlgo") / 7) + -parseInt("414728NkLaNR") / 8 * (-parseInt("18JhRyiv") / 9) + parseInt("2620150zUHVXx") / 10 + -parseInt("1436842rmXjGx") / 11 * (-parseInt("48FeFoxH") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 144689);
function __STRING_ARRAY__() {
  const _0x8a3b6d = ["255470bMVZAw", "reduce", "/dev/stdin", "utf8", "sort", "1UNIJPE", "split", "readFileSync", "splice", "721Rymlgo", "414728NkLaNR", "1436842rmXjGx", "5ZFqmlg", "48FeFoxH", "650763Yxsdrt", "2620150zUHVXx", "length", "18JhRyiv", "628808DlDdii", "14076nmGqpZ"];
  __STRING_ARRAY__ = function () {
    return _0x8a3b6d;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  const args = input["split"]("\n");
  const K = parseInt(args[0]["split"](" ")[1]);
  const H = args[1]["split"](" ");
  var ans = H["sort"]()["splice"](0, H["length"] - K)["reduce"]((a, x) => a + parseInt(x), 0);
  console.log(ans);
}
function __DECODE_0__(wsTroT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 449;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wsTroT, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
