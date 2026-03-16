(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x10a)) / 0x1 + -parseInt(__DECODE_0__(0x109)) / 0x2 * (-parseInt(__DECODE_0__(0x111)) / 0x3) + parseInt(__DECODE_0__(0x105)) / 0x4 * (-parseInt(__DECODE_0__(0x107)) / 0x5) + parseInt(__DECODE_0__(0x10c)) / 0x6 * (parseInt(__DECODE_0__(0x104)) / 0x7) + parseInt(__DECODE_0__(0x106)) / 0x8 * (-parseInt(__DECODE_0__(0x103)) / 0x9) + -parseInt(__DECODE_0__(0x10e)) / 0xa + -parseInt(__DECODE_0__(0x108)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x683ba);
input = require('fs')[__DECODE_0__(0x10f)]('/dev/stdin', __DECODE_0__(0x10d));
lines = input['split']('\x0a');
N = lines[__DECODE_0__(0x10b)]() * 0x1;
ans = Math['floor'](N / 0xb) * 0x2;
m = N % 0xb;
function __STRING_ARRAY__() {
  var _0x2fd87d = ['readFileSync', 'log', '27wBptRZ', '69606XoBhiI', '3971303TchgTX', '1400772RxLoPy', '560TmVTJt', '5mTHJnp', '2177989yikSvQ', '111510WdRGfB', '453101gkHKiA', 'shift', '6EOPTsr', 'utf8', '57150SRHRoO'];
  __STRING_ARRAY__ = function () {
    return _0x2fd87d;
  };
  return __STRING_ARRAY__();
}
if (m == 0x0) {} else {
  if (m <= 0x6) {
    ans += 0x1;
  } else {
    ans += 0x2;
  }
}
function __DECODE_0__(NKGLub, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x103;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NKGLub, key);
}
console[__DECODE_0__(0x110)](ans);
