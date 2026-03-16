var a0_0x4ec659 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x5a2b2a = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x5a2b2a(0x92)) / 0x1 * (parseInt(_0x5a2b2a(0x84)) / 0x2) + parseInt(_0x5a2b2a(0x94)) / 0x3 * (-parseInt(_0x5a2b2a(0x89)) / 0x4) + -parseInt(_0x5a2b2a(0x8e)) / 0x5 + parseInt(_0x5a2b2a(0x85)) / 0x6 + -parseInt(_0x5a2b2a(0x90)) / 0x7 + -parseInt(_0x5a2b2a(0x86)) / 0x8 * (-parseInt(_0x5a2b2a(0x87)) / 0x9) + parseInt(_0x5a2b2a(0x88)) / 0xa * (parseInt(_0x5a2b2a(0x91)) / 0xb);
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
var input = require('fs')[a0_0x4ec659(0x8c)](a0_0x4ec659(0x83), a0_0x4ec659(0x8f));
var arr = input[a0_0x4ec659(0x8a)]()[a0_0x4ec659(0x8b)]('\x0a');
var n = arr[a0_0x4ec659(0x93)]() - 0x0;
var a = arr[a0_0x4ec659(0x93)]()['split']('\x20')[a0_0x4ec659(0x8d)](Number);
var m = arr[a0_0x4ec659(0x93)]() - 0x0;
var b = arr[a0_0x4ec659(0x93)]()[a0_0x4ec659(0x8b)]('\x20')['map'](Number);
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
    console[a0_0x4ec659(0x95)](0x1);
    break;
  } else {
    if (b[i] < a[i]) {
      console[a0_0x4ec659(0x95)](0x0);
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
  console[a0_0x4ec659(0x95)](0x0);
}
