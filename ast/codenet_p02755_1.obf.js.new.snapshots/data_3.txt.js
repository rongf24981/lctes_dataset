'use strict';

function __STRING_ARRAY__() {
  const _0x10c2e0 = ["6lSZnRy", "136ieSHLL", "/dev/stdin", "trim", "14625559FiBPga", "554309UmYqaT", "33UvizRB", "309070NSnink", "utf8", "7959130aUQFOP", "split", "72RvXfom", "28DkAdXa", "3YczFPZ", "2qzCMYY", "5946336QVJQnB", "log", "floor", "readFileSync", "6184184MZxhjO", "398423FDbVIY"];
  __STRING_ARRAY__ = function () {
    return _0x10c2e0;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(rIyIhc, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 331;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rIyIhc, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("398423FDbVIY") / 1 * (-parseInt("2qzCMYY") / 2) + -parseInt("3YczFPZ") / 3 * (-parseInt("6184184MZxhjO") / 4) + parseInt("7959130aUQFOP") / 5 * (parseInt("6lSZnRy") / 6) + parseInt("554309UmYqaT") / 7 * (parseInt("136ieSHLL") / 8) + parseInt("72RvXfom") / 9 * (-parseInt("309070NSnink") / 10) + -parseInt("33UvizRB") / 11 * (parseInt("5946336QVJQnB") / 12) + -parseInt("14625559FiBPga") / 13 * (parseInt("28DkAdXa") / 14);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 898548);
const main = arg => {
  arg = arg["trim"]().split("\n");
  const A = parseInt(arg[0]["split"](" ")[0]);
  const B = parseInt(arg[0]["split"](" ")[1]);
  for (let i = 1; i <= 10000; i++) {
    const temp1 = Math["floor"](i * 0.08);
    const temp2 = Math.floor(i * 0.1);
    if (temp1 === A && temp2 === B) {
      console.log(i);
      return;
    }
  }
  console["log"](-1);
};
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
