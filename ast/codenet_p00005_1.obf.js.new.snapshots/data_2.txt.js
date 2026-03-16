(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x136)) / 0x1 + parseInt(__DECODE_0__(0x12b)) / 0x2 * (parseInt(__DECODE_0__(0x12d)) / 0x3) + -parseInt(__DECODE_0__(0x12f)) / 0x4 + -parseInt(__DECODE_0__(0x126)) / 0x5 + parseInt(__DECODE_0__(0x12a)) / 0x6 * (-parseInt(__DECODE_0__(0x131)) / 0x7) + parseInt(__DECODE_0__(0x12e)) / 0x8 * (parseInt(__DECODE_0__(0x127)) / 0x9) + parseInt(__DECODE_0__(0x137)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x37e3f);
function __DECODE_0__(GMdUZQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x126;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GMdUZQ, key);
}
config = {
  'stdin': __DECODE_0__(0x134),
  'newline': '\x0a'
};
require('fs')['readFileSync'](config[__DECODE_0__(0x135)], __DECODE_0__(0x133))[__DECODE_0__(0x12c)]()[__DECODE_0__(0x129)](config[__DECODE_0__(0x130)])['forEach'](function (line) {
  var ary = line[__DECODE_0__(0x129)]('\x20');
  var a = ary[0x0];
  var b = ary[0x1];
  console[__DECODE_0__(0x128)](__DECODE_0__(0x132), gcd(a, b), lcm(a, b));
});
function __STRING_ARRAY__() {
  var _0x367838 = ['593024QuPHXy', '1819972dQQKWV', 'newline', '7SNnLrY', '%d\x20%d', 'ascii', '/dev/stdin', 'stdin', '62064pxLNHO', '6387380Xdcmip', '1526595bdgnGs', '27gkdOHp', 'log', 'split', '1645806tgThSM', '4tqziqY', 'trim', '510531IoETia'];
  __STRING_ARRAY__ = function () {
    return _0x367838;
  };
  return __STRING_ARRAY__();
}
function gcd(a, b) {
  while (a !== b) {
    if (a < b) {
      var tmp = a;
      a = b;
      b = tmp;
    }
    if (a % b === 0x0) {
      return b;
    }
    a -= b;
  }
  return a;
}
function lcm(a, b) {
  var g = gcd(a, b);
  return g * (a / g) * (b / g);
}
