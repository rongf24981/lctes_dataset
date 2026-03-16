function __DECODE_0__(aLaAky, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aLaAky, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x19c)) / 0x1 * (-parseInt(__DECODE_0__(0x191)) / 0x2) + -parseInt(__DECODE_0__(0x19e)) / 0x3 + -parseInt(__DECODE_0__(0x192)) / 0x4 * (parseInt(__DECODE_0__(0x193)) / 0x5) + parseInt(__DECODE_0__(0x1a1)) / 0x6 * (-parseInt(__DECODE_0__(0x190)) / 0x7) + -parseInt(__DECODE_0__(0x194)) / 0x8 * (parseInt(__DECODE_0__(0x1a3)) / 0x9) + parseInt(__DECODE_0__(0x18e)) / 0xa + parseInt(__DECODE_0__(0x19b)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x96918);
var input = require('fs')[__DECODE_0__(0x18f)]('/dev/stdin', __DECODE_0__(0x1a2));
var Arr = input['replace'](/\n$/, '')[__DECODE_0__(0x196)]('\x0a');
while (!![]) {
  var n = Arr[__DECODE_0__(0x199)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var str = '';
  for (var i = 0x0; i < n; i++) {
    str += Arr['shift']() + '\x20';
  }
  var arr = str[__DECODE_0__(0x198)]()[__DECODE_0__(0x196)]('\x20');
  var s = Arr[__DECODE_0__(0x199)]();
  var f = arr[__DECODE_0__(0x197)](function (v) {
    return v[0x0] == s;
  });
  f['sort']();
  var F = [];
  var memo = '';
  for (var i = 0x0; i < f[__DECODE_0__(0x19a)]; i++) {
    if (memo == f[i]) {
      F[F[__DECODE_0__(0x19a)] - 0x1] = [f[i], F[F[__DECODE_0__(0x19a)] - 0x1][0x1] + 0x1];
    } else {
      F['push']([f[i], 0x1]);
      memo = f[i];
    }
  }
  F[__DECODE_0__(0x1a0)](function (a, b) {
    if (a[0x1] == b[0x1]) {
      return a[0x0] > b[0x0];
    } else {
      return b[0x1] - a[0x1];
    }
  });
  var ans = [];
  for (var i = 0x0; i < 0x5; i++) {
    if (F[__DECODE_0__(0x19a)] > i) {
      ans[__DECODE_0__(0x19d)](F[i][0x0]);
    }
  }
  console[__DECODE_0__(0x195)](ans[__DECODE_0__(0x19a)] > 0x0 ? ans[__DECODE_0__(0x19f)]('\x20') : 'NA');
}
function __STRING_ARRAY__() {
  var _0x1a902e = ['push', '477216avZtiB', 'join', 'sort', '1816740EhCGBB', 'utf8', '9643383fHvDNe', '5717590hrYpLC', 'readFileSync', '7uytriV', '16922KcfXLX', '92044slbKoP', '195HqHGFi', '8ZqhOfJ', 'log', 'split', 'filter', 'trim', 'shift', 'length', '32259051aLMcuO', '54gtObXU'];
  __STRING_ARRAY__ = function () {
    return _0x1a902e;
  };
  return __STRING_ARRAY__();
}
