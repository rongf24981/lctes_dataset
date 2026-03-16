function __DECODE_0__(dbRrHz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 271;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dbRrHz, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("492517WEztSi") / 1 + -parseInt("2AMSxjc") / 2 * (-parseInt("809178yEFoXB") / 3) + parseInt("1731576wkcpqy") / 4 + -parseInt("522645CjCqKG") / 5 + parseInt("24RVxaiD") / 6 * (-parseInt("724920HWxGbP") / 7) + parseInt("1736TXqjoK") / 8 * (-parseInt("9576UKRnus") / 9) + parseInt("8359460fAQOoz") / 10;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 296392);
function __STRING_ARRAY__() {
  var _0x55c2d8 = ["1731576wkcpqy", "724920HWxGbP", "24RVxaiD", "492517WEztSi", "trim", "min", "1736TXqjoK", "8359460fAQOoz", "522645CjCqKG", "pow", "2AMSxjc", "log", "/dev/stdin", "809178yEFoXB", "shift", "9576UKRnus"];
  __STRING_ARRAY__ = function () {
    return _0x55c2d8;
  };
  return __STRING_ARRAY__();
}
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var Arr = input["trim"]().split("\n");
while (true) {
  var e = Arr["shift"]() - 0;
  if (e == 0) {
    break;
  }
  var min = Infinity;
  for (var z = 0; z <= 100; z++) {
    for (var y = 0; y <= 1000; y++) {
      var x = e - (Math["pow"](z, 3) + Math["pow"](y, 2));
      if (x < 0) {
        break;
      }
      min = Math["min"](min, z + y + x);
    }
  }
  console["log"](min);
}
