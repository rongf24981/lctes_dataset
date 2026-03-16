var a0_0xe95b0c = __DECODE_0__;
function __DECODE_0__(SEHeVB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ec;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SEHeVB, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0x502142 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x502142(0x1f1)) / 0x1 * (-parseInt(_0x502142(0x1f8)) / 0x2) + parseInt(_0x502142(0x1f2)) / 0x3 * (-parseInt(_0x502142(0x1ec)) / 0x4) + -parseInt(_0x502142(0x1f9)) / 0x5 * (parseInt(_0x502142(0x1fc)) / 0x6) + -parseInt(_0x502142(0x1f5)) / 0x7 + parseInt(_0x502142(0x1ee)) / 0x8 + -parseInt(_0x502142(0x1f3)) / 0x9 * (-parseInt(_0x502142(0x1f4)) / 0xa) + parseInt(_0x502142(0x1ef)) / 0xb * (parseInt(_0x502142(0x1ed)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb5502);
var input = require('fs')[a0_0xe95b0c(0x1fb)]('/dev/stdin', a0_0xe95b0c(0x1f6));
var [x, y] = input[a0_0xe95b0c(0x1f0)]()[a0_0xe95b0c(0x1f7)]('\x20')['map'](Number);
var cnt = 0x0;
for (var i = 0x0; i <= x; i++) {
  if (y * i * 0x2 / (x * 0x2) % 0x1 === 0x0) {
    cnt++;
  }
}
function __STRING_ARRAY__() {
  var _0x5b548e = ['245694aEcOFR', '4TNHsuX', '23950572IPUeKX', '5254520uWqtGs', '11gVzCsF', 'trim', '6JiRIRB', '2552955obTiub', '108MOhhRQ', '82490dnUYaP', '7094682htWlUp', 'utf8', 'split', '34522xmhtzE', '5fyBYGo', 'log', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x5b548e;
  };
  return __STRING_ARRAY__();
}
console[a0_0xe95b0c(0x1fa)](x + 0x1 + y + 0x1 - cnt);
