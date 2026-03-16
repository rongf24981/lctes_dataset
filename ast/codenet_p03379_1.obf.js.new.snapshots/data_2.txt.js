function __DECODE_0__(puqpTU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x87;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(puqpTU, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x95)) / 0x1 * (parseInt(__DECODE_0__(0x9a)) / 0x2) + -parseInt(__DECODE_0__(0x8d)) / 0x3 * (-parseInt(__DECODE_0__(0x8c)) / 0x4) + parseInt(__DECODE_0__(0x94)) / 0x5 * (parseInt(__DECODE_0__(0x99)) / 0x6) + parseInt(__DECODE_0__(0x8f)) / 0x7 + parseInt(__DECODE_0__(0x87)) / 0x8 + parseInt(__DECODE_0__(0x8a)) / 0x9 + -parseInt(__DECODE_0__(0x8e)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x68a74);
function __STRING_ARRAY__() {
  const _0xce1b24 = ['162026sOgUaj', '2248288zgUQPZ', 'readFileSync', 'trim', '793656UjTBHz', 'log', '100KjmUja', '97365pNUZli', '18428080tPVkSJ', '770392WDJBsF', 'split', '/dev/stdin', 'map', 'sort', '2878760pkRkBK', '5lLDrUn', 'concat', 'push', 'utf8', '6IftfIH'];
  __STRING_ARRAY__ = function () {
    return _0xce1b24;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0x8b)]((args => {
  const [[N], X] = args[__DECODE_0__(0x89)]()[__DECODE_0__(0x90)]('\x0a')['map'](r => r['split']('\x20')[__DECODE_0__(0x92)](v => v | 0x0));
  const _X = [][__DECODE_0__(0x96)](X)[__DECODE_0__(0x93)]((a, b) => a - b);
  const M1 = _X[N / 0x2 - 0x1];
  const M2 = _X[N / 0x2];
  const m = [];
  for (let i = 0x0; i < N; i++) {
    if (X[i] <= M1) {
      m['push'](M2);
    } else {
      m[__DECODE_0__(0x97)](M1);
    }
  }
  return m['join']`\n`;
})(require('fs')[__DECODE_0__(0x88)](__DECODE_0__(0x91), __DECODE_0__(0x98))));
