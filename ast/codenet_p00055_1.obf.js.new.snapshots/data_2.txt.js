(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d9)) / 0x1 + parseInt(__DECODE_0__(0x1e3)) / 0x2 + parseInt(__DECODE_0__(0x1e1)) / 0x3 + -parseInt(__DECODE_0__(0x1dc)) / 0x4 * (-parseInt(__DECODE_0__(0x1e2)) / 0x5) + -parseInt(__DECODE_0__(0x1d6)) / 0x6 * (parseInt(__DECODE_0__(0x1d8)) / 0x7) + -parseInt(__DECODE_0__(0x1e0)) / 0x8 * (-parseInt(__DECODE_0__(0x1dd)) / 0x9) + parseInt(__DECODE_0__(0x1de)) / 0xa * (-parseInt(__DECODE_0__(0x1d7)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xaae22);
function __STRING_ARRAY__() {
  var _0x31596d = ['utf8', 'forEach', '2132HPJCcR', '4149JcYXkm', '21410dsfQZl', 'toFixed', '23536zlQyQC', '776226bLdMIP', '85ZqplrU', '1930898JNjxDu', 'readFileSync', '/dev/stdin', 'map', '750JXTcTD', '2035DbUsnc', '15316oapezB', '1219991kcdUEK'];
  __STRING_ARRAY__ = function () {
    return _0x31596d;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(QNfVwg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QNfVwg, key);
}
var input = require('fs')[__DECODE_0__(0x1d3)](__DECODE_0__(0x1d4), __DECODE_0__(0x1da));
var Arr = input['trim']()['split']('\x0a')[__DECODE_0__(0x1d5)](Number);
Arr[__DECODE_0__(0x1db)](function (v) {
  var arr = [0x0, v];
  for (var i = 0x2; i <= 0xa; i++) {
    arr[i] = i % 0x2 == 0x0 ? arr[i - 0x1] * 0x2 : arr[i - 0x1] / 0x3;
  }
  var sum = arr['reduce'](function (a, b) {
    return a + b;
  });
  console['log'](sum[__DECODE_0__(0x1df)](0x8));
});
