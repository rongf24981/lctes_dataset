var a0_0x387512 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x26ea2a = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x26ea2a(0x74)) / 0x1 + parseInt(_0x26ea2a(0x6f)) / 0x2 + parseInt(_0x26ea2a(0x6c)) / 0x3 + parseInt(_0x26ea2a(0x71)) / 0x4 * (parseInt(_0x26ea2a(0x70)) / 0x5) + -parseInt(_0x26ea2a(0x6b)) / 0x6 * (parseInt(_0x26ea2a(0x6d)) / 0x7) + parseInt(_0x26ea2a(0x69)) / 0x8 + -parseInt(_0x26ea2a(0x68)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe86c1);
function gcd(a, b) {
  if (b > a) {
    return gcd(b, a);
  }
  if (b == 0x0) {
    return a;
  }
  return gcd(b, a % b);
}
function __STRING_ARRAY__() {
  var _0x26c201 = ['split', 'readFileSync', '121446ZJKAhy', '/dev/stdin', 'utf8', '17956908hiwMoh', '9431472JVIFSy', 'log', '24942QKVknF', '880149lBDWwy', '805QJXbbp', 'trim', '1743658MnqRKt', '2670KJbhYa', '9008VQCMDB'];
  __STRING_ARRAY__ = function () {
    return _0x26c201;
  };
  return __STRING_ARRAY__();
}
function lcm(a, b) {
  var d = gcd(a, b);
  return a * b / d;
}
var input = require('fs')[a0_0x387512(0x73)](a0_0x387512(0x75), a0_0x387512(0x67))[a0_0x387512(0x6e)]();
var lines = input[a0_0x387512(0x72)]('\x0a');
var n = +lines['shift']();
var nums = lines['shift']()[a0_0x387512(0x72)]('\x20')['map'](function (num) {
  return +num;
});
function __DECODE_0__(xehwbR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x67;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xehwbR, key);
}
var p = 0x1;
for (var i = 0x0; i < n; i++) {
  p = lcm(p, nums[i]);
}
console[a0_0x387512(0x6a)](p);
