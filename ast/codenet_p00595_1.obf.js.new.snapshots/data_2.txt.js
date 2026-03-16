function __STRING_ARRAY__() {
  var _0x383726 = ['68280VjbjLn', '145zxlMIh', 'trim', '9ePczRB', '86053oqdjVE', '4843760ULnmdW', 'split', 'readFileSync', '261672VOhcww', '19xJgHrN', '18HQgnVY', 'map', '/dev/stdin', '6311270MUaOqx', 'utf8', 'forEach', 'log', '17626LJttUD', '65898mXKYgQ', '1788bGQoNf'];
  __STRING_ARRAY__ = function () {
    return _0x383726;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(SVsXBN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SVsXBN, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf1)) / 0x1 * (parseInt(__DECODE_0__(0xe5)) / 0x2) + -parseInt(__DECODE_0__(0xf0)) / 0x3 + parseInt(__DECODE_0__(0xe8)) / 0x4 * (parseInt(__DECODE_0__(0xe9)) / 0x5) + -parseInt(__DECODE_0__(0xf2)) / 0x6 * (-parseInt(__DECODE_0__(0xe6)) / 0x7) + parseInt(__DECODE_0__(0xed)) / 0x8 + -parseInt(__DECODE_0__(0xeb)) / 0x9 * (-parseInt(__DECODE_0__(0xe1)) / 0xa) + parseInt(__DECODE_0__(0xec)) / 0xb * (-parseInt(__DECODE_0__(0xe7)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x52e73);
var input = require('fs')[__DECODE_0__(0xef)](__DECODE_0__(0xf4), __DECODE_0__(0xe2));
var Arr = input[__DECODE_0__(0xea)]()[__DECODE_0__(0xee)]('\x0a');
Arr[__DECODE_0__(0xe3)](function (v) {
  var arr = v['split']('\x20')[__DECODE_0__(0xf3)](Number);
  var m = Math['max'](arr[0x0], arr[0x1]);
  var n = Math['min'](arr[0x0], arr[0x1]);
  while (n != 0x0) {
    var N = n;
    n = m % n;
    m = N;
  }
  console[__DECODE_0__(0xe4)](m);
});
