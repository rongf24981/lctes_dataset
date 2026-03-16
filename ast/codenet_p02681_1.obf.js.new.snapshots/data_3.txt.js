'use strict';

function __STRING_ARRAY__() {
  const _0x3ff790 = ["24LZXQyy", "replace", "4yofinw", "1304231GCFzPK", "1014655cftrOs", "285700SrRVEy", "20492330nRpmez", "length", "17598ZLlwKc", "Yes", "7504074ETVzdB", "trim", "749ckJSrj", "split", "log", "7991648FrWJuf", "utf8", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x3ff790;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1304231GCFzPK") / 1 + -parseInt("285700SrRVEy") / 2 * (-parseInt("24LZXQyy") / 3) + parseInt("4yofinw") / 4 * (-parseInt("1014655cftrOs") / 5) + -parseInt("17598ZLlwKc") / 6 * (-parseInt("749ckJSrj") / 7) + parseInt("7991648FrWJuf") / 8 + -parseInt("7504074ETVzdB") / 9 + -parseInt("20492330nRpmez") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 673868);
const Main = input => {
  const tmp = input["trim"]()["split"]("\n");
  const S = tmp[0];
  const T = tmp[1];
  let result = "Yes";
  const tmpStr = T["replace"](S, "");
  if (T.slice(-1) === tmpStr && tmpStr["length"] === 1) {
    result = "Yes";
  } else {
    result = "No";
  }
  console["log"](result);
  return result;
};
function __DECODE_0__(GpygBA, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 161;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GpygBA, key);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
