(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (true) {
    try {
      const expression = -parseInt("538079bRdUUm") / 1 + -parseInt("11582CIShWu") / 2 * (-parseInt("87OQnxPp") / 3) + -parseInt("4jQCMrz") / 4 * (-parseInt("2491030JppiBY") / 5) + -parseInt("6IvMcTR") / 6 * (-parseInt("2697583ghxCzk") / 7) + -parseInt("1080ozNFQF") / 8 * (-parseInt("18261iZUHWj") / 9) + parseInt("3004430mOnuND") / 10 + parseInt("69553mgCFJW") / 11 * (-parseInt("1524efNFfo") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 284772);
function __DECODE_0__(Qhgtsa, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 398;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Qhgtsa, key);
}
function __STRING_ARRAY__() {
  const _0x29d0d1 = ["18261iZUHWj", "split", "length", "69553mgCFJW", "1524efNFfo", "3004430mOnuND", "utf8", "2491030JppiBY", "log", "4jQCMrz", "538079bRdUUm", "6IvMcTR", "1080ozNFQF", "2697583ghxCzk", "readFileSync", "/dev/stdin", "11582CIShWu", "87OQnxPp"];
  __STRING_ARRAY__ = function () {
    return _0x29d0d1;
  };
  return __STRING_ARRAY__();
}
let input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
let Arr = input.trim()["split"]("\n");
for (var i = 0; i < Arr["length"]; ++i) {
  let n = Arr[i];
  var ans = n % 39;
  if (ans == 0) {
    ans = 39;
  }
  if (ans < 10) {
    ans = "0" + ans;
  }
  console["log"]("3C" + ans);
}
