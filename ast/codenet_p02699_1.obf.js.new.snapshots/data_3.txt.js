function __DECODE_0__(qswmPG, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 246;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qswmPG, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("378946SZcYRh") / 1 + parseInt("18xPkGUB") / 2 * (-parseInt("70161HiTUge") / 3) + parseInt("254556ibQPzf") / 4 * (-parseInt("30zTmKhn") / 5) + -parseInt("1284198NTktkB") / 6 + -parseInt("3966872noIXrY") / 7 + parseInt("876520XCjwwr") / 8 * (parseInt("9LfdJLu") / 9) + parseInt("11704830KSUljv") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 285948);
function Main(input) {
  input = input.split(" ");
  const S = parseInt(input[0]);
  const W = parseInt(input[1]);
  const ret = S <= W ? "unsafe" : "safe";
  console["log"](ret);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __STRING_ARRAY__() {
  const _0x4cb556 = ["30zTmKhn", "/dev/stdin", "unsafe", "readFileSync", "378946SZcYRh", "3966872noIXrY", "1284198NTktkB", "18xPkGUB", "254556ibQPzf", "utf8", "11704830KSUljv", "70161HiTUge", "876520XCjwwr", "log", "9LfdJLu"];
  __STRING_ARRAY__ = function () {
    return _0x4cb556;
  };
  return __STRING_ARRAY__();
}
