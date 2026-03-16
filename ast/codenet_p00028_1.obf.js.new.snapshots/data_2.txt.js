(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x137)) / 0x1 * (parseInt(__DECODE_0__(0x131)) / 0x2) + -parseInt(__DECODE_0__(0x132)) / 0x3 * (-parseInt(__DECODE_0__(0x130)) / 0x4) + -parseInt(__DECODE_0__(0x129)) / 0x5 + -parseInt(__DECODE_0__(0x136)) / 0x6 + -parseInt(__DECODE_0__(0x134)) / 0x7 * (-parseInt(__DECODE_0__(0x12b)) / 0x8) + parseInt(__DECODE_0__(0x133)) / 0x9 + -parseInt(__DECODE_0__(0x12c)) / 0xa * (-parseInt(__DECODE_0__(0x12f)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8458c);
function __DECODE_0__(nwuYeC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x128;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nwuYeC, key);
}
a = [];
b = 0x64;
for (; b--;) {
  c = a[b] = 0x0;
}
function __STRING_ARRAY__() {
  var _0x44137a = ['63wcGnTl', 'some', '864006SGiFUY', '3710jGwmAP', '/dev/stdin', '3839870OawiVS', 'utf8', '405368xsmgXH', '1930yqYPjb', 'split', 'log', '8965TBeBDI', '688OzRFtv', '262xGepwB', '2442qzdoLF', '1932435TkjIYr'];
  __STRING_ARRAY__ = function () {
    return _0x44137a;
  };
  return __STRING_ARRAY__();
}
require('fs')['readFileSync'](__DECODE_0__(0x128), __DECODE_0__(0x12a))[__DECODE_0__(0x12d)]('\x0a')['some'](function (i) {
  if (+i) {
    a[+i]++;
    c = a[+i] > c ? a[+i] : c;
  }
});
a[__DECODE_0__(0x135)](function (i, j) {
  if (i == c) {
    console[__DECODE_0__(0x12e)](j);
  }
});
