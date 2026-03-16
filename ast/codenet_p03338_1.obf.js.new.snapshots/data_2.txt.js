'use strict';

function __STRING_ARRAY__() {
  const _0x5efc47 = ['24iwInVn', '12LAqtyd', 'split', 'max', '40206VTALgL', 'slice', 'trim', 'length', '8xwelZj', '3896184vNUSLL', '1102000aThrqJ', 'indexOf', 'log', '49hIRBtw', '9mrLRuI', '543190QMhjtC', 'readFileSync', '270488SnngED', '23934EDhsub', '8511514TUvrwg'];
  __STRING_ARRAY__ = function () {
    return _0x5efc47;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x176)) / 0x1 * (-parseInt(__DECODE_0__(0x172)) / 0x2) + parseInt(__DECODE_0__(0x184)) / 0x3 * (-parseInt(__DECODE_0__(0x17a)) / 0x4) + -parseInt(__DECODE_0__(0x17c)) / 0x5 + parseInt(__DECODE_0__(0x17b)) / 0x6 + -parseInt(__DECODE_0__(0x17f)) / 0x7 * (parseInt(__DECODE_0__(0x183)) / 0x8) + parseInt(__DECODE_0__(0x180)) / 0x9 * (-parseInt(__DECODE_0__(0x181)) / 0xa) + -parseInt(__DECODE_0__(0x171)) / 0xb * (-parseInt(__DECODE_0__(0x173)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x64e82);
function __DECODE_0__(hjXJQR, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x171;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hjXJQR, key);
}
const main = arg => {
  arg = arg[__DECODE_0__(0x178)]()[__DECODE_0__(0x174)]('\x0a');
  const N = parseInt(arg[0x0][__DECODE_0__(0x174)]('\x20')[0x0]);
  const S = arg[0x1]['split']('');
  const charset = new Set(S);
  const chars = [...charset];
  let answer = 0x0;
  for (let i in S) {
    const first = S[__DECODE_0__(0x177)](0x0, i);
    const last = S[__DECODE_0__(0x177)](i, S[__DECODE_0__(0x179)]);
    let temp = 0x0;
    for (let j in chars) {
      if (first[__DECODE_0__(0x17d)](chars[j]) !== -0x1 && last[__DECODE_0__(0x17d)](chars[j]) !== -0x1) {
        temp++;
      }
    }
    answer = Math[__DECODE_0__(0x175)](answer, temp);
  }
  console[__DECODE_0__(0x17e)](answer);
};
main(require('fs')[__DECODE_0__(0x182)]('/dev/stdin', 'utf8'));
