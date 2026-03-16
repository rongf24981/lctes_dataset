function __STRING_ARRAY__() {
  var _0x579fe9 = ['236885qbTyIO', 'split', 'pre-meiji', '50NSkwug', 'utf8', 'showa', '2154640Mvvjrp', '635012xCHyZb', 'readFileSync', 'log', '/dev/stdin', 'map', '281070tkqJpF', 'taisho', '84930EYSFgT', '386708JqOWIb', 'meiji', '5178uYGxlG', 'trim', 'heisei'];
  __STRING_ARRAY__ = function () {
    return _0x579fe9;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf5)) / 0x1 + parseInt(__DECODE_0__(0x100)) / 0x2 * (parseInt(__DECODE_0__(0xfa)) / 0x3) + parseInt(__DECODE_0__(0xf8)) / 0x4 + -parseInt(__DECODE_0__(0xfd)) / 0x5 + -parseInt(__DECODE_0__(0xf7)) / 0x6 + parseInt(__DECODE_0__(0xf0)) / 0x7 + parseInt(__DECODE_0__(0x103)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x26657);
var input = require('fs')[__DECODE_0__(0xf1)](__DECODE_0__(0xf3), __DECODE_0__(0x101))[__DECODE_0__(0xfb)]();
var lines = input[__DECODE_0__(0xfe)]('\x0a');
var line;
function __DECODE_0__(EcJnou, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xf0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EcJnou, key);
}
while (line = lines['shift']()) {
  var arr = line['split']('\x20')[__DECODE_0__(0xf4)](function (n) {
    return +n;
  });
  var year = arr[0x0];
  var month = arr[0x1];
  var day = arr[0x2];
  var era = '';
  var today = new Date(year, month - 0x1, day);
  if (today < new Date(0x74c, 0x8, 0x8)) {
    era = __DECODE_0__(0xff);
  } else {
    if (today < new Date(0x778, 0x6, 0x1e)) {
      era = __DECODE_0__(0xf9);
      year -= 0x74b;
    } else {
      if (today < new Date(0x786, 0xb, 0x19)) {
        era = __DECODE_0__(0xf6);
        year -= 0x777;
      } else {
        if (today < new Date(0x7c5, 0x0, 0x8)) {
          era = __DECODE_0__(0x102);
          year -= 0x785;
        } else {
          era = __DECODE_0__(0xfc);
          year -= 0x7c4;
        }
      }
    }
  }
  if (era == __DECODE_0__(0xff)) {
    console['log']('pre-meiji');
    continue;
  }
  console[__DECODE_0__(0xf2)](era, year, month, day);
}
