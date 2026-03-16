'use strict';

function __DECODE_0__(bxcyRF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14c;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bxcyRF, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x158)) / 0x1 * (-parseInt(__DECODE_0__(0x153)) / 0x2) + -parseInt(__DECODE_0__(0x159)) / 0x3 * (-parseInt(__DECODE_0__(0x157)) / 0x4) + parseInt(__DECODE_0__(0x151)) / 0x5 * (-parseInt(__DECODE_0__(0x15a)) / 0x6) + -parseInt(__DECODE_0__(0x14e)) / 0x7 + -parseInt(__DECODE_0__(0x15b)) / 0x8 + parseInt(__DECODE_0__(0x155)) / 0x9 * (parseInt(__DECODE_0__(0x14d)) / 0xa) + parseInt(__DECODE_0__(0x14f)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x25bdd);
function __STRING_ARRAY__() {
  const _0x2baa5e = ['1263227tQrWus', '5547047vRYioA', '/dev/stdin', '885AKMGwr', 'UNRESTORABLE', '2HTPJTc', 'length', '18RSCoyJ', 'join', '78304pSAePl', '149287Qtldnx', '15WltMOQ', '10350LTtVDG', '1943336GVzLsf', 'log', 'split', '659240lWAoUW'];
  __STRING_ARRAY__ = function () {
    return _0x2baa5e;
  };
  return __STRING_ARRAY__();
}
function main(input) {
  input = input['split'](/\n/);
  let S = input[0x0][__DECODE_0__(0x14c)]('');
  const T = input[0x1][__DECODE_0__(0x14c)]('');
  const us = __DECODE_0__(0x152);
  for (let i = S[__DECODE_0__(0x154)] - T['length']; i >= 0x0; i--) {
    let x = 0x0;
    for (let j = 0x0; j < T[__DECODE_0__(0x154)]; j++) {
      if (S[i + j] == T[j] || S[i + j] == '?') {} else {
        x++;
        continue;
      }
    }
    if (x > 0x0) {
      continue;
    }
    for (let k = 0x0; k < T[__DECODE_0__(0x154)]; k++) {
      S[i + k] = T[k];
    }
    for (let i = 0x0; i < S[__DECODE_0__(0x154)]; i++) {
      S[i] = S[i] == '?' ? 'a' : S[i];
    }
    console[__DECODE_0__(0x15c)](S = S[__DECODE_0__(0x156)](''));
    return;
  }
  console[__DECODE_0__(0x15c)](us);
}
main(require('fs')['readFileSync'](__DECODE_0__(0x150), 'utf8'));
