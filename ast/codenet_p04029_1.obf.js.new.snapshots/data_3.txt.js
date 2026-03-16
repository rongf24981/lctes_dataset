function __DECODE_0__(jWqscI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 247;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jWqscI, key);
}
function __STRING_ARRAY__() {
  const _0x29b0c4 = ["readFileSync", "2410vpuzEv", "/dev/stdin", "9425133pJkXYE", "2416gtmPID", "28KpGdWL", "462238NJPHWC", "log", "13288740sjDDLy", "1481214CrBSjn", "363954acHGrj", "6398888aLxxLQ", "14SOOnSW"];
  __STRING_ARRAY__ = function () {
    return _0x29b0c4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("462238NJPHWC") / 1 + parseInt("14SOOnSW") / 2 * (parseInt("363954acHGrj") / 3) + -parseInt("2416gtmPID") / 4 * (parseInt("2410vpuzEv") / 5) + -parseInt("1481214CrBSjn") / 6 * (-parseInt("28KpGdWL") / 7) + -parseInt("6398888aLxxLQ") / 8 + -parseInt("9425133pJkXYE") / 9 + parseInt("13288740sjDDLy") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 565112);
function main(input) {
  const n = parseInt(input, 10);
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console["log"](sum);
}
main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
