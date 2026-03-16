function __DECODE_0__(CidUAZ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e0;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CidUAZ, key);
}
(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x1e8)) / 0x1 * (parseInt(__DECODE_0__(0x1ee)) / 0x2) + parseInt(__DECODE_0__(0x1e0)) / 0x3 + -parseInt(__DECODE_0__(0x1e5)) / 0x4 + parseInt(__DECODE_0__(0x1e3)) / 0x5 * (parseInt(__DECODE_0__(0x1ea)) / 0x6) + -parseInt(__DECODE_0__(0x1e7)) / 0x7 + -parseInt(__DECODE_0__(0x1ec)) / 0x8 + parseInt(__DECODE_0__(0x1e2)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc5020);
function main(input) {
  input = input[__DECODE_0__(0x1ef)]();
  const a = input[__DECODE_0__(0x1e1)]('\x20')[__DECODE_0__(0x1e9)](Number);
  console[__DECODE_0__(0x1ed)](a[0x1] % a[0x0] == 0x0 ? a[0x0] + a[0x1] : a[0x1] - a[0x0]);
}
main(require('fs')[__DECODE_0__(0x1e6)](__DECODE_0__(0x1e4), __DECODE_0__(0x1eb)));
function __STRING_ARRAY__() {
  const _0x5368fc = ['3680928DDgEhC', 'log', '2XWKQCy', 'trim', '1392801DoUxoD', 'split', '25128639nFSEms', '15ooZuMN', '/dev/stdin', '4213360JIeavt', 'readFileSync', '9353498JcRWvW', '871994XXokMu', 'map', '2544540ivMCtU', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x5368fc;
  };
  return __STRING_ARRAY__();
}
