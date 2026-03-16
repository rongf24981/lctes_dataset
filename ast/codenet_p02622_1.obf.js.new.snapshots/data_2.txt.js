(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x146)) / 0x1 * (-parseInt(__DECODE_0__(0x144)) / 0x2) + -parseInt(__DECODE_0__(0x140)) / 0x3 * (parseInt(__DECODE_0__(0x147)) / 0x4) + -parseInt(__DECODE_0__(0x14a)) / 0x5 + -parseInt(__DECODE_0__(0x141)) / 0x6 + parseInt(__DECODE_0__(0x143)) / 0x7 + parseInt(__DECODE_0__(0x142)) / 0x8 * (parseInt(__DECODE_0__(0x13d)) / 0x9) + parseInt(__DECODE_0__(0x13c)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x82333);
function __DECODE_0__(aXnbkn, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x13c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aXnbkn, key);
}
function __STRING_ARRAY__() {
  var _0x245e39 = ['3099540impIfk', '6704leyWgM', '5393857zLuYeY', '415198wXWgrz', 'split', '5kqWwvd', '4hCXAGX', 'length', 'readFileSync', '4476660rTLYBG', '2261210xtiYGc', '9UkBhRZ', '/dev/stdin', 'log', '270852MQYiih'];
  __STRING_ARRAY__ = function () {
    return _0x245e39;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0x145)]('\x0a');
  t = input[0x0]['split']('');
  s = input[0x1][__DECODE_0__(0x145)]('');
  var result = 0x0;
  for (var i = 0x0; i < s[__DECODE_0__(0x148)]; i++) {
    if (s[i] != t[i]) {
      result = result + 0x1;
    } else {}
  }
  console[__DECODE_0__(0x13f)](result);
}
Main(require('fs')[__DECODE_0__(0x149)](__DECODE_0__(0x13e), 'utf8'));
