function __DECODE_0__(YGfoMP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xdc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YGfoMP, key);
}
function __STRING_ARRAY__() {
  var _0x73a789 = ['233337qZttWL', '15uqvkFi', 'readFileSync', 'split', '2183964jhnbXe', 'fill', 'pow', '16lGYpnM', '142694MlMdDY', 'max', '/dev/stdin', '656MuTzoj', '1573998eWiOat', 'min', '12462261zhiMaB', 'utf8', '2742010CMGGQG', '186939HEBjlR'];
  __STRING_ARRAY__ = function () {
    return _0x73a789;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe5)) / 0x1 + -parseInt(__DECODE_0__(0xe4)) / 0x2 * (parseInt(__DECODE_0__(0xdd)) / 0x3) + parseInt(__DECODE_0__(0xe1)) / 0x4 * (parseInt(__DECODE_0__(0xde)) / 0x5) + parseInt(__DECODE_0__(0xe9)) / 0x6 + parseInt(__DECODE_0__(0xeb)) / 0x7 + parseInt(__DECODE_0__(0xe8)) / 0x8 * (-parseInt(__DECODE_0__(0xdc)) / 0x9) + -parseInt(__DECODE_0__(0xed)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe5128);
function Main(input) {
  input = input[__DECODE_0__(0xe0)]('\x0a');
  tmp = input[0x0][__DECODE_0__(0xe0)]('\x20');
  var n = parseInt(tmp[0x0]);
  a = new Array(n)[__DECODE_0__(0xe2)](0x0);
  for (i = 0x0; i < n; i++) {
    a[i] = parseInt(input[0x1][__DECODE_0__(0xe0)]('\x20')[i]);
  }
  b = new Array(n)[__DECODE_0__(0xe2)](0x0);
  var min = Math[__DECODE_0__(0xe3)](0xa, 0x9);
  var max = -0x1;
  for (i = 0x0; i < n; i++) {
    min = Math[__DECODE_0__(0xea)](min, a[i]);
    if (max < a[i] - min) {
      ans = 0x1;
    }
    if (max == a[i] - min) {
      ans++;
    }
    max = Math[__DECODE_0__(0xe6)](max, a[i] - min);
  }
  console['log']('%s', ans);
}
Main(require('fs')[__DECODE_0__(0xdf)](__DECODE_0__(0xe7), __DECODE_0__(0xec)));
