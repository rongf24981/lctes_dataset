(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("105827NGDAOc") / 1 + -parseInt("8436vHtlzo") / 2 * (-parseInt("135HtjGUx") / 3) + parseInt("1696016PITLTw") / 4 + -parseInt("6206810WeqAUt") / 5 + -parseInt("426BVcHJg") / 6 * (-parseInt("103943uCbxcj") / 7) + -parseInt("4093712JREHGz") / 8 + parseInt("9110601SWTPUv") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 821479);
function heron(a, b, c) {
  var s = (a + b + c) / 2;
  var S = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return S;
}
function __STRING_ARRAY__() {
  var _0x1b83d1 = ["8436vHtlzo", "split", "apply", "4093712JREHGz", "6206810WeqAUt", "426BVcHJg", "abs", "pow", "105827NGDAOc", "9110601SWTPUv", "map", "1696016PITLTw", "length", "103943uCbxcj", "sqrt", "135HtjGUx", "/dev/stdin", "trim", "utf8", "readFileSync"];
  __STRING_ARRAY__ = function () {
    return _0x1b83d1;
  };
  return __STRING_ARRAY__();
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var Arr = input["trim"]()["split"]("\n");
function __DECODE_0__(PTmzoG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 295;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PTmzoG, key);
}
for (var i = 0; i < Arr["length"]; i++) {
  var arr = Arr[i]["split"](",")["map"](Number);
  (function (x1, y1, x2, y2, x3, y3, x4, y4) {
    var d12 = Math["sqrt"](Math["pow"](x1 - x2, 2) + Math["pow"](y1 - y2, 2));
    var d23 = Math["sqrt"](Math["pow"](x2 - x3, 2) + Math["pow"](y2 - y3, 2));
    var d34 = Math.sqrt(Math["pow"](x3 - x4, 2) + Math.pow(y3 - y4, 2));
    var d41 = Math["sqrt"](Math.pow(x4 - x1, 2) + Math["pow"](y4 - y1, 2));
    var d13 = Math["sqrt"](Math["pow"](x1 - x3, 2) + Math.pow(y1 - y3, 2));
    var d24 = Math["sqrt"](Math["pow"](x2 - x4, 2) + Math["pow"](y2 - y4, 2));
    var A = heron(d12, d24, d41) + heron(d23, d34, d24);
    var B = heron(d12, d23, d13) + heron(d13, d34, d41);
    var ans = Math["abs"](A - B) < 0.00001 ? "YES" : "NO";
    console.log(ans);
  })["apply"](null, arr);
}
