function __STRING_ARRAY__() {
  var _0x2bec26 = ['readFileSync', '7190bVEeUY', 'log', '6724384vzsfBv', '1812622ruiDZD', '785Cljpsy', '36444miKcQf', '/dev/stdin', '19849247uvCZSn', '6kJsZnw', 'shift', '71206tzUPLp', '4TGowXo', '8226TukAbP', '1216731xRPoYZ', '12qNWBVN', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x2bec26;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x13f)) / 0x1 * (parseInt(__DECODE_0__(0x13d)) / 0x2) + -parseInt(__DECODE_0__(0x142)) / 0x3 * (-parseInt(__DECODE_0__(0x140)) / 0x4) + parseInt(__DECODE_0__(0x139)) / 0x5 * (parseInt(__DECODE_0__(0x13a)) / 0x6) + -parseInt(__DECODE_0__(0x138)) / 0x7 + parseInt(__DECODE_0__(0x137)) / 0x8 + -parseInt(__DECODE_0__(0x141)) / 0x9 * (-parseInt(__DECODE_0__(0x135)) / 0xa) + -parseInt(__DECODE_0__(0x13c)) / 0xb * (parseInt(__DECODE_0__(0x143)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8d91c);
input = require('fs')[__DECODE_0__(0x145)](__DECODE_0__(0x13b), 'utf8');
lines = input['split']('\x0a');
function __DECODE_0__(UdBenh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x135;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UdBenh, key);
}
N = lines[__DECODE_0__(0x13e)]() * 0x1;
A = lines[__DECODE_0__(0x13e)]()[__DECODE_0__(0x144)]('\x20');
h = 0x0;
cnt = 0x0;
for (i = 0x0; i < N; i++) {
  if (h <= A[i]) {
    cnt++;
    h = A[i];
  }
}
console[__DECODE_0__(0x136)](cnt);
