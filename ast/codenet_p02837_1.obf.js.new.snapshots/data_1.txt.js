'use strict';

function __STRING_ARRAY__() {
  const _0x5712ec = ['901892blqYeD', '21164076cAlJav', '/dev/stdin', '1398195MRSqHg', 'splice', '590464pubGFB', '261KiubWd', '11WrOaje', 'shift', '35uaSxdi', '30RHJKpq', 'log', '828726JSwfEO', 'trim', '560270ZgYzfu', 'utf8', '6DdzcHZ', '1065054JKUXMk'];
  __STRING_ARRAY__ = function () {
    return _0x5712ec;
  };
  return __STRING_ARRAY__();
}
const a0_0x35584f = __DECODE_0__;
function __DECODE_0__(QDAajF, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12d;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(QDAajF, key);
}
(function (stringArrayFunction, comparisonValue) {
  const _0x4bf403 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x4bf403(0x12f)) / 0x1 + -parseInt(_0x4bf403(0x13d)) / 0x2 * (-parseInt(_0x4bf403(0x13c)) / 0x3) + -parseInt(_0x4bf403(0x13e)) / 0x4 * (-parseInt(_0x4bf403(0x136)) / 0x5) + parseInt(_0x4bf403(0x138)) / 0x6 + -parseInt(_0x4bf403(0x135)) / 0x7 * (parseInt(_0x4bf403(0x131)) / 0x8) + parseInt(_0x4bf403(0x132)) / 0x9 * (-parseInt(_0x4bf403(0x13a)) / 0xa) + -parseInt(_0x4bf403(0x133)) / 0xb * (-parseInt(_0x4bf403(0x12d)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe27b4);
console[a0_0x35584f(0x137)](function (args) {
  const _0x103453 = a0_0x35584f;
  const _tmp = args[_0x103453(0x139)]()['split']('\x0a');
  const N = _tmp[_0x103453(0x134)]() | 0x0;
  const A = [];
  const x = [];
  const y = [];
  for (let i = 0x0; i < N; i++) {
    A[i] = _tmp[_0x103453(0x134)]() | 0x0;
    x[i] = [];
    y[i] = [];
    for (let j = 0x0; j < A[i]; j++) {
      const xy = _tmp[j]['split']('\x20');
      x[i][j] = xy[0x0] - 0x1;
      y[i][j] = xy[0x1] | 0x0;
    }
    _tmp[_0x103453(0x130)](0x0, A[i]);
  }
  let K = 0x0;
  TEST: for (let honest = 0x1; honest < 0x1 << N; honest++) {
    let k = 0x0;
    for (let i = 0x0; i < N; i++) {
      if (!(honest & 0x1 << i)) {
        continue;
      }
      k++;
      for (let j = 0x0; j < A[i]; j++) {
        const Xij = x[i][j];
        const Yij = y[i][j];
        const target = honest & 0x1 << Xij;
        if (target !== Yij << Xij) {
          continue TEST;
        }
      }
    }
    if (k > K) {
      K = k;
    }
  }
  return K;
}(require('fs')['readFileSync'](a0_0x35584f(0x12e), a0_0x35584f(0x13b))));
