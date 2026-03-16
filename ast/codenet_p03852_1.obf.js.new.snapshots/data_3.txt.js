function __DECODE_0__(YKMkfT, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 294;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YKMkfT, key);
}
function __STRING_ARRAY__() {
  const _0x4df488 = ["1208088zQkHNQ", "indexOf", "utf8", "254nhJZir", "5NSbGAy", "/dev/stdin", "3497508YZfUtc", "readFileSync", "aeiou", "3579762yZjaEH", "21DwsSzZ", "471208oijaDq", "vowel", "1667943HQqQBb", "4047YjUdbE", "consonant", "13800240uWZyht"];
  __STRING_ARRAY__ = function () {
    return _0x4df488;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("4047YjUdbE") / 1 * (parseInt("254nhJZir") / 2) + parseInt("1667943HQqQBb") / 3 + -parseInt("1208088zQkHNQ") / 4 + parseInt("5NSbGAy") / 5 * (-parseInt("3579762yZjaEH") / 6) + -parseInt("21DwsSzZ") / 7 * (-parseInt("471208oijaDq") / 8) + -parseInt("3497508YZfUtc") / 9 + parseInt("13800240uWZyht") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 311478);
function Main(input) {
  c = input;
  const vowel = "aeiou";
  console.log(vowel["indexOf"](c) !== -1 ? "vowel" : "consonant");
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
