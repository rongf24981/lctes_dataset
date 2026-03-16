(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1e2)) / 0x1 + parseInt(__DECODE_0__(0x1e4)) / 0x2 + parseInt(__DECODE_0__(0x1ea)) / 0x3 * (-parseInt(__DECODE_0__(0x1f0)) / 0x4) + parseInt(__DECODE_0__(0x1ec)) / 0x5 + -parseInt(__DECODE_0__(0x1f2)) / 0x6 + -parseInt(__DECODE_0__(0x1e9)) / 0x7 * (parseInt(__DECODE_0__(0x1e6)) / 0x8) + parseInt(__DECODE_0__(0x1e3)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2a063);
function __STRING_ARRAY__() {
  var _0x48934a = ['135FjmYBj', '0\x200\x200', '1388410KZkolh', 'trim', 'readFileSync', 'log', '14076kmMzbo', 'split', '861786dNPWDg', 'map', '274702SbFoSe', '5265351uBrXwN', '156766PSPekL', 'utf8', '8VKKEjO', 'forEach', '/dev/stdin', '1345995IqeRqi'];
  __STRING_ARRAY__ = function () {
    return _0x48934a;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[__DECODE_0__(0x1ee)](__DECODE_0__(0x1e8), __DECODE_0__(0x1e5));
var arr = input[__DECODE_0__(0x1ed)]()['split']('\x0a');
function __DECODE_0__(yliTxm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yliTxm, key);
}
while (!![]) {
  var nab = arr['shift']();
  if (nab == __DECODE_0__(0x1eb)) {
    break;
  }
  nab = nab[__DECODE_0__(0x1f1)]('\x20')[__DECODE_0__(0x1e1)](Number);
  var n = nab[0x0];
  var ab = [nab[0x1], nab[0x2]];
  var dp = [];
  for (var i = 0x0; i <= n; i++) {
    dp[i] = ![];
  }
  dp[0x0] = !![];
  for (var i = 0x0; i < ab['length']; i++) {
    for (var j = 0x0; j <= n; j++) {
      if (dp[j]) {
        dp[j + ab[i]] = !![];
      }
    }
  }
  var cnt = 0x0;
  dp[__DECODE_0__(0x1e7)](function (v) {
    if (v == ![]) {
      cnt++;
    }
  });
  console[__DECODE_0__(0x1ef)](cnt);
}
