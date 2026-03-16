function __DECODE_0__(LcfpaZ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 355;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LcfpaZ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("260641rLVLOf") / 1 + parseInt("1438qJFixl") / 2 * (parseInt("1131WqKZcD") / 3) + -parseInt("179764wqNMhD") / 4 * (-parseInt("20ffdSvg") / 5) + parseInt("1409706vbaWLa") / 6 * (-parseInt("7wELFUr") / 7) + -parseInt("37336yVceTW") / 8 * (-parseInt("612ADnouC") / 9) + parseInt("710MtvZxd") / 10 * (-parseInt("20042BfojDM") / 11) + parseInt("471348MemKRn") / 12;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 182508);
var input = "\n3 7\n";
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]()["split"]("\n");
var k = arr[0]["split"](" ")[0] - 0;
var x = arr[0]["split"](" ")[1] - 0;
var a = [];
for (var i = x - k + 1; i < x + k; i++) {
  a["push"](i);
}
function __STRING_ARRAY__() {
  var _0x1ad2af = ["/dev/stdin", "\n3 7\n", "trim", "179764wqNMhD", "split", "1409706vbaWLa", "join", "utf8", "1438qJFixl", "readFileSync", "20042BfojDM", "push", "710MtvZxd", "20ffdSvg", "1131WqKZcD", "37336yVceTW", "260641rLVLOf", "612ADnouC", "471348MemKRn", "7wELFUr"];
  __STRING_ARRAY__ = function () {
    return _0x1ad2af;
  };
  return __STRING_ARRAY__();
}
console.log(a["join"](" "));
