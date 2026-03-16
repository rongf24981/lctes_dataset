'use strict';

function __STRING_ARRAY__() {
  const _0x5df938 = ['reduce', 'shift', '472522JrwtJP', 'map', 'join', 'utf8', '2589512oGIdqv', '95473DKvZVb', '945900bSUpwM', '101562mdpXSx', '204eRKtUz', 'toString', 'log', '1751936xiaUtj', '414852XdKhyj', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x5df938;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x93)) / 0x1 + parseInt(__DECODE_0__(0x9a)) / 0x2 + -parseInt(__DECODE_0__(0x9f)) / 0x3 + -parseInt(__DECODE_0__(0x9e)) / 0x4 + parseInt(__DECODE_0__(0x99)) / 0x5 + -parseInt(__DECODE_0__(0x9b)) / 0x6 * (-parseInt(__DECODE_0__(0x98)) / 0x7) + -parseInt(__DECODE_0__(0x97)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4371c);
function main(input) {
  const lines = input[__DECODE_0__(0xa0)]('\x0a');
  const N = parseInt(lines[__DECODE_0__(0x92)]());
  const F = [];
  for (let i = 0x0; i < N; i++) {
    F['push'](lines[i][__DECODE_0__(0xa0)]('\x20')[__DECODE_0__(0x94)](x => parseInt(x)));
  }
  const P = [];
  for (let i = 0x0; i < N; i++) {
    P['push'](lines[i + N]['split']('\x20')[__DECODE_0__(0x94)](x => parseInt(x)));
  }
  let result = -Infinity;
  for (let i = 0x1; i < 0x400; i++) {
    let score = 0x0;
    for (let j = 0x0; j < N; j++) {
      let store = F[j];
      let p_index = (parseInt(store[__DECODE_0__(0x95)](''), 0x2) & i)[__DECODE_0__(0x9c)](0x2)[__DECODE_0__(0xa0)]('')[__DECODE_0__(0x94)](x => Number(x))[__DECODE_0__(0xa1)]((a, b) => a + b, 0x0);
      score += P[j][p_index];
    }
    if (score > result) {
      result = score;
    }
  }
  console[__DECODE_0__(0x9d)](result);
}
function __DECODE_0__(pmrOFM, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x92;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pmrOFM, key);
}
main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x96)));
