function __DECODE_0__(gfTRsI, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 488;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(gfTRsI, key);
}
function __STRING_ARRAY__() {
  const _0x5ebe6b = ["length", "readFileSync", "958760leFdMi", "utf8", "7596522WjLehP", "771048soudZv", "265317wMzmsb", "Second", "900955wMhZQO", "log", "4lkJwRi", "/dev/stdin", "10oTlswW", "trim", "289620aMpLFE", "115264QVvscU", "91PrLnkD"];
  __STRING_ARRAY__ = function () {
    return _0x5ebe6b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("289620aMpLFE") / 1 + -parseInt("958760leFdMi") / 2 + parseInt("265317wMzmsb") / 3 * (parseInt("4lkJwRi") / 4) + parseInt("900955wMhZQO") / 5 + parseInt("771048soudZv") / 6 + parseInt("91PrLnkD") / 7 * (-parseInt("115264QVvscU") / 8) + -parseInt("7596522WjLehP") / 9 * (-parseInt("10oTlswW") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 284892);
function Main(s) {
  s = s["trim"]();
  const l = s["length"];
  if (l & 1 ^ s[0] === s[l - 1]) {
    console["log"]("First");
  } else {
    console.log("Second");
  }
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
