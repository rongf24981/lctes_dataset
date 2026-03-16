function __DECODE_0__(ifCnTu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1f4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ifCnTu, key);
}
function __STRING_ARRAY__() {
  var _0x967f96 = ['readFileSync', '1081494fteWwn', '2120hVbyLp', '210950mFedbL', '273IXlHTB', '1077096juxyjj', '730124wkPVkH', '2181543jkocEy', '15tfqjMB', '90GufCyA', '/dev/stdin', '16AxERDY', '30moUReZ', '3547302RsXYBX', 'utf8', '102VpbBDu', 'map', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x967f96;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x204)) / 0x1 * (-parseInt(__DECODE_0__(0x1f9)) / 0x2) + parseInt(__DECODE_0__(0x1f8)) / 0x3 * (parseInt(__DECODE_0__(0x1f6)) / 0x4) + parseInt(__DECODE_0__(0x205)) / 0x5 * (parseInt(__DECODE_0__(0x1ff)) / 0x6) + -parseInt(__DECODE_0__(0x1f7)) / 0x7 * (-parseInt(__DECODE_0__(0x1fb)) / 0x8) + parseInt(__DECODE_0__(0x203)) / 0x9 * (parseInt(__DECODE_0__(0x1fc)) / 0xa) + -parseInt(__DECODE_0__(0x1fd)) / 0xb + -parseInt(__DECODE_0__(0x1f5)) / 0xc * (parseInt(__DECODE_0__(0x1f4)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7a7b1);
function Main(input) {
  var data = input['split'](/\a\n|\a|\n/)[__DECODE_0__(0x200)](function (s) {
    return parseInt(s);
  });
  var x = [[data[0x0], data[0x1], 0x0], [0x0, data[0x2], 0x0], [0x0, 0x0, 0x0]];
  var sum = 0x3 * x[0x1][0x1];
  x[0x0][0x2] = sum - x[0x0][0x0] - x[0x0][0x1];
  x[0x2][0x1] = sum - x[0x0][0x1] - x[0x1][0x1];
  x[0x2][0x2] = sum - x[0x0][0x0] - x[0x1][0x1];
  x[0x2][0x0] = sum - x[0x2][0x1] - x[0x2][0x2];
  x[0x1][0x0] = sum - x[0x0][0x0] - x[0x2][0x0];
  x[0x1][0x2] = sum - x[0x0][0x2] - x[0x2][0x2];
  console[__DECODE_0__(0x201)](x[0x0][0x0] + '\x20' + x[0x0][0x1] + '\x20' + x[0x0][0x2]);
  console[__DECODE_0__(0x201)](x[0x1][0x0] + '\x20' + x[0x1][0x1] + '\x20' + x[0x1][0x2]);
  console[__DECODE_0__(0x201)](x[0x2][0x0] + '\x20' + x[0x2][0x1] + '\x20' + x[0x2][0x2]);
}
Main(require('fs')[__DECODE_0__(0x202)](__DECODE_0__(0x1fa), __DECODE_0__(0x1fe)));
