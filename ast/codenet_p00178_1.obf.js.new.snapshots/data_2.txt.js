function __STRING_ARRAY__() {
  var _0x1a8216 = ['2375TpxIau', 'length', '438eWndBc', 'readFileSync', '3189164CONdgU', 'split', '50994CCyMTM', '339508kDmSGM', '1eEHHQy', '11111', '/dev/stdin', '740UKRpnM', 'replace', '1875410pKCtVn', 'shift', 'map', 'log', '501728yzmlDB', 'trim', 'max', '14eQZFuN', '3942UIFjnk'];
  __STRING_ARRAY__ = function () {
    return _0x1a8216;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(nWQYIk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x167;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nWQYIk, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x167)) / 0x1 * (-parseInt(__DECODE_0__(0x17c)) / 0x2) + -parseInt(__DECODE_0__(0x174)) / 0x3 * (-parseInt(__DECODE_0__(0x16a)) / 0x4) + -parseInt(__DECODE_0__(0x175)) / 0x5 * (-parseInt(__DECODE_0__(0x177)) / 0x6) + -parseInt(__DECODE_0__(0x173)) / 0x7 * (-parseInt(__DECODE_0__(0x170)) / 0x8) + -parseInt(__DECODE_0__(0x17b)) / 0x9 + parseInt(__DECODE_0__(0x16c)) / 0xa + -parseInt(__DECODE_0__(0x179)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1e9d2);
var input = require('fs')[__DECODE_0__(0x178)](__DECODE_0__(0x169), 'utf8');
var arr = input[__DECODE_0__(0x171)]()['split']('\x0a');
while (!![]) {
  var n = arr[__DECODE_0__(0x16d)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var base = ['', '', '', '', ''];
  for (var i = 0x0; i < n; i++) {
    var [d, p, q] = arr[__DECODE_0__(0x16d)]()[__DECODE_0__(0x17a)]('\x20')[__DECODE_0__(0x16e)](Number);
    q--;
    if (d == 0x1) {
      var max = 0x0;
      for (var j = 0x0; j < p; j++) {
        max = Math[__DECODE_0__(0x172)](max, base[q + j][__DECODE_0__(0x176)]);
      }
      for (var j = 0x0; j < p; j++) {
        while (base[q + j][__DECODE_0__(0x176)] < max) {
          base[q + j] += '0';
        }
        base[q + j] += '1';
      }
    } else {
      if (d == 0x2) {
        for (var j = 0x0; j < p; j++) {
          base[q] += '1';
        }
      }
    }
  }
  var max = 0x0;
  for (var i = 0x0; i < 0x5; i++) {
    max = Math['max'](max, base[i]['length']);
  }
  for (var i = 0x0; i < 0x5; i++) {
    while (base[i]['length'] < max) {
      base[i] += '0';
    }
  }
  var cnt = 0x0;
  for (var i = 0x0; i < max; i++) {
    var str = base[__DECODE_0__(0x16e)](v => v[i])['join']('');
    str = str[__DECODE_0__(0x16b)](__DECODE_0__(0x168), '')[__DECODE_0__(0x16b)](/0/g, '');
    cnt += str[__DECODE_0__(0x176)];
  }
  console[__DECODE_0__(0x16f)](cnt);
}
