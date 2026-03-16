function __STRING_ARRAY__() {
  var _0x6b1fc7 = ["982584OGQrSG", "835947EitFrl", "trim", "500385UjQuqq", "readFileSync", "/dev/stdin", "802896GDIhUp", "431127pYoHtW", "split", "228WgITZD", "log", "24Jhgneo", "utf8", "434035WmhBkC", "687vGmFXa"];
  __STRING_ARRAY__ = function () {
    return _0x6b1fc7;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("687vGmFXa") / 1 * (parseInt("228WgITZD") / 2) + parseInt("835947EitFrl") / 3 + -parseInt("982584OGQrSG") / 4 + parseInt("500385UjQuqq") / 5 + parseInt("802896GDIhUp") / 6 + -parseInt("434035WmhBkC") / 7 + -parseInt("24Jhgneo") / 8 * (parseInt("431127pYoHtW") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 139500);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
function __DECODE_0__(snBeMl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 422;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(snBeMl, key);
}
var Arr = input["trim"]()["split"]("\n");
for (var i = 0; i < Arr.length; i++) {
  var n = Arr[i] - 0 + 1;
  var x = 1 / 2 * n * (n - 1);
  console["log"](x + 1);
}
