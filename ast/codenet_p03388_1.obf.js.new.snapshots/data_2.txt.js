function __DECODE_0__(CuDlgy, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CuDlgy, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe4)) / 0x1 * (parseInt(__DECODE_0__(0xda)) / 0x2) + parseInt(__DECODE_0__(0xd5)) / 0x3 * (-parseInt(__DECODE_0__(0xe3)) / 0x4) + parseInt(__DECODE_0__(0xd7)) / 0x5 * (parseInt(__DECODE_0__(0xdc)) / 0x6) + parseInt(__DECODE_0__(0xe7)) / 0x7 * (-parseInt(__DECODE_0__(0xe5)) / 0x8) + -parseInt(__DECODE_0__(0xde)) / 0x9 + -parseInt(__DECODE_0__(0xdb)) / 0xa * (-parseInt(__DECODE_0__(0xe6)) / 0xb) + parseInt(__DECODE_0__(0xdd)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x283ae);
function __STRING_ARRAY__() {
  var _0x58832f = ['44RTIulF', '316696aYHpiy', '11UoINag', '56vLHkkn', 'ceil', 'readFileSync', '51dSrmVX', 'split', '380zcTxBC', '/dev/stdin', 'log', '4234ZnSowD', '2040680VbbQub', '9966HGBSpN', '6289044VRSrTi', '1604322DrBpxI', 'max', 'utf8', 'map', 'sqrt', '23884qYkBkz'];
  __STRING_ARRAY__ = function () {
    return _0x58832f;
  };
  return __STRING_ARRAY__();
}
function Main(s) {
  s = s[__DECODE_0__(0xd6)]('\x0a');
  const q = +s[0x0];
  for (var i = 0x0; i < q; i++) {
    var a = s[i + 0x1]['split']('\x20')[__DECODE_0__(0xe1)](a => +a);
    var b = Math[__DECODE_0__(0xdf)](a[0x0], a[0x1]);
    a = Math['min'](a[0x0], a[0x1]);
    var c = Math[__DECODE_0__(0xe8)](Math[__DECODE_0__(0xe2)](a * b));
    var ans = (a - 0x1) * 0x2;
    if (a < b - 0x1) {
      ans++;
    }
    for (var j = a + 0x1; j < c; j++) {
      if (Math['floor'](a / j * b) === j) {
        ans++;
      } else {
        ans += 0x2;
      }
    }
    console[__DECODE_0__(0xd9)](ans);
  }
}
Main(require('fs')[__DECODE_0__(0xe9)](__DECODE_0__(0xd8), __DECODE_0__(0xe0)));
