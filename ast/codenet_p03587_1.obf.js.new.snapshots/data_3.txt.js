'use strict';

function __STRING_ARRAY__() {
  const _0x35137b = ["length", "/dev/stdin", "trim", "1358054wPIyzK", "split", "5709264RjhBJI", "233076PkaKPY", "371284zLWRXu", "6EctLmd", "7695234NBEYWm", "35abcHQI", "8761487chfFmn", "10MKubVq", "9452385RmyZhW", "readFileSync", "filter"];
  __STRING_ARRAY__ = function () {
    return _0x35137b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1358054wPIyzK") / 1 + -parseInt("233076PkaKPY") / 2 * (parseInt("6EctLmd") / 3) + -parseInt("371284zLWRXu") / 4 * (-parseInt("35abcHQI") / 5) + parseInt("7695234NBEYWm") / 6 + -parseInt("8761487chfFmn") / 7 + parseInt("5709264RjhBJI") / 8 + -parseInt("9452385RmyZhW") / 9 * (-parseInt("10MKubVq") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 853438);
const main = arg => {
  arg = arg["trim"]().split("\n");
  const S = arg[0]["split"]("");
  console.log(S["filter"](n => n === "1")["length"]);
};
function __DECODE_0__(wtjJpq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 127;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wtjJpq, key);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
