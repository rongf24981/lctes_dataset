'use strict';

function __DECODE_0__(pnxhZA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pnxhZA, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1e2)) / 0x1 + -parseInt(__DECODE_0__(0x1f1)) / 0x2 + -parseInt(__DECODE_0__(0x1e5)) / 0x3 * (parseInt(__DECODE_0__(0x1ed)) / 0x4) + -parseInt(__DECODE_0__(0x1e3)) / 0x5 * (parseInt(__DECODE_0__(0x1e6)) / 0x6) + -parseInt(__DECODE_0__(0x1e4)) / 0x7 * (-parseInt(__DECODE_0__(0x1ea)) / 0x8) + parseInt(__DECODE_0__(0x1eb)) / 0x9 * (parseInt(__DECODE_0__(0x1e7)) / 0xa) + -parseInt(__DECODE_0__(0x1ee)) / 0xb * (-parseInt(__DECODE_0__(0x1f0)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe2f71);
function Main(input) {
  input = input['trim']();
  input = input[__DECODE_0__(0x1ec)](/\s+/, '')['split']('');
  var height = input[__DECODE_0__(0x1e8)];
  var one = 0x0;
  var zero = 0x0;
  while (input[__DECODE_0__(0x1e8)]) {
    if (input['pop']() === '0') {
      zero++;
    } else {
      one++;
    }
  }
  console['log'](Math['min'](zero, one) * 0x2);
}
function __STRING_ARRAY__() {
  var _0x2e9918 = ['replace', '4qKnGqm', '11eJyNkx', 'utf8', '13958268TjZTPM', '129084oOCMUM', '736150hMBNuW', '835865dyBFec', '316946rFFCCv', '3750969tEmeCw', '30RcQVkw', '1310FrUVEL', 'length', '/dev/stdin', '184jZpvAP', '9594HcEpHL'];
  __STRING_ARRAY__ = function () {
    return _0x2e9918;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x1e9), __DECODE_0__(0x1ef)));
