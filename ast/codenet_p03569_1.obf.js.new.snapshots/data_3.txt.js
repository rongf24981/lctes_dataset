function __STRING_ARRAY__() {
  const _0x8625f4 = ["33AYLaTY", "2193766voHESW", "1DTCAkx", "303045hwxYmt", "145000ovzYCz", "60WpGQKR", "length", "273100ZCEbVe", "293908MAaAtR", "/dev/stdin", "trim", "1472967xQquqF", "1234996NRofJC", "log", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x8625f4;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1DTCAkx") / 1 * (parseInt("2193766voHESW") / 2) + -parseInt("33AYLaTY") / 3 * (parseInt("293908MAaAtR") / 4) + parseInt("303045hwxYmt") / 5 * (parseInt("60WpGQKR") / 6) + -parseInt("1234996NRofJC") / 7 + -parseInt("145000ovzYCz") / 8 + -parseInt("1472967xQquqF") / 9 + parseInt("273100ZCEbVe") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 563820);
function __DECODE_0__(uopvRx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 181;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uopvRx, key);
}
console["log"]((args => {
  const s = args["trim"]();
  const N = s["length"] - 1;
  let x = 0;
  for (let i = 0, j = N; i < j; i++, j--) {
    while (s[i] !== s[j]) {
      if (s[i] === "x") {
        x++;
        i++;
      } else if (s[j] === "x") {
        x++;
        j--;
      } else {
        return "-1";
      }
    }
  }
  return "" + x;
})(require("fs")["readFileSync"]("/dev/stdin", "utf8")));
