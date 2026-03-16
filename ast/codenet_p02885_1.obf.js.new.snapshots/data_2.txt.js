(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x184)) / 0x1 + -parseInt(__DECODE_0__(0x17f)) / 0x2 + -parseInt(__DECODE_0__(0x185)) / 0x3 * (-parseInt(__DECODE_0__(0x189)) / 0x4) + -parseInt(__DECODE_0__(0x181)) / 0x5 * (parseInt(__DECODE_0__(0x188)) / 0x6) + parseInt(__DECODE_0__(0x18b)) / 0x7 + parseInt(__DECODE_0__(0x186)) / 0x8 + parseInt(__DECODE_0__(0x187)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb9ab3);
function __DECODE_0__(Eviaim, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x17f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Eviaim, key);
}
function Main(input) {
  var args = input[__DECODE_0__(0x18a)]()['split']('\x20')[__DECODE_0__(0x18c)](Number);
  var nums = args[0x1] * 0x2;
  var ans = 0x0;
  if (nums <= args[0x0]) {
    ans = args[0x0] - nums;
  }
  console[__DECODE_0__(0x18d)](ans);
}
function __STRING_ARRAY__() {
  var _0xee1730 = ['/dev/stdin', 'utf8', '775708PNnTpU', '3VQCaRc', '7496288BDdmDi', '18073809vtKyUW', '6PaOIva', '4506812NMzLqw', 'trim', '618352zQbSqx', 'map', 'log', '2287448yVqlIH', 'readFileSync', '7401725KZGhjF'];
  __STRING_ARRAY__ = function () {
    return _0xee1730;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x180)](__DECODE_0__(0x182), __DECODE_0__(0x183)));
