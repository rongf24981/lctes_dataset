function __STRING_ARRAY__() {
  const _0x5a2d2b = ["2565120MpjGXg", "282TAsoAu", "2259513qPQBHV", "27986TLsFNe", "4168wiKAOY", "8XDjkEE", "forEach", "1177236KNMUUo", "readFileSync", "map", "utf8", "2335800VMlkwQ", "68ZBcrUs", "/dev/stdin", "1398528kpYbAv", "split"];
  __STRING_ARRAY__ = function () {
    return _0x5a2d2b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("4168wiKAOY") / 1 * (parseInt("68ZBcrUs") / 2) + -parseInt("1398528kpYbAv") / 3 + -parseInt("1177236KNMUUo") / 4 + parseInt("2565120MpjGXg") / 5 + -parseInt("282TAsoAu") / 6 * (-parseInt("27986TLsFNe") / 7) + parseInt("8XDjkEE") / 8 * (parseInt("2259513qPQBHV") / 9) + parseInt("2335800VMlkwQ") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 283370);
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
const arr = input.split(/\n/);
const numbers = arr[1]["split"](" ")["map"](Number);
let min = numbers[0];
function __DECODE_0__(XkErVX, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 304;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XkErVX, key);
}
let max = numbers[0];
let sum = 0;
numbers["forEach"](number => {
  if (min > number) {
    min = number;
  }
  if (max < number) {
    max = number;
  }
  sum += number;
});
console.log(min + " " + max + " " + sum);
