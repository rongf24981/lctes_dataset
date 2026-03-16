'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("505790HCSGiI") / 1 + parseInt("34RYfDLi") / 2 * (parseInt("203979TYBcKb") / 3) + parseInt("8KPvdpx") / 4 * (-parseInt("3667210rDZBLV") / 5) + -parseInt("2461806oKXWzV") / 6 + -parseInt("7sCjRYr") / 7 * (parseInt("7800592arEfuu") / 8) + parseInt("45LDULUc") / 9 * (-parseInt("2310970ItEhrr") / 10) + -parseInt("1606wMoQIF") / 11 * (-parseInt("259212cQBMLQ") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 807673);
function __STRING_ARRAY__() {
  const _0x417cc2 = ["203979TYBcKb", "utf8", "34RYfDLi", "length", "259212cQBMLQ", "3667210rDZBLV", "1606wMoQIF", "ABC", "8KPvdpx", "7800592arEfuu", "45LDULUc", "2461806oKXWzV", "join", "7sCjRYr", "505790HCSGiI", "2310970ItEhrr", "/dev/stdin"];
  __STRING_ARRAY__ = function () {
    return _0x417cc2;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  let s = input;
  let tmp = s.split("ABC");
  let result = tmp.length - 1;
  while (tmp["length"] !== 1) {
    s = tmp["join"]("BCA");
    tmp = s.split("ABC");
    result += tmp["length"] - 1;
  }
  console.log(result);
}
function __DECODE_0__(FaoJPh, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 401;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FaoJPh, key);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
