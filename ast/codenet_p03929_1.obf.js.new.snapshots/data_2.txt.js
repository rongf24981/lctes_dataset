function __DECODE_0__(deEcvl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(deEcvl, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xc7)) / 0x1 + parseInt(__DECODE_0__(0xc3)) / 0x2 * (-parseInt(__DECODE_0__(0xc4)) / 0x3) + parseInt(__DECODE_0__(0xce)) / 0x4 + -parseInt(__DECODE_0__(0xcc)) / 0x5 + -parseInt(__DECODE_0__(0xcd)) / 0x6 + parseInt(__DECODE_0__(0xc2)) / 0x7 + -parseInt(__DECODE_0__(0xc9)) / 0x8 * (-parseInt(__DECODE_0__(0xc6)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xcc0dd);
function __STRING_ARRAY__() {
  var _0x256933 = ['653190DSXdZa', 'utf8', '369vAlEWj', '648215eUBhsd', 'readFileSync', '455432acvzTU', 'log', 'split', '5280320pXcyVF', '5142054BelgfH', '6169960ETKLMn', '2740038chLwJl', '8hqoBKa'];
  __STRING_ARRAY__ = function () {
    return _0x256933;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0xcb)]('\x20');
  var valN = input[0x0];
  var valK = input[0x1];
  if (valN < 0x3) {
    console[__DECODE_0__(0xca)]('0');
    return;
  }
  var count = 0x0;
  for (var i = 0x0; i + 0x2 < valN; i++) {
    for (var j = 0x0; j < 0x5; j++) {
      if ((i * 0x3f + j * 0x9 + 0x51) % 0xb == valK) {
        count++;
      }
    }
  }
  console[__DECODE_0__(0xca)](count);
}
Main(require('fs')[__DECODE_0__(0xc8)]('/dev/stdin', __DECODE_0__(0xc5)));
