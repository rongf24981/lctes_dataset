(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1df)) / 0x1 * (parseInt(__DECODE_0__(0x1e3)) / 0x2) + parseInt(__DECODE_0__(0x1e0)) / 0x3 * (-parseInt(__DECODE_0__(0x1e7)) / 0x4) + -parseInt(__DECODE_0__(0x1da)) / 0x5 + parseInt(__DECODE_0__(0x1e8)) / 0x6 + -parseInt(__DECODE_0__(0x1e4)) / 0x7 + parseInt(__DECODE_0__(0x1e1)) / 0x8 + parseInt(__DECODE_0__(0x1de)) / 0x9 * (parseInt(__DECODE_0__(0x1db)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xafd5e);
var input = require('fs')[__DECODE_0__(0x1e6)]('/dev/stdin', __DECODE_0__(0x1e9));
var Arr = input[__DECODE_0__(0x1e2)]()[__DECODE_0__(0x1ea)]('\x0a');
function __DECODE_0__(bMYkod, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1da;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(bMYkod, key);
}
var cnt = 0x0;
Arr[__DECODE_0__(0x1dd)](function (v) {
  var str = v[__DECODE_0__(0x1ea)]('')[__DECODE_0__(0x1dc)]()[__DECODE_0__(0x1e5)]('');
  if (str == v) {
    cnt++;
  }
});
function __STRING_ARRAY__() {
  var _0x30a1c4 = ['6101720PAasPo', 'trim', '605732sbbvow', '2183538yDGvwY', 'join', 'readFileSync', '200VrRMcD', '5033034XcNjcQ', 'utf8', 'split', '5881390nIFzMf', '7960GaWUGo', 'reverse', 'forEach', '19206OmuzoA', '1EcFUlu', '83679prUScG'];
  __STRING_ARRAY__ = function () {
    return _0x30a1c4;
  };
  return __STRING_ARRAY__();
}
console['log'](cnt);
