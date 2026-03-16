function __STRING_ARRAY__() {
  var _0x2255a0 = ['split', '13518VqJvZE', '12gTDdSO', '3176iBJZNF', '260980izYapV', '/dev/stdin', '5rpNgoI', '1082dDgUiJ', '1979156wstMkI', '5593860tSXOiH', '5294025HUDnHe', '477OXUZUD', '2558857MZUGwk'];
  __STRING_ARRAY__ = function () {
    return _0x2255a0;
  };
  return __STRING_ARRAY__();
}
var a0_0x2b81eb = __DECODE_0__;
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
  var _0x2ec454 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x2ec454(0x194)) / 0x1 + parseInt(_0x2ec454(0x197)) / 0x2 * (parseInt(_0x2ec454(0x18e)) / 0x3) + -parseInt(_0x2ec454(0x18b)) / 0x4 * (-parseInt(_0x2ec454(0x196)) / 0x5) + -parseInt(_0x2ec454(0x192)) / 0x6 * (-parseInt(_0x2ec454(0x18f)) / 0x7) + parseInt(_0x2ec454(0x193)) / 0x8 * (-parseInt(_0x2ec454(0x191)) / 0x9) + -parseInt(_0x2ec454(0x18c)) / 0xa + parseInt(_0x2ec454(0x18d)) / 0xb;
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
  var _0x84a16b = __DECODE_0__;
  var inputs = input[_0x84a16b(0x190)]('\x20');
  var ab = parseInt(inputs[0x0], 0xa);
  var bc = parseInt(inputs[0x1], 0xa);
  console['log'](ab * bc / 0x2);
}
Main(require('fs')['readFileSync'](a0_0x2b81eb(0x195), 'utf8'));
