'use strict';

function __DECODE_0__(wWvusr, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x183;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(wWvusr, key);
}
const a0_0x3a01be = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x212fea = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x212fea(0x185)) / 0x1 + parseInt(_0x212fea(0x186)) / 0x2 * (parseInt(_0x212fea(0x18c)) / 0x3) + parseInt(_0x212fea(0x191)) / 0x4 + parseInt(_0x212fea(0x190)) / 0x5 + parseInt(_0x212fea(0x184)) / 0x6 * (-parseInt(_0x212fea(0x18f)) / 0x7) + -parseInt(_0x212fea(0x188)) / 0x8 * (parseInt(_0x212fea(0x18b)) / 0x9) + -parseInt(_0x212fea(0x189)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x61363);
function Main(input) {
  const _0x5f48b2 = __DECODE_0__;
  input = input[_0x5f48b2(0x183)]()[_0x5f48b2(0x18d)]('\x0a');
  const N = Number(input[0x0]);
  const H = input[0x1][_0x5f48b2(0x183)]()[_0x5f48b2(0x18d)]('\x20')[_0x5f48b2(0x18e)](Number);
  let ret = 0x0;
  let move = 0x0;
  for (let i = 0x0; i < N; i++) {
    if (H[i] >= H[i + 0x1]) {
      move += 0x1;
    } else {
      ret = Math[_0x5f48b2(0x187)](ret, move);
      move = 0x0;
    }
  }
  console['log'](ret);
}
function __STRING_ARRAY__() {
  const _0x1118ba = ['118lbqMIF', 'max', '16fCaZkh', '13559520JuyHnC', 'utf8', '860589mKDjdB', '16266mpoODc', 'split', 'map', '1113OsxyIj', '2316860qFobjq', '3098788lQFFcV', 'trim', '2946vCGiLe', '465475uwqEEQ'];
  __STRING_ARRAY__ = function () {
    return _0x1118ba;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x3a01be(0x18a)));
