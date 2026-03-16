(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1047423DbKhrR") / 1 + parseInt("2462uICwNZ") / 2 * (-parseInt("1044VmImIe") / 3) + -parseInt("1391604YXGuPt") / 4 + parseInt("520bBLKxQ") / 5 * (parseInt("37836RtMeTd") / 6) + parseInt("5425322jJiHLu") / 7 + parseInt("10748064VBkFZW") / 8 + -parseInt("2444625qTZmiG") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 679041);
function Main(input) {
  var lines = input["split"]("\n");
  var s = lines["splice"](1, lines.length);
  var s_sorted = s["sort"]((a, b) => a > b ? 1 : -1);
  console["log"](s_sorted["join"](""));
}
function __DECODE_0__(nITnPe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 122;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nITnPe, key);
}
function __STRING_ARRAY__() {
  var _0x305bcb = ["520bBLKxQ", "2462uICwNZ", "10748064VBkFZW", "1391604YXGuPt", "2444625qTZmiG", "5425322jJiHLu", "split", "log", "splice", "sort", "readFileSync", "1047423DbKhrR", "utf8", "37836RtMeTd", "join", "1044VmImIe"];
  __STRING_ARRAY__ = function () {
    return _0x305bcb;
  };
  return __STRING_ARRAY__();
}
Main(require("fs")["readFileSync"]("/dev/stdin", "utf8"));
