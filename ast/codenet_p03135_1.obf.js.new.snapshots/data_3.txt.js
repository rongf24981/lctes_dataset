function __STRING_ARRAY__() {
  const _0x3eead8 = ["toFixed", "trim", "8538912ZKdKrP", "/dev/stdin", "31186062qiWWkb", "7XUSyBB", "6090112PZiTzg", "log", "260235SCEtge", "785609ZnZmQO", "readFileSync", "4437825seqwki", "map", "11963704gGuSJC", "split", "2VFEFXB", "utf8"];
  __STRING_ARRAY__ = function () {
    return _0x3eead8;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(gNLopo, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 391;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gNLopo, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("785609ZnZmQO") / 1 * (-parseInt("2VFEFXB") / 2) + -parseInt("260235SCEtge") / 3 + parseInt("6090112PZiTzg") / 4 + -parseInt("4437825seqwki") / 5 + parseInt("8538912ZKdKrP") / 6 + -parseInt("7XUSyBB") / 7 * (-parseInt("11963704gGuSJC") / 8) + -parseInt("31186062qiWWkb") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 787324);
function main(input) {
  const nums = input["trim"]()["split"](/\s/)["map"](str => {
    return Number(str);
  });
  console["log"]((nums[0] / nums[1])["toFixed"](10));
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
