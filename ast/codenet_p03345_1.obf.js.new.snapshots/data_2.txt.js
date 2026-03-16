'use strict';

(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1ca)) / 0x1 * (parseInt(__DECODE_0__(0x1d9)) / 0x2) + parseInt(__DECODE_0__(0x1cd)) / 0x3 * (parseInt(__DECODE_0__(0x1d0)) / 0x4) + parseInt(__DECODE_0__(0x1d3)) / 0x5 + -parseInt(__DECODE_0__(0x1ce)) / 0x6 * (-parseInt(__DECODE_0__(0x1d6)) / 0x7) + parseInt(__DECODE_0__(0x1d4)) / 0x8 * (parseInt(__DECODE_0__(0x1da)) / 0x9) + parseInt(__DECODE_0__(0x1d8)) / 0xa + -parseInt(__DECODE_0__(0x1d2)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3607c);
const DELIMITER = '\x20';
function __STRING_ARRAY__() {
  const _0x4f4c37 = ['109854RwtMED', 'abs', 'pow', 'charAt', 'log', '1WucMow', 'readFileSync', 'utf8', '6QjANyN', '6XVtGeH', 'length', '810296EcRNXI', 'trim', '8674446lPosXM', '1434165lJYyDd', '56gvSxnO', 'Unfair', '736946reiOTy', 'split', '2750240Uoolxb', '295662XuxAyk'];
  __STRING_ARRAY__ = function () {
    return _0x4f4c37;
  };
  return __STRING_ARRAY__();
}
const A_INDEX = 0x0;
function __DECODE_0__(dhbCfA, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c6;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(dhbCfA, key);
}
const B_INDEX = 0x1;
const K_INDEX = 0x3;
const LIMIT = Math[__DECODE_0__(0x1c7)](0xa, 0x12);
const process = input => {
  const indexArr = input[__DECODE_0__(0x1d7)](DELIMITER);
  const ans = parseInt(indexArr[A_INDEX]) - parseInt(indexArr[B_INDEX]);
  const KString = indexArr[K_INDEX];
  const K = parseInt(KString[__DECODE_0__(0x1c8)](KString[__DECODE_0__(0x1cf)] - 0x1));
  if (Math[__DECODE_0__(0x1c6)](ans) > LIMIT) {
    console[__DECODE_0__(0x1c9)](__DECODE_0__(0x1d5));
  } else {
    console['log'](K % 0x2 === 0x0 || ans === 0x0 ? ans : -ans);
  }
};
process(require('fs')[__DECODE_0__(0x1cb)]('/dev/stdin', __DECODE_0__(0x1cc))[__DECODE_0__(0x1d1)]());
