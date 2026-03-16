(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = -parseInt(__DECODE_0__(0x130)) / 0x1 + parseInt(__DECODE_0__(0x126)) / 0x2 + -parseInt(__DECODE_0__(0x12e)) / 0x3 * (-parseInt(__DECODE_0__(0x129)) / 0x4) + -parseInt(__DECODE_0__(0x127)) / 0x5 + parseInt(__DECODE_0__(0x12f)) / 0x6 + parseInt(__DECODE_0__(0x12b)) / 0x7 + parseInt(__DECODE_0__(0x12c)) / 0x8 * (parseInt(__DECODE_0__(0x132)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xaa936);
function __STRING_ARRAY__() {
  const _0x10a19e = ['log', '4jXzeKq', 'utf8', '2996210pouDzk', '15369064IujJOu', 'length', '498657aGtTgQ', '768780piSBnZ', '1014990YjGMvX', 'floor', '9pSeeeR', '/dev/stdin', 'match', '223824UygqJr', '5208780ipVQxw'];
  __STRING_ARRAY__ = function () {
    return _0x10a19e;
  };
  return __STRING_ARRAY__();
}
function Main(s) {
  const n = s[__DECODE_0__(0x12d)];
  const p = s[__DECODE_0__(0x134)](/p/g)['length'];
  console[__DECODE_0__(0x128)](Math[__DECODE_0__(0x131)](n / 0x2 - p));
}
function __DECODE_0__(NyDSCU, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x126;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NyDSCU, key);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x133), __DECODE_0__(0x12a))['trim']());
