'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("746970mRWpyu") / 1 + parseInt("91844OxOzRY") / 2 * (parseInt("9xylWTa") / 3) + parseInt("3896528WDshDW") / 4 + parseInt("5tnPOWC") / 5 * (-parseInt("1143666GmYtOg") / 6) + parseInt("101059lzPOPK") / 7 + parseInt("3232ePyEhW") / 8 * (parseInt("31077UiKmce") / 9) + -parseInt("1790PkubhH") / 10 * (parseInt("135883TkSZvv") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 866519);
function Main(input) {
  input = input["split"]("\n");
  let N = parseInt(input[0]);
  let res = "";
  if (N === 0) {
    console.log(0);
    return;
  }
  while (N !== 0) {
    res = String(Math.abs(N % -2)) + res;
    if (N % -2 < 0) {
      N += N < 0 ? -1 : 1;
    }
    N = parseInt(N / -2);
  }
  console.log(res);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(SbVhpi, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 147;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SbVhpi, key);
}
function __STRING_ARRAY__() {
  const _0x373c8e = ["31077UiKmce", "91844OxOzRY", "split", "1790PkubhH", "readFileSync", "101059lzPOPK", "3232ePyEhW", "9xylWTa", "135883TkSZvv", "5tnPOWC", "utf8", "1143666GmYtOg", "/dev/stdin", "3896528WDshDW", "746970mRWpyu"];
  __STRING_ARRAY__ = function () {
    return _0x373c8e;
  };
  return __STRING_ARRAY__();
}
