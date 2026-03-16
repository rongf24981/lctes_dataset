(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = parseInt("1rQQKeG") / 1 * (parseInt("1027762hRfRbx") / 2) + -parseInt("2723328zVPkAs") / 3 + parseInt("4287444tHeSmo") / 4 + parseInt("1842955ZXJcPP") / 5 + parseInt("2732466akRaTe") / 6 + parseInt("154kNwnHQ") / 7 * (parseInt("225136eqdCpV") / 8) + parseInt("9xkmBfo") / 9 * (-parseInt("14506070snbayQ") / 10);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 670485);
function __STRING_ARRAY__() {
  const _0x561429 = ["4287444tHeSmo", "2732466akRaTe", "1842955ZXJcPP", "1rQQKeG", "1027762hRfRbx", "Yes", "14506070snbayQ", "readFileSync", "225136eqdCpV", "9xkmBfo", "154kNwnHQ", "split", "2723328zVPkAs", "utf8", "log"];
  __STRING_ARRAY__ = function () {
    return _0x561429;
  };
  return __STRING_ARRAY__();
}
const input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
const arr = input["split"]("\n");
function __DECODE_0__(WNxSVo, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 173;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WNxSVo, key);
}
const regExp = new RegExp(arr[1]);
console["log"](regExp.test(arr[0] + arr[0]) ? "Yes" : "No");
