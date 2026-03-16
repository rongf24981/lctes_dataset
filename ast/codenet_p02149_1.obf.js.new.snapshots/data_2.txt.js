function __STRING_ARRAY__() {
  var _0x427ea0 = ['3594OWDSou', '/dev/stdin', '1514660idIiZd', '1255zYHKjk', '33cSEOfG', '360932etEgGV', 'trim', 'map', '369705XSfWeL', 'log', 'readFileSync', 'utf8', '45kaVOXq', '91708RPejLH', '431541qFwKbF', '1550810epvWdH', 'max', '168drGaZQ', '88kpgVgG'];
  __STRING_ARRAY__ = function () {
    return _0x427ea0;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(cRFvdj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cRFvdj, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xca)) / 0x1 + parseInt(__DECODE_0__(0xd1)) / 0x2 + parseInt(__DECODE_0__(0xc0)) / 0x3 * (parseInt(__DECODE_0__(0xc9)) / 0x4) + -parseInt(__DECODE_0__(0xbf)) / 0x5 * (parseInt(__DECODE_0__(0xcf)) / 0x6) + -parseInt(__DECODE_0__(0xc4)) / 0x7 * (parseInt(__DECODE_0__(0xce)) / 0x8) + -parseInt(__DECODE_0__(0xc8)) / 0x9 * (parseInt(__DECODE_0__(0xcb)) / 0xa) + parseInt(__DECODE_0__(0xc1)) / 0xb * (parseInt(__DECODE_0__(0xcd)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x601f5);
var input = require('fs')[__DECODE_0__(0xc6)](__DECODE_0__(0xd0), __DECODE_0__(0xc7));
var arr = input[__DECODE_0__(0xc2)]()['split']('\x20')[__DECODE_0__(0xc3)](Number);
var max = Math[__DECODE_0__(0xcc)](...arr);
console[__DECODE_0__(0xc5)](['A', 'B', 'C'][arr['indexOf'](max)]);
