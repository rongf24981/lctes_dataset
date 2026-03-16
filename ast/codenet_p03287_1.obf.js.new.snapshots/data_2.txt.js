function __DECODE_0__(KOsEDO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KOsEDO, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xa8)) / 0x1 + parseInt(__DECODE_0__(0xaf)) / 0x2 * (parseInt(__DECODE_0__(0xae)) / 0x3) + parseInt(__DECODE_0__(0xa5)) / 0x4 * (parseInt(__DECODE_0__(0xa6)) / 0x5) + -parseInt(__DECODE_0__(0xa3)) / 0x6 * (parseInt(__DECODE_0__(0xaa)) / 0x7) + -parseInt(__DECODE_0__(0xac)) / 0x8 + parseInt(__DECODE_0__(0xad)) / 0x9 + -parseInt(__DECODE_0__(0xab)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x79207);
function Main(s) {
  s = s[__DECODE_0__(0xb2)]('\x0a');
  var n = s[0x0][__DECODE_0__(0xb2)]('\x20')[__DECODE_0__(0xb0)](a => +a);
  var m = n[0x1];
  n = n[0x0];
  var a = s[0x1][__DECODE_0__(0xb2)]('\x20')[__DECODE_0__(0xb0)](a => +a);
  var ans = 0x0;
  var b = {};
  var t = 0x0;
  for (var i = 0x0; i < n; i++) {
    t = (t + a[i]) % m;
    if (b[t]) {
      b[t]++;
    } else {
      b[t] = 0x1;
    }
  }
  for (i in b) {
    i = +i;
    if (i === 0x0) {
      ans += b[i] * (b[i] + 0x1) / 0x2;
    } else {
      if (b[i] > 0x1) {
        ans += b[i] * (b[i] - 0x1) / 0x2;
      }
    }
  }
  console[__DECODE_0__(0xb1)](ans);
}
function __STRING_ARRAY__() {
  var _0x12e66a = ['190JftjaA', 'readFileSync', '178847fpLttJ', 'utf8', '166803GIDHdj', '11316080LzvyzJ', '4568088ZwxaZp', '4843791tvERjr', '2061219loofnx', '2ZUdOOB', 'map', 'log', 'split', '42DVOggh', '/dev/stdin', '101204JQHEeq'];
  __STRING_ARRAY__ = function () {
    return _0x12e66a;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0xa7)](__DECODE_0__(0xa4), __DECODE_0__(0xa9)));
