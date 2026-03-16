function __DECODE_0__(etCnRs, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x76;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(etCnRs, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x80)) / 0x1 + parseInt(__DECODE_0__(0x83)) / 0x2 + -parseInt(__DECODE_0__(0x77)) / 0x3 + parseInt(__DECODE_0__(0x7c)) / 0x4 + -parseInt(__DECODE_0__(0x7b)) / 0x5 * (parseInt(__DECODE_0__(0x76)) / 0x6) + parseInt(__DECODE_0__(0x81)) / 0x7 + parseInt(__DECODE_0__(0x85)) / 0x8 * (-parseInt(__DECODE_0__(0x7a)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x3cd61);
function Main(input) {
  input = input[__DECODE_0__(0x7e)]()['split']('\x0a')[__DECODE_0__(0x84)](function (x) {
    return x['split']('\x20');
  });
  let N = parseInt(input[0x0][0x0], 0xa);
  let v_h = input[0x1][__DECODE_0__(0x84)](e => parseInt(e, 0xa));
  let DP = [0x0, Math[__DECODE_0__(0x79)](v_h[0x1] - v_h[0x0])];
  let x1;
  let x2;
  for (let i = 0x2; i < N; i++) {
    x1 = DP[i - 0x2] + Math[__DECODE_0__(0x79)](v_h[i] - v_h[i - 0x2]);
    x2 = DP[i - 0x1] + Math[__DECODE_0__(0x79)](v_h[i] - v_h[i - 0x1]);
    DP[__DECODE_0__(0x78)](Math['min'](x1, x2));
  }
  console[__DECODE_0__(0x82)](DP[N - 0x1]);
}
function __STRING_ARRAY__() {
  const _0x2226d2 = ['484535FYCXBp', '2977450MLlHpV', 'log', '829564hsmnRN', 'map', '3163168BSDWJV', 'readFileSync', '23988dPXfgr', '1335789ecZCVM', 'push', 'abs', '18WezSYO', '5AEokbI', '658284ITVAyJ', 'utf8', 'trim', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x2226d2;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x86)](__DECODE_0__(0x7f), __DECODE_0__(0x7d)));
