function __STRING_ARRAY__() {
  const _0x51f8cd = ["a == b", "map", "18TZxFnt", "160NdlfNm", "9ctkUmj", "24jVMjDZ", "a < b", "log", "utf-8", "3025MVFvCa", "3552OIKCIo", "a > b", "333012HXqPTx", "375126iyxCFO", "210258QcAbTL", "690949JdXaIT", "/dev/stdin", "23985DrIPqV", "split", "404704IMtshw"];
  __STRING_ARRAY__ = function () {
    return _0x51f8cd;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(FDaUsw, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 486;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FDaUsw, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("375126iyxCFO") / 1 + parseInt("333012HXqPTx") / 2 + -parseInt("9ctkUmj") / 3 * (parseInt("404704IMtshw") / 4) + parseInt("23985DrIPqV") / 5 * (-parseInt("18TZxFnt") / 6) + parseInt("690949JdXaIT") / 7 * (parseInt("24jVMjDZ") / 8) + parseInt("210258QcAbTL") / 9 * (-parseInt("160NdlfNm") / 10) + -parseInt("3025MVFvCa") / 11 * (-parseInt("3552OIKCIo") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 227442);
function main(input) {
  let nums = input["split"](" ")["map"](item => parseInt(item));
  if (nums[0] > nums[1]) {
    console.log("a > b");
  } else if (nums[0] < nums[1]) {
    console["log"]("a < b");
  } else {
    console["log"]("a == b");
  }
}
main(require("fs").readFileSync("/dev/stdin", "utf-8"));
