(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d0)) / 0x1 + -parseInt(__DECODE_0__(0x1cd)) / 0x2 + parseInt(__DECODE_0__(0x1cf)) / 0x3 + -parseInt(__DECODE_0__(0x1bf)) / 0x4 + -parseInt(__DECODE_0__(0x1cc)) / 0x5 * (parseInt(__DECODE_0__(0x1c4)) / 0x6) + parseInt(__DECODE_0__(0x1ca)) / 0x7 * (-parseInt(__DECODE_0__(0x1c5)) / 0x8) + -parseInt(__DECODE_0__(0x1c2)) / 0x9 * (-parseInt(__DECODE_0__(0x1ce)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x75ebe);
function __STRING_ARRAY__() {
  var _0x3ac0b9 = ['/dev/stdin', '906fRvvHC', '2808KZinqy', 'utf8', 'log', 'split', 'push', '805WXEepX', 'some', '3795qhdlPi', '1857682wAqHZv', '417990iqNNNQ', '1183542ZaTLoq', '478574zKNGfT', '2257864OUJDxR', 'pop', 'readFileSync', '477wMPDXc'];
  __STRING_ARRAY__ = function () {
    return _0x3ac0b9;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(IGdjzC, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1bf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IGdjzC, key);
}
q = [];
require('fs')[__DECODE_0__(0x1c1)](__DECODE_0__(0x1c3), __DECODE_0__(0x1c6))['trim']()[__DECODE_0__(0x1c8)]('\x0a')[__DECODE_0__(0x1cb)](function (i) {
  i != 0x0 ? q[__DECODE_0__(0x1c9)](i) : console[__DECODE_0__(0x1c7)](q[__DECODE_0__(0x1c0)]());
});
