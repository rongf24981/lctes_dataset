function __STRING_ARRAY__() {
  var _0x3468c9 = ["2820282qqgMZe", "/dev/stdin", "map", "6480404rFYYRr", "join", "780675rTLCcp", "split", "10140NsHnCN", "readFileSync", "2764194HFocVC", "787600pEPWVb", "toUpperCase", "1860868EcKLAI", "log"];
  __STRING_ARRAY__ = function () {
    return _0x3468c9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(fOvIlM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 217;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fOvIlM, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("780675rTLCcp") / 1 + -parseInt("1860868EcKLAI") / 2 + -parseInt("2764194HFocVC") / 3 + -parseInt("10140NsHnCN") / 4 + parseInt("787600pEPWVb") / 5 + parseInt("2820282qqgMZe") / 6 + parseInt("6480404rFYYRr") / 7;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 479647);
function Main(input) {
  console["log"]((input || "")["split"](/\s+/)["map"](function (entry) {
    return entry[0]["toUpperCase"]();
  })["join"](""));
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
