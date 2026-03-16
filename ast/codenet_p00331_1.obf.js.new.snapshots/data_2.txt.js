(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x9b)) / 0x1 + -parseInt(__DECODE_0__(0x9a)) / 0x2 + -parseInt(__DECODE_0__(0x98)) / 0x3 + parseInt(__DECODE_0__(0x9e)) / 0x4 * (parseInt(__DECODE_0__(0xa2)) / 0x5) + -parseInt(__DECODE_0__(0xa5)) / 0x6 + parseInt(__DECODE_0__(0x97)) / 0x7 + -parseInt(__DECODE_0__(0xa1)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x92e3f);
var input = require('fs')[__DECODE_0__(0x99)](__DECODE_0__(0x9f), __DECODE_0__(0x9d));
function __STRING_ARRAY__() {
  var _0x553a54 = ['readFileSync', '964220OwggZg', '1164800nEZpvw', 'map', 'utf8', '7680bWfexg', '/dev/stdin', 'trim', '11553888CysLdT', '3035uOEJuH', 'log', 'split', '4506270YPciJH', '6719853RVjtvx', '33495GCfeRJ'];
  __STRING_ARRAY__ = function () {
    return _0x553a54;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(Mmswuk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x97;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(Mmswuk, key);
}
var [h, r] = input[__DECODE_0__(0xa0)]()[__DECODE_0__(0xa4)]('\x20')[__DECODE_0__(0x9c)](Number);
if (r + h == 0x0) {
  console[__DECODE_0__(0xa3)](0x0);
} else {
  if (r + h > 0x0) {
    console[__DECODE_0__(0xa3)](0x1);
  } else {
    console[__DECODE_0__(0xa3)](-0x1);
  }
}
