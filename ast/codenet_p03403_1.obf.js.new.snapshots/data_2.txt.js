function __STRING_ARRAY__() {
  const _0x595325 = ['log', 'split', '7212TDBYvZ', 'push', '7551236NHFgLS', '15Gwzzzl', 'map', 'readFileSync', '228zosxWZ', 'join', '2634205XGlyzw', '4306761HbuPVh', 'utf8', '1581654dnHelg', '763651yIaVme', '/dev/stdin', '2ScCSTp', 'abs', '35636424iNDbzR', '10AojDGx', '8VqomhK'];
  __STRING_ARRAY__ = function () {
    return _0x595325;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x14b)) / 0x1 * (-parseInt(__DECODE_0__(0x14d)) / 0x2) + -parseInt(__DECODE_0__(0x154)) / 0x3 * (parseInt(__DECODE_0__(0x15a)) / 0x4) + parseInt(__DECODE_0__(0x157)) / 0x5 * (-parseInt(__DECODE_0__(0x14a)) / 0x6) + parseInt(__DECODE_0__(0x15c)) / 0x7 + -parseInt(__DECODE_0__(0x151)) / 0x8 * (parseInt(__DECODE_0__(0x15d)) / 0x9) + parseInt(__DECODE_0__(0x150)) / 0xa * (-parseInt(__DECODE_0__(0x156)) / 0xb) + parseInt(__DECODE_0__(0x14f)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x77822);
function __DECODE_0__(PdiqWK, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x149;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(PdiqWK, key);
}
console[__DECODE_0__(0x152)]((args => {
  const [[N], A] = args['trim']()[__DECODE_0__(0x153)]('\x0a')[__DECODE_0__(0x158)](r => r[__DECODE_0__(0x153)]('\x20')[__DECODE_0__(0x158)](v => v | 0x0));
  let C = Math[__DECODE_0__(0x14e)](A[0x0]) + Math['abs'](A[N - 0x1]);
  for (let i = 0x1; i < N; i++) {
    C += Math['abs'](A[i] - A[i - 0x1]);
  }
  const c = [C - Math['abs'](A[0x0]) - Math['abs'](A[0x1] - A[0x0]) + Math[__DECODE_0__(0x14e)](A[0x1])];
  for (let i = 0x1; i < N - 0x1; i++) {
    c[__DECODE_0__(0x155)](C - Math[__DECODE_0__(0x14e)](A[i + 0x1] - A[i]) - Math[__DECODE_0__(0x14e)](A[i] - A[i - 0x1]) + Math['abs'](A[i + 0x1] - A[i - 0x1]));
  }
  c[__DECODE_0__(0x155)](C - Math[__DECODE_0__(0x14e)](A[N - 0x1]) - Math['abs'](A[N - 0x2] - A[N - 0x1]) + Math[__DECODE_0__(0x14e)](A[N - 0x2]));
  return c[__DECODE_0__(0x15b)]`\n`;
})(require('fs')[__DECODE_0__(0x159)](__DECODE_0__(0x14c), __DECODE_0__(0x149))));
