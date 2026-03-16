(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x16a)) / 0x1 + -parseInt(__DECODE_0__(0x16f)) / 0x2 + -parseInt(__DECODE_0__(0x16c)) / 0x3 + parseInt(__DECODE_0__(0x177)) / 0x4 * (-parseInt(__DECODE_0__(0x168)) / 0x5) + parseInt(__DECODE_0__(0x175)) / 0x6 + -parseInt(__DECODE_0__(0x16d)) / 0x7 * (-parseInt(__DECODE_0__(0x176)) / 0x8) + parseInt(__DECODE_0__(0x166)) / 0x9 * (parseInt(__DECODE_0__(0x16e)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9db9f);
var input = require('fs')[__DECODE_0__(0x174)](__DECODE_0__(0x16b), __DECODE_0__(0x172));
var arr = input[__DECODE_0__(0x178)]()['split']('\x0a');
var [m, n] = arr[__DECODE_0__(0x169)]()['split']('\x20')[__DECODE_0__(0x171)](Number);
function __DECODE_0__(QOMFYj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x166;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QOMFYj, key);
}
function __STRING_ARRAY__() {
  var _0x245f6e = ['145044FQLGuR', 'trim', '9hHjFDM', 'log', '105LRDcyK', 'shift', '374967eVGOHR', '/dev/stdin', '3445341TZtJSW', '6916189TibrWq', '6813670YJTxie', '1240844jJHAEP', 'split', 'map', 'utf8', 'min', 'readFileSync', '6792216EknFHf', '8CQTLkq'];
  __STRING_ARRAY__ = function () {
    return _0x245f6e;
  };
  return __STRING_ARRAY__();
}
var a = arr[__DECODE_0__(0x169)]()[__DECODE_0__(0x170)]('\x20');
if (m == 0x2) {
  var cnt = [0x0, 0x0];
  for (var i = 0x0; i < n; i++) {
    if (a[i] - 0x1 == i % 0x2) {
      cnt[0x0]++;
    }
    if (a[i] - 0x1 == (i + 0x1) % 0x2) {
      cnt[0x1]++;
    }
  }
  console[__DECODE_0__(0x167)](Math[__DECODE_0__(0x173)](...cnt));
} else {
  var cnt = 0x0;
  for (var i = 0x1; i < n; i++) {
    if (a[i - 0x1] == a[i]) {
      cnt++;
      i++;
    }
  }
  console[__DECODE_0__(0x167)](cnt);
}
