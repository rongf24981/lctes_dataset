(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x110)) / 0x1 * (parseInt(__DECODE_0__(0x11a)) / 0x2) + parseInt(__DECODE_0__(0x114)) / 0x3 + -parseInt(__DECODE_0__(0x115)) / 0x4 * (-parseInt(__DECODE_0__(0x10f)) / 0x5) + -parseInt(__DECODE_0__(0x11b)) / 0x6 * (-parseInt(__DECODE_0__(0x10c)) / 0x7) + parseInt(__DECODE_0__(0x116)) / 0x8 + parseInt(__DECODE_0__(0x10e)) / 0x9 + parseInt(__DECODE_0__(0x10d)) / 0xa * (-parseInt(__DECODE_0__(0x113)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x78f36);
function __DECODE_0__(qNBBDU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qNBBDU, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x11c));
var arr = input[__DECODE_0__(0x118)]()[__DECODE_0__(0x119)]('\x0a');
var n = arr[__DECODE_0__(0x112)]() - 0x0;
function __STRING_ARRAY__() {
  var _0x544429 = ['501897pOJZYu', '40NJwveB', '6718448zXxkld', 'map', 'trim', 'split', '300XunFKL', '6YDIDkl', 'utf8', '2432087ZtKXeD', '350SubRno', '4027662FJAHAI', '360075JCSpNe', '761qkvibj', 'log', 'shift', '672870xhOath'];
  __STRING_ARRAY__ = function () {
    return _0x544429;
  };
  return __STRING_ARRAY__();
}
var v = arr[__DECODE_0__(0x112)]()[__DECODE_0__(0x119)]('\x20')[__DECODE_0__(0x117)](Number);
var sum = 0x0;
for (var i = 0x0; i < n; i++) {
  sum += v[i] - (i + 0x1);
}
console[__DECODE_0__(0x111)](sum);
