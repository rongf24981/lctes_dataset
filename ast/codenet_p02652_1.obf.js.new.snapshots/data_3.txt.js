function __DECODE_0__(hSoIHu, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 306;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hSoIHu, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("44917KbObOb") / 1 * (-parseInt("12tsmwVy") / 2) + -parseInt("51TMsLED") / 3 * (-parseInt("71228mXuqKO") / 4) + parseInt("2312720TJVydP") / 5 + -parseInt("1444542YgHRwx") / 6 * (-parseInt("7SNmYqx") / 7) + parseInt("2739232EhbygA") / 8 + parseInt("24273XqzMjP") / 9 * (parseInt("470Tjfigr") / 10) + -parseInt("10695366FMGFVK") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 233375);
function __STRING_ARRAY__() {
  const _0x4e97c4 = ["10695366FMGFVK", "length", "24273XqzMjP", "2312720TJVydP", "7SNmYqx", "1444542YgHRwx", "2739232EhbygA", "log", "readFileSync", "71228mXuqKO", "51TMsLED", "12tsmwVy", "470Tjfigr", "44917KbObOb"];
  __STRING_ARRAY__ = function () {
    return _0x4e97c4;
  };
  return __STRING_ARRAY__();
}
function Main(str) {
  let zero = 0;
  let one = 0;
  for (let i = 0; i < str["length"]; i++) {
    if (str[i] === "1") {
      one++;
    } else if (str[i] === "0") {
      zero++;
    }
  }
  console["log"](Math.abs(one - zero));
}
let input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
Main(input);
