(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("121446ZJKAhy") / 1 + parseInt("1743658MnqRKt") / 2 + parseInt("880149lBDWwy") / 3 + parseInt("9008VQCMDB") / 4 * (parseInt("2670KJbhYa") / 5) + -parseInt("24942QKVknF") / 6 * (parseInt("805QJXbbp") / 7) + parseInt("9431472JVIFSy") / 8 + -parseInt("17956908hiwMoh") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 952001);
function gcd(a, b) {
  if (b > a) {
    return gcd(b, a);
  }
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
}
function __STRING_ARRAY__() {
  var _0x26c201 = ["split", "readFileSync", "121446ZJKAhy", "/dev/stdin", "utf8", "17956908hiwMoh", "9431472JVIFSy", "log", "24942QKVknF", "880149lBDWwy", "805QJXbbp", "trim", "1743658MnqRKt", "2670KJbhYa", "9008VQCMDB"];
  __STRING_ARRAY__ = function () {
    return _0x26c201;
  };
  return __STRING_ARRAY__();
}
function lcm(a, b) {
  var d = gcd(a, b);
  return a * b / d;
}
var input = require("fs")["readFileSync"]("/dev/stdin", "utf8")["trim"]();
var lines = input["split"]("\n");
var n = +lines.shift();
var nums = lines.shift()["split"](" ").map(function (num) {
  return +num;
});
function __DECODE_0__(xehwbR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 103;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xehwbR, key);
}
var p = 1;
for (var i = 0; i < n; i++) {
  p = lcm(p, nums[i]);
}
console["log"](p);
