function __DECODE_0__(DVNUxU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ca;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DVNUxU, key);
}
function __STRING_ARRAY__() {
  var _0x23963f = ['1446LfofXe', 'utf8', 'trim', '8232ZvZSVa', 'map', '1146OtBBDi', '1348020wYHcaf', '/dev/stdin', 'split', '190lnulNw', '2127RhpamX', '240vGKleb', '2165232mvaMEf', 'log', '448659kMklQI', '19236iSmXFu', '195635xtyiYs'];
  __STRING_ARRAY__ = function () {
    return _0x23963f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1d9)) / 0x1 + -parseInt(__DECODE_0__(0x1cb)) / 0x2 * (parseInt(__DECODE_0__(0x1d5)) / 0x3) + -parseInt(__DECODE_0__(0x1da)) / 0x4 * (-parseInt(__DECODE_0__(0x1d6)) / 0x5) + -parseInt(__DECODE_0__(0x1d0)) / 0x6 * (parseInt(__DECODE_0__(0x1ce)) / 0x7) + parseInt(__DECODE_0__(0x1d7)) / 0x8 + -parseInt(__DECODE_0__(0x1d1)) / 0x9 + -parseInt(__DECODE_0__(0x1d4)) / 0xa * (-parseInt(__DECODE_0__(0x1ca)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x61ea1);
var input = require('fs')['readFileSync'](__DECODE_0__(0x1d2), __DECODE_0__(0x1cc))[__DECODE_0__(0x1cd)]();
var nums = input[__DECODE_0__(0x1d3)]('\x20')[__DECODE_0__(0x1cf)](function (num) {
  return +num;
});
var n = nums[0x0];
var m = nums[0x1];
var mod = 0x1;
for (var i = 0x0; i < m; i++) {
  mod = mod * n % 0x3b9aca07;
}
console[__DECODE_0__(0x1d8)](mod);
