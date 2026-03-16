(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x92)) / 0x1 * (parseInt(__DECODE_0__(0x84)) / 0x2) + parseInt(__DECODE_0__(0x94)) / 0x3 * (-parseInt(__DECODE_0__(0x89)) / 0x4) + -parseInt(__DECODE_0__(0x8e)) / 0x5 + parseInt(__DECODE_0__(0x85)) / 0x6 + -parseInt(__DECODE_0__(0x90)) / 0x7 + -parseInt(__DECODE_0__(0x86)) / 0x8 * (-parseInt(__DECODE_0__(0x87)) / 0x9) + parseInt(__DECODE_0__(0x88)) / 0xa * (parseInt(__DECODE_0__(0x91)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x839de);
var input = require('fs')[__DECODE_0__(0x8c)](__DECODE_0__(0x83), __DECODE_0__(0x8f));
var arr = input[__DECODE_0__(0x8a)]()[__DECODE_0__(0x8b)]('\x0a');
var n = arr[__DECODE_0__(0x93)]() - 0x0;
var a = arr[__DECODE_0__(0x93)]()['split']('\x20')[__DECODE_0__(0x8d)](Number);
var m = arr[__DECODE_0__(0x93)]() - 0x0;
var b = arr[__DECODE_0__(0x93)]()[__DECODE_0__(0x8b)]('\x20')['map'](Number);
function __DECODE_0__(pAEQdh, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x83;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pAEQdh, key);
}
for (var i = 0x0; i < m; i++) {
  if (a['length'] - 0x1 < i || b[i] > a[i]) {
    console[__DECODE_0__(0x95)](0x1);
    break;
  } else {
    if (b[i] < a[i]) {
      console[__DECODE_0__(0x95)](0x0);
      break;
    }
  }
}
function __STRING_ARRAY__() {
  var _0x40e40d = ['6abkycL', 'log', '/dev/stdin', '764dDvlye', '2633274ZDqcQI', '120NfmZbu', '218565yhuCWu', '230wsEdrl', '2035948HdhVbw', 'trim', 'split', 'readFileSync', 'map', '103020qHCuTr', 'utf8', '2286627jBovPl', '272525DZrFdr', '1391AXCHGd', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x40e40d;
  };
  return __STRING_ARRAY__();
}
if (i == m) {
  console[__DECODE_0__(0x95)](0x0);
}
