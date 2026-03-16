'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("1WucMow") / 1 * (parseInt("295662XuxAyk") / 2) + parseInt("6QjANyN") / 3 * (parseInt("810296EcRNXI") / 4) + parseInt("1434165lJYyDd") / 5 + -parseInt("6XVtGeH") / 6 * (-parseInt("736946reiOTy") / 7) + parseInt("56gvSxnO") / 8 * (parseInt("109854RwtMED") / 9) + parseInt("2750240Uoolxb") / 10 + -parseInt("8674446lPosXM") / 11;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 221308);
const DELIMITER = " ";
function __STRING_ARRAY__() {
  const _0x4f4c37 = ["109854RwtMED", "abs", "pow", "charAt", "log", "1WucMow", "readFileSync", "utf8", "6QjANyN", "6XVtGeH", "length", "810296EcRNXI", "trim", "8674446lPosXM", "1434165lJYyDd", "56gvSxnO", "Unfair", "736946reiOTy", "split", "2750240Uoolxb", "295662XuxAyk"];
  __STRING_ARRAY__ = function () {
    return _0x4f4c37;
  };
  return __STRING_ARRAY__();
}
const A_INDEX = 0;
function __DECODE_0__(dhbCfA, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 454;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dhbCfA, key);
}
const B_INDEX = 1;
const K_INDEX = 3;
const LIMIT = Math["pow"](10, 18);
const process = input => {
  const indexArr = input["split"](DELIMITER);
  const ans = parseInt(indexArr[A_INDEX]) - parseInt(indexArr[B_INDEX]);
  const KString = indexArr[K_INDEX];
  const K = parseInt(KString["charAt"](KString["length"] - 1));
  if (Math["abs"](ans) > LIMIT) {
    console["log"]("Unfair");
  } else {
    console.log(K % 2 === 0 || ans === 0 ? ans : -ans);
  }
};
process(require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]());
