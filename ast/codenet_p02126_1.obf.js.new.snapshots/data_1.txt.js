var a0_0x6d2c10 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4fc4d7 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x4fc4d7(0xd1)) / 0x1 + parseInt(_0x4fc4d7(0xd4)) / 0x2 * (parseInt(_0x4fc4d7(0xdd)) / 0x3) + parseInt(_0x4fc4d7(0xce)) / 0x4 + -parseInt(_0x4fc4d7(0xd9)) / 0x5 * (-parseInt(_0x4fc4d7(0xde)) / 0x6) + -parseInt(_0x4fc4d7(0xda)) / 0x7 + -parseInt(_0x4fc4d7(0xd0)) / 0x8 * (-parseInt(_0x4fc4d7(0xcf)) / 0x9) + -parseInt(_0x4fc4d7(0xd7)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1f9f5);
var input = require('fs')['readFileSync'](a0_0x6d2c10(0xd3), 'utf8');
var arr = input[a0_0x6d2c10(0xdc)]()[a0_0x6d2c10(0xd8)]('\x0a');
var [n, m, c] = arr[a0_0x6d2c10(0xdb)]()[a0_0x6d2c10(0xd8)]('\x20')[a0_0x6d2c10(0xd2)](Number);
var L = arr['shift']()[a0_0x6d2c10(0xd8)]('\x20')['map'](Number);
function __DECODE_0__(kMnHlN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xce;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kMnHlN, key);
}
var cw = arr[a0_0x6d2c10(0xd2)](v => v[a0_0x6d2c10(0xd8)]('\x20')[a0_0x6d2c10(0xd2)](Number));
cw['sort'](function (a, b) {
  return b[0x1] - a[0x1];
});
var sum = 0x0;
for (var i = 0x0; i < cw[a0_0x6d2c10(0xd5)]; i++) {
  if (m == 0x0) {
    break;
  }
  var max = L[cw[i][0x0] - 0x1];
  if (max > 0x0) {
    sum += cw[i][0x1];
    L[cw[i][0x0] - 0x1]--;
    m--;
  }
}
console[a0_0x6d2c10(0xd6)](sum);
function __STRING_ARRAY__() {
  var _0xe60a8e = ['length', 'log', '3175190cIkuJX', 'split', '605495lLUIug', '926401PTopuw', 'shift', 'trim', '4701MJDZWI', '6IYIviI', '344516OunZNL', '18rdMlnL', '964744tvxlfb', '110602zKEinb', 'map', '/dev/stdin', '26WCiLyC'];
  __STRING_ARRAY__ = function () {
    return _0xe60a8e;
  };
  return __STRING_ARRAY__();
}
