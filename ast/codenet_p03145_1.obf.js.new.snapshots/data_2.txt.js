function __STRING_ARRAY__() {
  var _0x2255a0 = ['split', '13518VqJvZE', '12gTDdSO', '3176iBJZNF', '260980izYapV', '/dev/stdin', '5rpNgoI', '1082dDgUiJ', '1979156wstMkI', '5593860tSXOiH', '5294025HUDnHe', '477OXUZUD', '2558857MZUGwk'];
  __STRING_ARRAY__ = function () {
    return _0x2255a0;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(jRvbYf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jRvbYf, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x194)) / 0x1 + parseInt(__DECODE_0__(0x197)) / 0x2 * (parseInt(__DECODE_0__(0x18e)) / 0x3) + -parseInt(__DECODE_0__(0x18b)) / 0x4 * (-parseInt(__DECODE_0__(0x196)) / 0x5) + -parseInt(__DECODE_0__(0x192)) / 0x6 * (-parseInt(__DECODE_0__(0x18f)) / 0x7) + parseInt(__DECODE_0__(0x193)) / 0x8 * (-parseInt(__DECODE_0__(0x191)) / 0x9) + -parseInt(__DECODE_0__(0x18c)) / 0xa + parseInt(__DECODE_0__(0x18d)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5becd);
function Main(input) {
  var inputs = input[__DECODE_0__(0x190)]('\x20');
  var ab = parseInt(inputs[0x0], 0xa);
  var bc = parseInt(inputs[0x1], 0xa);
  console['log'](ab * bc / 0x2);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x195), 'utf8'));
