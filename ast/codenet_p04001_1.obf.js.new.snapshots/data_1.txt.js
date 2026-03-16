const a0_0x384a1a = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  const _0x57dd35 = __DECODE_0__;
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(_0x57dd35(0xa8)) / 0x1 + parseInt(_0x57dd35(0xa0)) / 0x2 + -parseInt(_0x57dd35(0xab)) / 0x3 + -parseInt(_0x57dd35(0xa6)) / 0x4 * (parseInt(_0x57dd35(0xa7)) / 0x5) + parseInt(_0x57dd35(0xa1)) / 0x6 * (-parseInt(_0x57dd35(0xa5)) / 0x7) + parseInt(_0x57dd35(0xa9)) / 0x8 * (-parseInt(_0x57dd35(0xa3)) / 0x9) + parseInt(_0x57dd35(0x9e)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe475a);
function __DECODE_0__(UQDGwg, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9e;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UQDGwg, key);
}
function __STRING_ARRAY__() {
  const _0x27c9d8 = ['length', '495CvRpAH', 'log', '146951BgWRfk', '99408NWXrFy', '15fSUlsO', '1861880GftSPl', '227832MlCmWX', '/dev/stdin', '5122788XWqMGF', '65127640iQnJNl', 'readFileSync', '2583660Eiyrbi', '474AmHQhK'];
  __STRING_ARRAY__ = function () {
    return _0x27c9d8;
  };
  return __STRING_ARRAY__();
}
console[a0_0x384a1a(0xa4)]((args => {
  const _0x20f4ca = a0_0x384a1a;
  const S = args['trim']();
  const L = S[_0x20f4ca(0xa2)];
  let total = 0x0;
  for (let bit = 0x0; bit < 0x1 << L - 0x1; bit++) {
    let st = S[0x0] | 0x0;
    let t = 0x0;
    for (let i = 0x0; i < L - 0x1; i++) {
      if (0x1 << i & bit) {
        t += st;
        st = S[i + 0x1] | 0x0;
      } else {
        st = st * 0xa + (S[i + 0x1] | 0x0);
      }
    }
    total += t + st;
  }
  return total['toString']();
})(require('fs')[a0_0x384a1a(0x9f)](a0_0x384a1a(0xaa), 'utf8')));
