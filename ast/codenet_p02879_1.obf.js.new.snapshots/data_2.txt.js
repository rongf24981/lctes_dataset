function __DECODE_0__(YfrPbw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbc;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YfrPbw, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xc9)) / 0x1 + parseInt(__DECODE_0__(0xc7)) / 0x2 * (-parseInt(__DECODE_0__(0xc3)) / 0x3) + -parseInt(__DECODE_0__(0xc8)) / 0x4 + -parseInt(__DECODE_0__(0xc2)) / 0x5 * (parseInt(__DECODE_0__(0xc5)) / 0x6) + -parseInt(__DECODE_0__(0xbd)) / 0x7 * (parseInt(__DECODE_0__(0xc0)) / 0x8) + -parseInt(__DECODE_0__(0xc1)) / 0x9 * (parseInt(__DECODE_0__(0xbc)) / 0xa) + parseInt(__DECODE_0__(0xbe)) / 0xb * (parseInt(__DECODE_0__(0xbf)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x43196);
function Main(input) {
  var input = input['split']('\x20');
  var a = Number(input[0x0]);
  var b = Number(input[0x1]);
  if (a > 0x9 || b > 0x9) {
    console[__DECODE_0__(0xc4)](-0x1);
    return;
  }
  var result = a * b;
  console[__DECODE_0__(0xc4)](result);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xc6), 'utf8'));
function __STRING_ARRAY__() {
  var _0x34a47 = ['28932psCoFA', '/dev/stdin', '2EzfxXL', '660860RpFSnN', '144941MilezA', '10pfznwn', '35dJuaKK', '6696349NLZCjQ', '36JMLgms', '447448KbPPNP', '3014793cfnpOd', '480lApDKT', '491217ajMgTh', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x34a47;
  };
  return __STRING_ARRAY__();
}
