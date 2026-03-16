function __DECODE_0__(ENmILA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ENmILA, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xc8)) / 0x1 + -parseInt(__DECODE_0__(0xc2)) / 0x2 * (parseInt(__DECODE_0__(0xc4)) / 0x3) + parseInt(__DECODE_0__(0xbd)) / 0x4 + parseInt(__DECODE_0__(0xc5)) / 0x5 + -parseInt(__DECODE_0__(0xc6)) / 0x6 + -parseInt(__DECODE_0__(0xbe)) / 0x7 * (-parseInt(__DECODE_0__(0xbc)) / 0x8) + -parseInt(__DECODE_0__(0xbf)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x30299);
function main(arg) {
  var arg2 = arg[__DECODE_0__(0xc1)]('\x0a')[0x1][__DECODE_0__(0xc1)](/\s/g);
  var kazoe = [];
  for (i = 0x0; i < arg['split']('\x0a')[0x0]; i++) {
    if (!kazoe[arg2[i]]) {
      kazoe[arg2[i]] = 0x0;
    }
    kazoe[arg2[i]] += 0x1;
  }
  var ans = 0x1;
  for (j = 0x0; j < kazoe[__DECODE_0__(0xc7)]; j++) {
    if (j > 0x1) {
      ans = ans * Math[__DECODE_0__(0xc0)](kazoe[j - 0x1], kazoe[j]);
    }
    if (!kazoe[j]) {
      ans = 0x0;
      break;
    }
  }
  console[__DECODE_0__(0xc3)](ans % 0x3b800001);
}
main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0xc9)));
function __STRING_ARRAY__() {
  var _0x6dd42f = ['280MOaMZE', '1109728VhTNqx', '62797IWVTpq', '5016591kzPHGQ', 'pow', 'split', '10bgLFeu', 'log', '133818ekowsF', '1768390VUJimS', '535224nSYuqe', 'length', '121811ETveZx', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x6dd42f;
  };
  return __STRING_ARRAY__();
}
