function __DECODE_0__(LxwfWm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LxwfWm, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xa1)) / 0x1 * (parseInt(__DECODE_0__(0x9b)) / 0x2) + parseInt(__DECODE_0__(0x9f)) / 0x3 * (parseInt(__DECODE_0__(0x8f)) / 0x4) + parseInt(__DECODE_0__(0xa2)) / 0x5 * (-parseInt(__DECODE_0__(0x9a)) / 0x6) + parseInt(__DECODE_0__(0x90)) / 0x7 * (parseInt(__DECODE_0__(0x9c)) / 0x8) + -parseInt(__DECODE_0__(0xa0)) / 0x9 * (parseInt(__DECODE_0__(0x91)) / 0xa) + parseInt(__DECODE_0__(0x98)) / 0xb * (-parseInt(__DECODE_0__(0x94)) / 0xc) + -parseInt(__DECODE_0__(0x99)) / 0xd;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2a03f);
x = require('fs')['readFileSync'](__DECODE_0__(0x97), __DECODE_0__(0x95));
y = x[__DECODE_0__(0x92)]()['split']('\x0a');
while (!![]) {
  if (y['length'] == 0x0) {
    break;
  }
  var z = y[__DECODE_0__(0x93)]()[__DECODE_0__(0xa4)]('\x20');
  var s = [];
  z[__DECODE_0__(0xa5)](function (v) {
    if (/\d/[__DECODE_0__(0x9e)](v)) {
      s['unshift'](v - 0x0);
    } else {
      a = s[__DECODE_0__(0x93)]();
      b = s[__DECODE_0__(0x93)]();
      if (v == '+') {
        s[__DECODE_0__(0x9d)](b + a);
      }
      if (v == '-') {
        s['unshift'](b - a);
      }
      if (v == '*') {
        s[__DECODE_0__(0x9d)](b * a);
      }
      if (v == '/') {
        s['unshift'](b / a);
      }
    }
  });
  console[__DECODE_0__(0xa3)](s[0x0][__DECODE_0__(0x96)](0x6));
}
function __STRING_ARRAY__() {
  var _0x5344bb = ['12468XXidtK', '7xsUyAx', '10yLKuIe', 'trim', 'shift', '24iLexwo', 'utf8', 'toFixed', '/dev/stdin', '627451nKmbWJ', '3969459FfJDHG', '392538pItBys', '28590EstZPJ', '2437784NLulcH', 'unshift', 'test', '249jsJicj', '1014057MdKGKN', '19JAfwut', '10WniCMj', 'log', 'split', 'forEach'];
  __STRING_ARRAY__ = function () {
    return _0x5344bb;
  };
  return __STRING_ARRAY__();
}
