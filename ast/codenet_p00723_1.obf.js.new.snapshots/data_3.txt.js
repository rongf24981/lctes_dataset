function __STRING_ARRAY__() {
  var _0x43b87d = ["keys", "18rgPLNS", "trim", "15521YICrqq", "utf8", "reverse", "push", "1224456oxdPmg", "199892lBDBFk", "shift", "5AuBumn", "1566882IKcwuR", "840399khCazq", "/dev/stdin", "length", "join", "split", "1000489grxZgB", "420688GYAFEs"];
  __STRING_ARRAY__ = function () {
    return _0x43b87d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("15521YICrqq") / 1 + parseInt("420688GYAFEs") / 2 + -parseInt("840399khCazq") / 3 + parseInt("199892lBDBFk") / 4 + -parseInt("5AuBumn") / 5 * (parseInt("1566882IKcwuR") / 6) + parseInt("1000489grxZgB") / 7 + parseInt("1224456oxdPmg") / 8 * (parseInt("18rgPLNS") / 9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 152557);
var input = require("fs").readFileSync("/dev/stdin", "utf8");
function __DECODE_0__(uzSXMr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 418;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uzSXMr, key);
}
var Arr = input["trim"]()["split"]("\n");
var n = Arr.shift() - 0;
for (var I = 0; I < n; I++) {
  var str = Arr["shift"]();
  var arr = [];
  for (var i = 1; i < str["length"]; i++) {
    arr["push"]([str.slice(0, i), str.slice(i, str["length"])]);
  }
  var obj = {};
  for (var i = 0; i < arr["length"]; i++) {
    var A = arr[i][0];
    var B = arr[i][1];
    var a = A["split"]("").reverse()["join"]("");
    var b = B["split"]("")["reverse"]()["join"]("");
    obj[A + B] = true;
    obj[A + b] = true;
    obj[a + B] = true;
    obj[a + b] = true;
    obj[B + A] = true;
    obj[B + a] = true;
    obj[b + A] = true;
    obj[b + a] = true;
  }
  console.log(Object["keys"](obj)["length"]);
}
