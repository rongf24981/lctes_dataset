function __STRING_ARRAY__() {
  var _0x57f9d3 = ['/dev/stdin', 'map', '684480QBHuty', '5241369XsLnpB', 'utf8', '5223354TmLoHA', '12835125fYtaLP', '45RCTAcP', 'length', 'split', 'forEach', '1JhhDcj', '162612ggPivX', 'trim', '14onTjKW', '2207200AtfNoS', '1159348lBqqWS'];
  __STRING_ARRAY__ = function () {
    return _0x57f9d3;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(roBqWp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x104;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(roBqWp, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x10e)) / 0x1 * (parseInt(__DECODE_0__(0x113)) / 0x2) + -parseInt(__DECODE_0__(0x106)) / 0x3 + parseInt(__DECODE_0__(0x10f)) / 0x4 * (parseInt(__DECODE_0__(0x10a)) / 0x5) + -parseInt(__DECODE_0__(0x108)) / 0x6 * (-parseInt(__DECODE_0__(0x111)) / 0x7) + -parseInt(__DECODE_0__(0x112)) / 0x8 + parseInt(__DECODE_0__(0x109)) / 0x9 + parseInt(__DECODE_0__(0x105)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf3dd7);
var input = require('fs')['readFileSync'](__DECODE_0__(0x114), __DECODE_0__(0x107));
var arr = input[__DECODE_0__(0x110)]()[__DECODE_0__(0x10c)]('\x0a');
arr[__DECODE_0__(0x10d)](function (value) {
  var vd = value[__DECODE_0__(0x10c)]('\x20')[__DECODE_0__(0x104)](Number);
  var v = vd[0x0];
  var d = vd[0x1];
  var f = [];
  f[0x0] = 0x1;
  f[0x1] = 0x2;
  for (var i = 0x2; i <= v; i++) {
    f[i] = (f[i - 0x1] + f[i - 0x2]) % 0x3e9;
  }
  f['shift']();
  f['sort'](function (a, b) {
    return a - b;
  });
  var cnt = 0x0;
  for (var i = 0x1; i < f['length']; i++) {
    if (f[i] - f[i - 0x1] < d) {
      cnt++;
    }
  }
  console['log'](f[__DECODE_0__(0x10b)] - cnt);
});
