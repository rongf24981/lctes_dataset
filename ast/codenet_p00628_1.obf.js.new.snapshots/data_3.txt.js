function __DECODE_0__(YsZDdW, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 379;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YsZDdW, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("676981aQdKkC") / 1 + parseInt("995312azdiPg") / 2 * (parseInt("3jhZUWi") / 3) + -parseInt("1832OdaKuJ") / 4 * (-parseInt("655DfgPyJ") / 5) + -parseInt("2693136FmXLiB") / 6 + parseInt("49JkLkZZ") / 7 * (-parseInt("425576FvjPpk") / 8) + parseInt("3088080pGjOfw") / 9 * (-parseInt("10saHCZi") / 10) + -parseInt("187MmPSds") / 11 * (-parseInt("1174116ibUfHk") / 12);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 379649);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input.replace(/\n$/, "")["split"]("\n");
function __STRING_ARRAY__() {
  var _0xe7f30b = ["3jhZUWi", "995312azdiPg", "1174116ibUfHk", "join", "split", "2693136FmXLiB", "3088080pGjOfw", "readFileSync", "49JkLkZZ", "655DfgPyJ", "utf8", "676981aQdKkC", "1832OdaKuJ", "10saHCZi", "425576FvjPpk", "length", "187MmPSds", "log"];
  __STRING_ARRAY__ = function () {
    return _0xe7f30b;
  };
  return __STRING_ARRAY__();
}
while (true) {
  var str = Arr.shift();
  if (str == "END OF INPUT") {
    break;
  }
  var arr = str["split"](" ");
  arr.forEach(function (v, i) {
    arr[i] = v["length"];
  });
  console["log"](arr["join"](""));
}
