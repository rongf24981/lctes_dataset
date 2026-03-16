function __STRING_ARRAY__() {
  var _0x476b9e = ["511528PsNxbi", "70dHbSut", "45plUgwy", "resume", "2645610GWkRJR", "setEncoding", "trim", "end", "104278nxECuP", "stdin", "547565ddJnvR", "log", "data", "49Sbneqj", "3pevhXa", "224420Vboedf", "2660364mpegAt", "1586431XecsXe"];
  __STRING_ARRAY__ = function () {
    return _0x476b9e;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(UDRaUA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 162;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UDRaUA, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("547565ddJnvR") / 1 + -parseInt("104278nxECuP") / 2 * (parseInt("3pevhXa") / 3) + -parseInt("224420Vboedf") / 4 * (-parseInt("45plUgwy") / 5) + parseInt("2645610GWkRJR") / 6 + -parseInt("49Sbneqj") / 7 * (parseInt("511528PsNxbi") / 8) + parseInt("2660364mpegAt") / 9 + -parseInt("70dHbSut") / 10 * (parseInt("1586431XecsXe") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 279768);
function main() {
  var debt = 100000;
  for (var i = 0; i < input["trim"]() - 0; i++) {
    debt = Math.ceil(debt * 1.05 / 1000) * 1000;
  }
  console["log"](debt);
}
var input = "";
process.stdin["resume"]();
process.stdin["setEncoding"]("utf8");
process["stdin"].on("data", function (chunk) {
  input += chunk;
});
process.stdin.on("end", function () {
  main();
});
