'use strict';

function __STRING_ARRAY__() {
  const _0x517b68 = ['length', '8514xOcOXi', 'split', 'readFileSync', '488FCrFiC', 'utf8', 'map', '2402NDDSaH', '3070DQhXlQ', '1067941bmWakc', 'log', '9OFPTsC', '3264088vkGBdL', '/dev/stdin', '4uukeDb', 'keys', '115325HmHUDw', '18HgOHQT', '759558mbyVgO', '1677vmlgVG', '60lSFiuS'];
  __STRING_ARRAY__ = function () {
    return _0x517b68;
  };
  return __STRING_ARRAY__();
}
const a0_0x4ee649 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x2db9eb = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(_0x2db9eb(0xd9)) / 0x1 * (-parseInt(_0x2db9eb(0xdc)) / 0x2) + parseInt(_0x2db9eb(0xd2)) / 0x3 + parseInt(_0x2db9eb(0xce)) / 0x4 * (parseInt(_0x2db9eb(0xd0)) / 0x5) + -parseInt(_0x2db9eb(0xd1)) / 0x6 * (-parseInt(_0x2db9eb(0xde)) / 0x7) + parseInt(_0x2db9eb(0xe1)) / 0x8 * (parseInt(_0x2db9eb(0xe0)) / 0x9) + parseInt(_0x2db9eb(0xdd)) / 0xa * (-parseInt(_0x2db9eb(0xd6)) / 0xb) + parseInt(_0x2db9eb(0xd4)) / 0xc * (-parseInt(_0x2db9eb(0xd3)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4d8a0);
const combi = function (n) {
  return n * (n - 0x1) / 0x2;
};
const main = arg => {
  const _0x25117d = __DECODE_0__;
  const input = arg['trim']()['split']('\x0a');
  const N = parseInt(input[0x0][_0x25117d(0xd7)]('\x20')[0x0]);
  const A = input[0x1][_0x25117d(0xd7)]('\x20')[_0x25117d(0xdb)](n => parseInt(n));
  let m = {};
  for (let i = 0x0; i < A[_0x25117d(0xd5)]; i++) {
    if (!m[A[i]]) {
      m[A[i]] = 0x1;
    } else {
      m[A[i]]++;
    }
  }
  let orgCnt = 0x0;
  let keys = Object[_0x25117d(0xcf)](m);
  for (let i = 0x0; i < keys['length']; i++) {
    orgCnt = orgCnt + combi(m[keys[i]]);
  }
  for (let i = 0x0; i < A['length']; i++) {
    let num = m[A[i]];
    const diff = combi(num) - combi(num - 0x1);
    console[_0x25117d(0xdf)](orgCnt - diff);
  }
};
function __DECODE_0__(bQDNuz, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcd;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bQDNuz, key);
}
main(require('fs')[a0_0x4ee649(0xd8)](a0_0x4ee649(0xcd), a0_0x4ee649(0xda)));
