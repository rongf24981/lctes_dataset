'use strict';

(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xd3)) / 0x1 + -parseInt(__DECODE_0__(0xd5)) / 0x2 + parseInt(__DECODE_0__(0xcf)) / 0x3 * (parseInt(__DECODE_0__(0xd0)) / 0x4) + -parseInt(__DECODE_0__(0xd9)) / 0x5 + -parseInt(__DECODE_0__(0xdb)) / 0x6 * (-parseInt(__DECODE_0__(0xd8)) / 0x7) + parseInt(__DECODE_0__(0xd4)) / 0x8 * (parseInt(__DECODE_0__(0xcd)) / 0x9) + -parseInt(__DECODE_0__(0xda)) / 0xa * (parseInt(__DECODE_0__(0xd7)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd9843);
var lines = require('fs')[__DECODE_0__(0xd2)](0x0, __DECODE_0__(0xce))['split']('\x0a');
function __DECODE_0__(Oofrdx, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcd;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Oofrdx, key);
}
var str = lines[0x0];
var n = str[__DECODE_0__(0xd6)] - 0x1;
var dfs = (i, sum, order) => {
  if (i === n) {
    return eval(order + str[n]) == 0x7 ? order + str[n] : '';
  }
  var temp = dfs(i + 0x1, sum, order + str[i] + '+');
  return temp ? temp : dfs(i + 0x1, sum, order + str[i] + '-');
};
function __STRING_ARRAY__() {
  var _0x508683 = ['1647176eyWzIs', '8aLzCOx', '2777162oXSTSo', 'length', '11kORRZe', '14UyVrRS', '6005175ZZqKht', '18897980jYwBCh', '5138106czozIk', '5349663fKgfxF', 'utf8', '129cGcgYC', '131728tpiUZI', 'log', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x508683;
  };
  return __STRING_ARRAY__();
}
var ans = dfs(0x0, 0x0, '');
console[__DECODE_0__(0xd1)](ans ? ans + '=7' : '');
