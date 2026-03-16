(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xfc)) / 0x1 * (parseInt(__DECODE_0__(0xfb)) / 0x2) + parseInt(__DECODE_0__(0xfa)) / 0x3 + -parseInt(__DECODE_0__(0x100)) / 0x4 + parseInt(__DECODE_0__(0x10a)) / 0x5 * (-parseInt(__DECODE_0__(0x102)) / 0x6) + parseInt(__DECODE_0__(0x103)) / 0x7 * (parseInt(__DECODE_0__(0x106)) / 0x8) + -parseInt(__DECODE_0__(0x101)) / 0x9 * (parseInt(__DECODE_0__(0x109)) / 0xa) + -parseInt(__DECODE_0__(0xff)) / 0xb * (-parseInt(__DECODE_0__(0xfd)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7b426);
function __DECODE_0__(ktomJm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xfa;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ktomJm, key);
}
function __STRING_ARRAY__() {
  var _0x387740 = ['8wgEVnz', 'trim', 'log', '10HUgooc', '1390GxXfUX', '/dev/stdin', '32976gULgkC', '6568arHXct', '50njbqRg', '20237892SVoXiO', 'split', '11XuOJgl', '3203664jpeKnA', '7937613SShMFX', '14526uQuGGx', '6993686aZQpxP', 'utf8', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x387740;
  };
  return __STRING_ARRAY__();
}
require('fs')[__DECODE_0__(0x105)](__DECODE_0__(0x10b), __DECODE_0__(0x104))[__DECODE_0__(0x107)]()[__DECODE_0__(0xfe)](/\s/)['map'](function (i) {
  j = i[__DECODE_0__(0xfe)](',');
  s = 0x0;
  m = n = 0xa;
  for (; m--;) {
    j[m] = s -= j[m];
  }
  for (s *= j[0xb] / (-j[0xb] - j[n]); j[--n] >= -s;);
  console[__DECODE_0__(0x108)](++n);
});
