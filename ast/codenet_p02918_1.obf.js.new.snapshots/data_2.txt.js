'use strict';

function __DECODE_0__(mRQZBx, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x163;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(mRQZBx, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x168)) / 0x1 + parseInt(__DECODE_0__(0x16d)) / 0x2 * (-parseInt(__DECODE_0__(0x167)) / 0x3) + -parseInt(__DECODE_0__(0x16a)) / 0x4 * (parseInt(__DECODE_0__(0x169)) / 0x5) + parseInt(__DECODE_0__(0x171)) / 0x6 + -parseInt(__DECODE_0__(0x16e)) / 0x7 * (parseInt(__DECODE_0__(0x166)) / 0x8) + parseInt(__DECODE_0__(0x172)) / 0x9 + parseInt(__DECODE_0__(0x16b)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd7232);
function __STRING_ARRAY__() {
  const _0x48397b = ['197210rybilu', '21915jNnShw', '156CPfeuh', '6985330jZTsno', 'trim', '191628pVmdxV', '7lkIYrm', 'readFileSync', 'min', '10276572StQFFN', '2286774djauJi', 'split', '/dev/stdin', 'utf8', '1452912KlSdBJ', '51KWGVYh'];
  __STRING_ARRAY__ = function () {
    return _0x48397b;
  };
  return __STRING_ARRAY__();
}
const main = arg => {
  arg = arg[__DECODE_0__(0x16c)]()['split']('\x0a');
  const N = parseInt(arg[0x0][__DECODE_0__(0x163)]('\x20')[0x0]);
  const K = parseInt(arg[0x0][__DECODE_0__(0x163)]('\x20')[0x1]);
  const S = arg[0x1][__DECODE_0__(0x163)]('');
  let alreadyHappy = 0x0;
  let last;
  for (let i in S) {
    if (last === 'L' && S[i] === 'L') {
      alreadyHappy++;
    }
    if (last === 'R' && S[i] === 'R') {
      alreadyHappy++;
    }
    last = S[i];
  }
  console['log'](Math[__DECODE_0__(0x170)](N - 0x1, alreadyHappy + 0x2 * K));
};
main(require('fs')[__DECODE_0__(0x16f)](__DECODE_0__(0x164), __DECODE_0__(0x165)));
