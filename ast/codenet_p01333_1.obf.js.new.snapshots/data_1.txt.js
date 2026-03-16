function __DECODE_0__(tFIcdF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(tFIcdF, key);
}
var a0_0x51dd62 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4ea9de = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x4ea9de(0x1a9)) / 0x1 + -parseInt(_0x4ea9de(0x1a7)) / 0x2 * (parseInt(_0x4ea9de(0x1af)) / 0x3) + -parseInt(_0x4ea9de(0x1b4)) / 0x4 * (-parseInt(_0x4ea9de(0x1a2)) / 0x5) + -parseInt(_0x4ea9de(0x1a3)) / 0x6 * (-parseInt(_0x4ea9de(0x1a5)) / 0x7) + parseInt(_0x4ea9de(0x1ae)) / 0x8 * (-parseInt(_0x4ea9de(0x1aa)) / 0x9) + -parseInt(_0x4ea9de(0x1ac)) / 0xa * (-parseInt(_0x4ea9de(0x1ab)) / 0xb) + parseInt(_0x4ea9de(0x1b3)) / 0xc * (parseInt(_0x4ea9de(0x1b0)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe03b9);
function __STRING_ARRAY__() {
  var _0x4feb4b = ['trim', 'split', '84HpRFSN', '24zFFKfA', '851055MXyVVp', '6xknYOV', 'join', '642530kMLZjC', '/dev/stdin', '34RmOPsO', 'utf8', '1543504niBuzh', '84951MAMbVL', '53471hmwhmk', '1560rJgHXc', 'shift', '48esuiQl', '97332XomNNE', '2226289hxfkDX'];
  __STRING_ARRAY__ = function () {
    return _0x4feb4b;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')['readFileSync'](a0_0x51dd62(0x1a6), a0_0x51dd62(0x1a8));
var Arr = input[a0_0x51dd62(0x1b1)]()[a0_0x51dd62(0x1b2)]('\x0a');
while (!![]) {
  var ab = Arr[a0_0x51dd62(0x1ad)]()[a0_0x51dd62(0x1b2)]('\x20');
  ;
  if (ab[0x0] == 0x0 && ab[0x1] == 0x0) {
    break;
  }
  var m = ab[0x1] - ab[0x0];
  var arr = [0x0, 0x0, 0x0];
  while (m >= 0x3e8) {
    m -= 0x3e8;
    arr[0x2]++;
  }
  while (m >= 0x1f4) {
    m -= 0x1f4;
    arr[0x1]++;
  }
  while (m >= 0x64) {
    m -= 0x64;
    arr[0x0]++;
  }
  console['log'](arr[a0_0x51dd62(0x1a4)]('\x20'));
}
