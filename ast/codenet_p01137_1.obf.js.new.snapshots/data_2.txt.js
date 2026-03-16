function __DECODE_0__(dbRrHz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dbRrHz, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x117)) / 0x1 + -parseInt(__DECODE_0__(0x11e)) / 0x2 * (-parseInt(__DECODE_0__(0x111)) / 0x3) + parseInt(__DECODE_0__(0x114)) / 0x4 + -parseInt(__DECODE_0__(0x11c)) / 0x5 + parseInt(__DECODE_0__(0x116)) / 0x6 * (-parseInt(__DECODE_0__(0x115)) / 0x7) + parseInt(__DECODE_0__(0x11a)) / 0x8 * (-parseInt(__DECODE_0__(0x113)) / 0x9) + parseInt(__DECODE_0__(0x11b)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x485c8);
function __STRING_ARRAY__() {
  var _0x55c2d8 = ['1731576wkcpqy', '724920HWxGbP', '24RVxaiD', '492517WEztSi', 'trim', 'min', '1736TXqjoK', '8359460fAQOoz', '522645CjCqKG', 'pow', '2AMSxjc', 'log', '/dev/stdin', '809178yEFoXB', 'shift', '9576UKRnus'];
  __STRING_ARRAY__ = function () {
    return _0x55c2d8;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')['readFileSync'](__DECODE_0__(0x110), 'utf8');
var Arr = input[__DECODE_0__(0x118)]()['split']('\x0a');
while (!![]) {
  var e = Arr[__DECODE_0__(0x112)]() - 0x0;
  if (e == 0x0) {
    break;
  }
  var min = Infinity;
  for (var z = 0x0; z <= 0x64; z++) {
    for (var y = 0x0; y <= 0x3e8; y++) {
      var x = e - (Math[__DECODE_0__(0x11d)](z, 0x3) + Math[__DECODE_0__(0x11d)](y, 0x2));
      if (x < 0x0) {
        break;
      }
      min = Math[__DECODE_0__(0x119)](min, z + y + x);
    }
  }
  console[__DECODE_0__(0x10f)](min);
}
