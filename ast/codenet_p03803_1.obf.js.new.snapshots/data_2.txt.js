(function (stringArrayFunction, comparisonValue) {
  const stringArray = stringArrayFunction();
  while (!![]) {
    try {
      const expression = parseInt(__DECODE_0__(0x114)) / 0x1 * (-parseInt(__DECODE_0__(0x111)) / 0x2) + parseInt(__DECODE_0__(0x112)) / 0x3 * (-parseInt(__DECODE_0__(0x108)) / 0x4) + parseInt(__DECODE_0__(0x10e)) / 0x5 * (-parseInt(__DECODE_0__(0x100)) / 0x6) + -parseInt(__DECODE_0__(0x101)) / 0x7 * (-parseInt(__DECODE_0__(0x107)) / 0x8) + parseInt(__DECODE_0__(0x10c)) / 0x9 * (parseInt(__DECODE_0__(0x10b)) / 0xa) + -parseInt(__DECODE_0__(0x105)) / 0xb * (parseInt(__DECODE_0__(0x110)) / 0xc) + parseInt(__DECODE_0__(0x113)) / 0xd * (parseInt(__DECODE_0__(0x102)) / 0xe);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8b9f8);
function __DECODE_0__(UNoPvQ, key) {
  const stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x100;
    let value = stringArray[index];
    return value;
  };
  return __DECODE_0__(UNoPvQ, key);
}
let [a, b] = require('fs')['readFileSync'](__DECODE_0__(0x10d), __DECODE_0__(0x103))['split']('\x20')[__DECODE_0__(0x106)](Number);
if (a == 0x1) {
  a = 0xe;
}
function __STRING_ARRAY__() {
  const _0x1c1093 = ['14qpZnAX', '35000GCQEEa', 'utf8', 'log', '821403STjNeE', 'map', '4298968qIpiMm', '330164cegqVJ', 'Draw', 'Bob', '10cmKMKt', '8312391VqaZoY', '/dev/stdin', '700375abxDwJ', 'Alice', '108fPMAWc', '56116lNtXWR', '3nfhhWH', '5109EZicwJ', '34dEVaDT', '30NwSbLI'];
  __STRING_ARRAY__ = function () {
    return _0x1c1093;
  };
  return __STRING_ARRAY__();
}
if (b == 0x1) {
  b = 0xe;
}
console[__DECODE_0__(0x104)](a == b ? __DECODE_0__(0x109) : a > b ? __DECODE_0__(0x10f) : __DECODE_0__(0x10a));
