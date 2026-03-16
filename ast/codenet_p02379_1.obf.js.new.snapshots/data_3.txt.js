function __DECODE_0__(ifsVBc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 490;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ifsVBc, key);
}
function __STRING_ARRAY__() {
  var _0x33319e = ["673542VRemeg", "log", "toFixed", "80MSDGQK", "372276zzvOgc", "5BNWbGE", "2328954MWtXSu", "224791nESXiU", "18110SvwIos", "2518648UhHQRQ", "sqrt", "4598toRSwY", "1XCMVBK", "468VlAcGM", "254724BLsKfq", "120DjuTBw", "stdin"];
  __STRING_ARRAY__ = function () {
    return _0x33319e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("1XCMVBK") / 1 * (-parseInt("372276zzvOgc") / 2) + -parseInt("2328954MWtXSu") / 3 + parseInt("2518648UhHQRQ") / 4 * (-parseInt("5BNWbGE") / 5) + -parseInt("120DjuTBw") / 6 * (parseInt("224791nESXiU") / 7) + parseInt("80MSDGQK") / 8 * (parseInt("673542VRemeg") / 9) + -parseInt("18110SvwIos") / 10 * (-parseInt("4598toRSwY") / 11) + parseInt("254724BLsKfq") / 12 * (parseInt("468VlAcGM") / 13);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 407448);
var reader = require("readline").createInterface({
  input: process["stdin"],
  output: process.stdout
});
reader.on("line", function (line) {
  var a = line.split(" ");
  var b = parseInt(a[0], 10);
  var c = parseInt(a[1], 10);
  var d = parseInt(a[2], 10);
  var e = parseInt(a[3], 10);
  b = Math["sqrt"]((b - d) * (b - d) + (c - e) * (c - e));
  console["log"](b["toFixed"](8));
  process.exit();
});
process.stdin.on("end", function () {});
