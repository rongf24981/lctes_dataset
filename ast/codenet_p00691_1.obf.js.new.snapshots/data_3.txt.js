function __DECODE_0__(UJxvxK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 157;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UJxvxK, key);
}
function __STRING_ARRAY__() {
  var _0x5911e8 = ["7368NZCARj", "7713KiOOnT", "push", "log", "8771sRRqai", "utf8", "1408332DkpfNz", "10503081Nhgoqh", "min", "6220oOFpRt", "trim", "13398BSONat", "876mqyTGM", "1567QjQMzX", "apply", "842gSwVxw", "readFileSync", "/dev/stdin", "3683130LZhWyW"];
  __STRING_ARRAY__ = function () {
    return _0x5911e8;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = parseInt("1567QjQMzX") / 1 * (parseInt("842gSwVxw") / 2) + parseInt("7713KiOOnT") / 3 * (-parseInt("876mqyTGM") / 4) + -parseInt("3683130LZhWyW") / 5 + -parseInt("1408332DkpfNz") / 6 + parseInt("8771sRRqai") / 7 * (parseInt("7368NZCARj") / 8) + parseInt("10503081Nhgoqh") / 9 + parseInt("6220oOFpRt") / 10 * (-parseInt("13398BSONat") / 11);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 688736);
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8");
var arr = input["trim"]().split("\n");
while (true) {
  var z = arr.shift() - 0;
  if (z == 0) {
    break;
  }
  var zzz = z * z * z;
  var ary = [];
  for (var i = z - 1; i > 0; i--) {
    for (var j = i; j > 0; j--) {
      var x = zzz - i * i * i - j * j * j;
      if (x > 0) {
        ary["push"](x);
      }
    }
  }
  console["log"](Math["min"]["apply"](null, ary));
}
