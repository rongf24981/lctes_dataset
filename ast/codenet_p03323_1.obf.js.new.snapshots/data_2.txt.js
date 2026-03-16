(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1a3)) / 0x1 * (-parseInt(__DECODE_0__(0x19e)) / 0x2) + -parseInt(__DECODE_0__(0x1ab)) / 0x3 * (-parseInt(__DECODE_0__(0x1a8)) / 0x4) + -parseInt(__DECODE_0__(0x1a1)) / 0x5 + -parseInt(__DECODE_0__(0x1aa)) / 0x6 + parseInt(__DECODE_0__(0x19d)) / 0x7 * (parseInt(__DECODE_0__(0x1a9)) / 0x8) + -parseInt(__DECODE_0__(0x1a2)) / 0x9 * (-parseInt(__DECODE_0__(0x1a5)) / 0xa) + -parseInt(__DECODE_0__(0x1a7)) / 0xb * (parseInt(__DECODE_0__(0x19b)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbf718);
function __STRING_ARRAY__() {
  var _0xb3a884 = ['1125410tWNLqv', '9891dyNCFT', '6141fcCUOa', 'Yay!', '7780KGSGKI', 'readFileSync', '11HkoflL', '24SIrXIS', '8ViiXRg', '1615452XNpjnO', '284118pPJgcL', 'log', '13661940DCtPYI', 'split', '7213913fSVytm', '12ulBzJF', 'utf8', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0xb3a884;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(WzeQWU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WzeQWU, key);
}
function Main(input) {
  var ab = input[0x0][__DECODE_0__(0x19c)]('\x20');
  console[__DECODE_0__(0x19a)](ab[0x0] <= 0x8 && ab[0x1] <= 0x8 ? __DECODE_0__(0x1a4) : ':(');
}
Main(require('fs')[__DECODE_0__(0x1a6)](__DECODE_0__(0x1a0), __DECODE_0__(0x19f))['split']('\x0a'));
