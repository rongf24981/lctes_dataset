function __DECODE_0__(IGAjna, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc4;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IGAjna, key);
}
function __STRING_ARRAY__() {
  var _0x2f164c = ['3356064FkxJLj', '/dev/stdin', '264KScOof', 'floor', '1204LIzPxN', '119achAkO', 'readFileSync', '681126aHzYFN', '1297281YycCsM', '17412130OcdhQk', '15FwAXun', '9cYCXpU', '23155pQVhWC', '451764hJDtkl', '416712efLMfX'];
  __STRING_ARRAY__ = function () {
    return _0x2f164c;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xcb)) / 0x1 + -parseInt(__DECODE_0__(0xca)) / 0x2 * (-parseInt(__DECODE_0__(0xcd)) / 0x3) + -parseInt(__DECODE_0__(0xc7)) / 0x4 * (-parseInt(__DECODE_0__(0xcf)) / 0x5) + -parseInt(__DECODE_0__(0xd0)) / 0x6 * (-parseInt(__DECODE_0__(0xc8)) / 0x7) + parseInt(__DECODE_0__(0xd2)) / 0x8 + parseInt(__DECODE_0__(0xce)) / 0x9 * (-parseInt(__DECODE_0__(0xcc)) / 0xa) + -parseInt(__DECODE_0__(0xc5)) / 0xb * (parseInt(__DECODE_0__(0xd1)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe1aae);
function main(input) {
  console['log'](0xa - Math[__DECODE_0__(0xc6)](input / 0xc8));
}
main(require('fs')[__DECODE_0__(0xc9)](__DECODE_0__(0xc4), 'utf8'));
