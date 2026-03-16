function __DECODE_0__(rfXApk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rfXApk, key);
}
function __STRING_ARRAY__() {
  var _0x4ecaf8 = ['split', 'trim', '3882393RNjOqg', 'map', '61836UVnPdk', '21616727ohARfA', 'log', 'readFileSync', '545ojqlzD', '128CDXvTS', 'utf8', '/dev/stdin', 'sort', '11410430yaQVYv', '2750328whiGXc', '18022ZMrltu', 'splice', '4DvrDUw', '2851896vWqyjq', '8kinrAj'];
  __STRING_ARRAY__ = function () {
    return _0x4ecaf8;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xd8)) / 0x1 * (-parseInt(__DECODE_0__(0xd2)) / 0x2) + -parseInt(__DECODE_0__(0xdb)) / 0x3 * (-parseInt(__DECODE_0__(0xda)) / 0x4) + parseInt(__DECODE_0__(0xd1)) / 0x5 * (parseInt(__DECODE_0__(0xe1)) / 0x6) + parseInt(__DECODE_0__(0xd7)) / 0x7 + parseInt(__DECODE_0__(0xdc)) / 0x8 * (parseInt(__DECODE_0__(0xdf)) / 0x9) + parseInt(__DECODE_0__(0xd6)) / 0xa + -parseInt(__DECODE_0__(0xe2)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe0ca9);
function Main(s) {
  s = s[__DECODE_0__(0xdd)]('\x0a');
  var n = parseInt(s[0x0]);
  var a = Array(n);
  var c = Array(n);
  for (var i = 0x0; i < n; i++) {
    a[i] = s[i + 0x1][__DECODE_0__(0xdd)]('\x20')[__DECODE_0__(0xe0)](a => parseInt(a));
  }
  for (var i = 0x0; i < n; i++) {
    c[i] = s[i + n + 0x1][__DECODE_0__(0xdd)]('\x20')[__DECODE_0__(0xe0)](a => parseInt(a));
  }
  a = a[__DECODE_0__(0xd5)]((a, b) => a[0x1] - b[0x1]);
  a = a[__DECODE_0__(0xd5)]((a, b) => a[0x0] - b[0x0]);
  c = c[__DECODE_0__(0xd5)]((a, b) => a[0x0] - b[0x0]);
  c = c[__DECODE_0__(0xd5)]((a, b) => b[0x1] - a[0x1]);
  var ans = 0x0;
  for (i = n - 0x1; i >= 0x0; i--) {
    for (var j = c['length'] - 0x1; j >= 0x0; j--) {
      if (a[i][0x0] < c[j][0x0] && a[i][0x1] < c[j][0x1]) {
        ans++;
        c[__DECODE_0__(0xd9)](j, 0x1);
        break;
      }
    }
  }
  console[__DECODE_0__(0xcf)](ans);
}
Main(require('fs')[__DECODE_0__(0xd0)](__DECODE_0__(0xd4), __DECODE_0__(0xd3))[__DECODE_0__(0xde)]());
