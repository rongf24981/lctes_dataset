function __STRING_ARRAY__() {
  var _0x4eb5be = ['4rVSJrj', '369008WypxqJ', '11krQlCs', '157OCqchB', '12HmlxWO', '/dev/stdin', 'trim', '305055gDjfHC', '587573nDpNjN', '54uIJStj', 'readFileSync', 'utf8', 'split', '12NmVxrt', '2003115Gblbym', '0\x200', 'push', 'log', '11622ffFjOj', 'shift', '24893778pkbPRb', '5817760XoLnaC'];
  __STRING_ARRAY__ = function () {
    return _0x4eb5be;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xb4)) / 0x1 * (parseInt(__DECODE_0__(0xad)) / 0x2) + parseInt(__DECODE_0__(0xa2)) / 0x3 + -parseInt(__DECODE_0__(0xb1)) / 0x4 * (parseInt(__DECODE_0__(0xa9)) / 0x5) + parseInt(__DECODE_0__(0xb5)) / 0x6 * (parseInt(__DECODE_0__(0xa3)) / 0x7) + parseInt(__DECODE_0__(0xb2)) / 0x8 * (parseInt(__DECODE_0__(0xa4)) / 0x9) + -parseInt(__DECODE_0__(0xb0)) / 0xa * (parseInt(__DECODE_0__(0xb3)) / 0xb) + parseInt(__DECODE_0__(0xa8)) / 0xc * (parseInt(__DECODE_0__(0xaf)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8a4e3);
var input = require('fs')[__DECODE_0__(0xa5)](__DECODE_0__(0xb6), __DECODE_0__(0xa6));
var Arr = input[__DECODE_0__(0xb7)]()[__DECODE_0__(0xa7)]('\x0a');
function __DECODE_0__(XYglBn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XYglBn, key);
}
while (!![]) {
  var np = Arr[__DECODE_0__(0xae)]();
  if (np == __DECODE_0__(0xaa)) {
    break;
  }
  np = np[__DECODE_0__(0xa7)]('\x20')['map'](Number);
  var n = np[0x0];
  var p = np[0x1];
  var sum = p;
  var arr = [];
  for (var i = 0x0; i < n; i++) {
    arr[__DECODE_0__(0xab)](0x0);
  }
  var j = 0x0;
  for (var i = 0x0; i < 0xf4240; i++) {
    if (j == arr['length']) {
      j = 0x0;
    }
    if (p > 0x0) {
      p--;
      arr[j]++;
      if (p == 0x0 && sum == arr[j]) {
        console[__DECODE_0__(0xac)](j);
        break;
      }
    } else {
      p = arr[j];
      arr[j] = 0x0;
    }
    j++;
  }
}
