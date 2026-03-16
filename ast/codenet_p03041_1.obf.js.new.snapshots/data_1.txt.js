'use strict';

const a0_0x15a476 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x4c49e1 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x4c49e1(0xe0)) / 0x1 + parseInt(_0x4c49e1(0xd4)) / 0x2 + -parseInt(_0x4c49e1(0xd2)) / 0x3 * (parseInt(_0x4c49e1(0xdb)) / 0x4) + parseInt(_0x4c49e1(0xdd)) / 0x5 * (-parseInt(_0x4c49e1(0xdc)) / 0x6) + parseInt(_0x4c49e1(0xde)) / 0x7 + -parseInt(_0x4c49e1(0xd6)) / 0x8 * (parseInt(_0x4c49e1(0xd3)) / 0x9) + parseInt(_0x4c49e1(0xd7)) / 0xa * (parseInt(_0x4c49e1(0xe1)) / 0xb);
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
  const _0x489c5b = __DECODE_0__;
  let tmp = input[_0x489c5b(0xd9)]('\x0a');
  let Num = tmp[0x0][_0x489c5b(0xd9)]('\x20')['map'](Number)[0x0];
  let Kji = tmp[0x0][_0x489c5b(0xd9)]('\x20')[_0x489c5b(0xd1)](Number)[0x1];
  let Str = tmp[0x1][_0x489c5b(0xe2)]();
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
  let StrArr = Str[_0x489c5b(0xd9)]('');
  StrArr[Kji - 0x1] = Change;
  Str = StrArr[_0x489c5b(0xdf)]('');
  console[_0x489c5b(0xda)](Str);
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
Main(require('fs')[a0_0x15a476(0xd8)](a0_0x15a476(0xd5), a0_0x15a476(0xd0)));
