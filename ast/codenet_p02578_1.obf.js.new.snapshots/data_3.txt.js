function __DECODE_0__(wvKRRv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 355;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wvKRRv, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("6223nkfadS") / 1 + -parseInt("494614JzgOUr") / 2 + parseInt("334629IGXSme") / 3 + parseInt("394828PKhRck") / 4 * (parseInt("10zBSWKb") / 5) + -parseInt("796494UKtEaE") / 6 * (-parseInt("7SdNEND") / 7) + -parseInt("130760WBpRJU") / 8 * (parseInt("108pYJSIE") / 9) + parseInt("1437330VhGRoS") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 135769);
process["stdin"]["resume"]();
function __STRING_ARRAY__() {
  var _0x1ce26 = ["split", "utf8", "push", "10zBSWKb", "1437330VhGRoS", "resume", "130760WBpRJU", "6223nkfadS", "readline", "108pYJSIE", "796494UKtEaE", "494614JzgOUr", "max", "7SdNEND", "stdout", "394828PKhRck", "334629IGXSme", "log", "line", "stdin", "close"];
  __STRING_ARRAY__ = function () {
    return _0x1ce26;
  };
  return __STRING_ARRAY__();
}
process["stdin"].setEncoding("utf8");
var lines = [];
var reader = require("readline").createInterface({
  input: process["stdin"],
  output: process["stdout"]
});
reader.on("line", line => {
  lines["push"](line);
});
reader.on("close", () => {
  var N = parseInt(lines[0]);
  var sum = 0;
  var MaxNum = 0;
  for (var i = 0; i < N; i++) {
    var Ai = parseInt(lines[1]["split"](" ")[i]);
    MaxNum = Math["max"](MaxNum, Ai);
    sum += MaxNum - Ai;
  }
  console["log"](sum);
});
