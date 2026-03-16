(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("5189CjaXDQ") / 1 * (-parseInt("614zsTmei") / 2) + -parseInt("15903JUEzcl") / 3 * (-parseInt("448EKIUQc") / 4) + -parseInt("8752340EpLEZw") / 5 * (-parseInt("6iVYWrR") / 6) + parseInt("10489514AnsrZZ") / 7 + -parseInt("16oRJNJx") / 8 * (-parseInt("2729817MSnTaA") / 9) + parseInt("7007130LkNcGb") / 10 + -parseInt("64269117FyhuLY") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 900397);
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
const numbers = input["split"](" ");
function __DECODE_0__(LYmzlH, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 303;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LYmzlH, key);
}
let sum = 0;
function __STRING_ARRAY__() {
  const _0x1f42fd = ["readFileSync", "forEach", "15903JUEzcl", "8752340EpLEZw", "64269117FyhuLY", "614zsTmei", "10489514AnsrZZ", "16oRJNJx", "7007130LkNcGb", "utf8", "6iVYWrR", "5189CjaXDQ", "split", "length", "2729817MSnTaA", "448EKIUQc"];
  __STRING_ARRAY__ = function () {
    return _0x1f42fd;
  };
  return __STRING_ARRAY__();
}
numbers["forEach"](function (number) {
  sum += Number(number);
});
console.log(Math.ceil(sum / numbers["length"]));
