(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x183)) / 0x1 + parseInt(__DECODE_0__(0x189)) / 0x2 + -parseInt(__DECODE_0__(0x17d)) / 0x3 + -parseInt(__DECODE_0__(0x18c)) / 0x4 * (-parseInt(__DECODE_0__(0x187)) / 0x5) + parseInt(__DECODE_0__(0x182)) / 0x6 + parseInt(__DECODE_0__(0x18a)) / 0x7 * (-parseInt(__DECODE_0__(0x184)) / 0x8) + -parseInt(__DECODE_0__(0x18b)) / 0x9 * (-parseInt(__DECODE_0__(0x17c)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x74ba1);
function __DECODE_0__(HanENt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x17a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HanENt, key);
}
function __STRING_ARRAY__() {
  var _0x954dd6 = ['85ftVHvD', 'forEach', '1216878TPZhBo', '14EkIYtT', '613071SRLVCm', '45648HBfbGX', 'trim', 'reduce', '10qCSUKT', '2452320QcMzZj', '0\x200', 'split', 'map', 'shift', '4278204ttWrZW', '181145eJvEEo', '1876752QpMmXh', '/dev/stdin', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x954dd6;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')['readFileSync'](__DECODE_0__(0x185), 'utf8');
var arr = input[__DECODE_0__(0x17a)]()[__DECODE_0__(0x17f)]('\x0a');
while (!![]) {
  var wd = arr['shift']();
  if (wd == __DECODE_0__(0x17e)) {
    break;
  }
  var W = arr['shift']()[__DECODE_0__(0x17f)]('\x20')[__DECODE_0__(0x180)](Number);
  var D = arr[__DECODE_0__(0x181)]()[__DECODE_0__(0x17f)]('\x20')[__DECODE_0__(0x180)](Number);
  var sum = W[__DECODE_0__(0x17b)](function (a, b) {
    return a + b;
  });
  D[__DECODE_0__(0x188)](function (v) {
    var index = W['indexOf'](v);
    if (index != -0x1) {
      W[index] = '';
    } else {
      sum += v;
    }
  });
  console[__DECODE_0__(0x186)](sum);
}
