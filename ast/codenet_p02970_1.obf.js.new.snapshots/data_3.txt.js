(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("118236MHRVqA") / 1 + parseInt("821874XKupFP") / 2 + -parseInt("1977381oPxXPi") / 3 + parseInt("4VeUSRS") / 4 * (parseInt("1764745vyOpuq") / 5) + parseInt("715524vBulxU") / 6 + -parseInt("204729bfphIx") / 7 * (-parseInt("40lTeLXe") / 8) + -parseInt("120033bVNLMk") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 475147);
function Main(input) {
  var dataList = input["split"]("\n");
  var data = dataList[0].split(" ");
  var n = data[0];
  var d = data[1];
  var checkNum = d * 2 + 1;
  var num = Math.floor(n / checkNum);
  var rest = n % checkNum;
  if (rest > 0) {
    num += 1;
  }
  console["log"](num);
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
function __DECODE_0__(QCVLRn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 240;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QCVLRn, key);
}
function __STRING_ARRAY__() {
  var _0x1870f5 = ["715524vBulxU", "split", "204729bfphIx", "118236MHRVqA", "821874XKupFP", "40lTeLXe", "log", "1977381oPxXPi", "/dev/stdin", "readFileSync", "4VeUSRS", "1764745vyOpuq", "utf8", "120033bVNLMk"];
  __STRING_ARRAY__ = function () {
    return _0x1870f5;
  };
  return __STRING_ARRAY__();
}
