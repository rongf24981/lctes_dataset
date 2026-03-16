(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("331077SZnwcd") / 1 + parseInt("1167656UgXXtW") / 2 + parseInt("407316kZKNfO") / 3 + -parseInt("30752eFhIfR") / 4 * (-parseInt("90AQbRls") / 5) + parseInt("2812452tBiEkj") / 6 + -parseInt("545783QJRLmu") / 7 * (parseInt("32lxtFyd") / 8) + -parseInt("9261126MUJynQ") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 316913);
function __DECODE_0__(VYLCRN, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 357;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VYLCRN, key);
}
function Main(input) {
  let num = parseInt(input, 10);
  let sum = 0;
  let tmp = 0;
  for (let i = input["length"] - 1; i >= 0; i--) {
    tmp = Math["floor"](num / Math["pow"](10, i));
    sum += tmp;
    num -= tmp * Math["pow"](10, i);
  }
  const ans = sum % 9 === 0 ? "Yes" : "No";
  console["log"](ans);
}
function __STRING_ARRAY__() {
  const _0x36686e = ["floor", "length", "331077SZnwcd", "9261126MUJynQ", "545783QJRLmu", "2812452tBiEkj", "log", "pow", "utf8", "1167656UgXXtW", "/dev/stdin", "407316kZKNfO", "30752eFhIfR", "32lxtFyd", "Yes", "90AQbRls"];
  __STRING_ARRAY__ = function () {
    return _0x36686e;
  };
  return __STRING_ARRAY__();
}
;
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
