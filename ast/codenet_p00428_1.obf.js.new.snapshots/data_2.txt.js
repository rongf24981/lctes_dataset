function __DECODE_0__(quQgyU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(quQgyU, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x7f)) / 0x1 * (-parseInt(__DECODE_0__(0x76)) / 0x2) + parseInt(__DECODE_0__(0x6f)) / 0x3 * (-parseInt(__DECODE_0__(0x70)) / 0x4) + parseInt(__DECODE_0__(0x7a)) / 0x5 + parseInt(__DECODE_0__(0x75)) / 0x6 + -parseInt(__DECODE_0__(0x6d)) / 0x7 + -parseInt(__DECODE_0__(0x72)) / 0x8 * (parseInt(__DECODE_0__(0x74)) / 0x9) + -parseInt(__DECODE_0__(0x80)) / 0xa * (-parseInt(__DECODE_0__(0x78)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2fa23);
var input = require('fs')[__DECODE_0__(0x73)](__DECODE_0__(0x7c), __DECODE_0__(0x71));
function __STRING_ARRAY__() {
  var _0x3fa5e2 = ['1114045XYgByi', 'shift', '/dev/stdin', 'sum', 'trim', '14069JddCfS', '30zcIIQN', '340697pgTVtx', 'push', '3BENUuB', '990764GVMHnn', 'utf8', '17808qNwoJj', 'readFileSync', '1062FiVYzq', '1872162ILabzi', '22fstlzV', 'split', '236654jeJvuT', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x3fa5e2;
  };
  return __STRING_ARRAY__();
}
var Arr = input[__DECODE_0__(0x7e)]()[__DECODE_0__(0x77)]('\x0a');
while (!![]) {
  var NM = Arr[__DECODE_0__(0x7b)]();
  if (NM == '0\x200') {
    break;
  }
  var nm = NM['split']('\x20')[__DECODE_0__(0x79)](Number);
  var n = nm[0x0];
  var m = nm[0x1];
  var arr = [];
  for (var i = 0x0; i < m; i++) {
    arr['push']({
      'x': i + 0x1,
      'sum': 0x0
    });
  }
  for (var i = 0x0; i < n; i++) {
    var data = Arr['shift']()[__DECODE_0__(0x77)]('\x20')[__DECODE_0__(0x79)](Number);
    arr['forEach'](function (v, j) {
      arr[j]['sum'] += data[j];
    });
  }
  arr['sort'](function (a, b) {
    a = a[__DECODE_0__(0x7d)];
    b = b[__DECODE_0__(0x7d)];
    return b - a;
  });
  var c = [];
  arr['forEach'](function (v) {
    c[__DECODE_0__(0x6e)](v['x']);
  });
  console['log'](c['join']('\x20'));
}
