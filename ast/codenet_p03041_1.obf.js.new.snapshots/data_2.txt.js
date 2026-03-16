'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0xe0)) / 0x1 + parseInt(__DECODE_0__(0xd4)) / 0x2 + -parseInt(__DECODE_0__(0xd2)) / 0x3 * (parseInt(__DECODE_0__(0xdb)) / 0x4) + parseInt(__DECODE_0__(0xdd)) / 0x5 * (-parseInt(__DECODE_0__(0xdc)) / 0x6) + parseInt(__DECODE_0__(0xde)) / 0x7 + -parseInt(__DECODE_0__(0xd6)) / 0x8 * (parseInt(__DECODE_0__(0xd3)) / 0x9) + parseInt(__DECODE_0__(0xd7)) / 0xa * (parseInt(__DECODE_0__(0xe1)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb10a6);
function __STRING_ARRAY__() {
  const _0xbb3185 = ['utf8', 'map', '3056334boWGMG', '9kZZrla', '2337336BXVDtr', '/dev/stdin', '6523528MveDss', '3954070fPdMsF', 'readFileSync', 'split', 'log', '4txuBwo', '1155318ffCynt', '15aloWKw', '3128125IFZKdF', 'join', '1126086WuEFpX', '11GCBZyl', 'trim'];
  __STRING_ARRAY__ = function () {
    return _0xbb3185;
  };
  return __STRING_ARRAY__();
}
const Main = input => {
  let tmp = input[__DECODE_0__(0xd9)]('\x0a');
  let Num = tmp[0x0][__DECODE_0__(0xd9)]('\x20')['map'](Number)[0x0];
  let Kji = tmp[0x0][__DECODE_0__(0xd9)]('\x20')[__DECODE_0__(0xd1)](Number)[0x1];
  let Str = tmp[0x1][__DECODE_0__(0xe2)]();
  let Change = Str[Kji - 0x1];
  switch (Change) {
    case 'A':
      Change = 'a';
      break;
    case 'B':
      Change = 'b';
      break;
    case 'C':
      Change = 'c';
      break;
  }
  let StrArr = Str[__DECODE_0__(0xd9)]('');
  StrArr[Kji - 0x1] = Change;
  Str = StrArr[__DECODE_0__(0xdf)]('');
  console[__DECODE_0__(0xda)](Str);
};
function __DECODE_0__(XhaSJq, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XhaSJq, key);
}
Main(require('fs')[__DECODE_0__(0xd8)](__DECODE_0__(0xd5), __DECODE_0__(0xd0)));
