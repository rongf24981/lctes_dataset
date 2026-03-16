(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1403762yZlNCC") / 1 + parseInt("45506tmiQep") / 2 + -parseInt("76449ltCfDN") / 3 * (parseInt("80vfYnhN") / 4) + -parseInt("95QQAZpt") / 5 * (-parseInt("102918eiyrQD") / 6) + -parseInt("5501699vqswqy") / 7 + -parseInt("847096wFwjVY") / 8 * (-parseInt("135KfqzRh") / 9) + -parseInt("12103200tXsgFM") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 834790);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
var n = arr["shift"]() - 0;
var a = arr["shift"]()["split"](" ").map(Number);
var q = arr["shift"]() - 0;
function __DECODE_0__(YTLzCy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 286;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YTLzCy, key);
}
function __STRING_ARRAY__() {
  var _0x209eb1 = ["log", "80vfYnhN", "shift", "847096wFwjVY", "concat", "/dev/stdin", "slice", "45506tmiQep", "135KfqzRh", "trim", "12103200tXsgFM", "split", "1403762yZlNCC", "utf8", "76449ltCfDN", "reverse", "readFileSync", "102918eiyrQD", "5501699vqswqy", "95QQAZpt"];
  __STRING_ARRAY__ = function () {
    return _0x209eb1;
  };
  return __STRING_ARRAY__();
}
var s = "";
for (var i = 0; i < q; i++) {
  var [b, e] = arr[i]["split"](" ").map(Number);
  var x = a["slice"](0, b);
  var y = a["slice"](b, e)["reverse"]();
  var z = a["slice"](e);
  a = x["concat"](y, z);
}
console["log"](a.join(" "));
