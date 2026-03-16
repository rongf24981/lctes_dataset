(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1f9)) / 0x1 * (-parseInt(__DECODE_0__(0x1f7)) / 0x2) + -parseInt(__DECODE_0__(0x1fc)) / 0x3 * (-parseInt(__DECODE_0__(0x201)) / 0x4) + -parseInt(__DECODE_0__(0x1ee)) / 0x5 * (parseInt(__DECODE_0__(0x1f5)) / 0x6) + -parseInt(__DECODE_0__(0x1ff)) / 0x7 * (-parseInt(__DECODE_0__(0x1ed)) / 0x8) + parseInt(__DECODE_0__(0x1eb)) / 0x9 * (-parseInt(__DECODE_0__(0x1fa)) / 0xa) + parseInt(__DECODE_0__(0x1f4)) / 0xb * (parseInt(__DECODE_0__(0x1fe)) / 0xc) + parseInt(__DECODE_0__(0x200)) / 0xd;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x6006c);
function __DECODE_0__(ZqPrdP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1eb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZqPrdP, key);
}
var input = require('fs')[__DECODE_0__(0x1f2)](__DECODE_0__(0x1fd), __DECODE_0__(0x1f3));
var arr = input[__DECODE_0__(0x1f8)]()['split']('\x0a');
var [n, d] = arr[__DECODE_0__(0x1f0)]()['split']('\x20')['map'](Number);
var p = arr[__DECODE_0__(0x1f0)]()[__DECODE_0__(0x1ef)]('\x20')[__DECODE_0__(0x1f6)](Number);
var sum = 0x0;
function __STRING_ARRAY__() {
  var _0x4de65e = ['237GwRYFm', '/dev/stdin', '24hKSvbp', '510307NVnVBA', '5689853JOcDUF', '22492RaXrfQ', '9oGpuKF', 'max', '8CCIUXf', '65oodJQd', 'split', 'shift', 'forEach', 'readFileSync', 'utf8', '2501653HDtCNk', '341538IatDFl', 'map', '49076GqBoaz', 'trim', '3tVdQik', '2027080EegJTG', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x4de65e;
  };
  return __STRING_ARRAY__();
}
p[__DECODE_0__(0x1f1)](v => {
  sum += Math[__DECODE_0__(0x1ec)](0x0, v - d);
});
console[__DECODE_0__(0x1fb)](sum == 0x0 ? 'kusoge' : sum);
