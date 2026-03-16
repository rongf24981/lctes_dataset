function __DECODE_0__(KQsWlP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x181;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KQsWlP, key);
}
function __STRING_ARRAY__() {
  var _0x359d6b = ['335OfBmIc', 'map', 'pow', '145551xFIHwL', '1552649JXGIMm', '/dev/stdin', '9TcWqMP', '8uXXPcA', 'log', 'forEach', 'split', '1367692flmluC', 'utf8', '3911121meinHl', '137118UMszRt', '23688JNmROl', '4891890PxHILQ'];
  __STRING_ARRAY__ = function () {
    return _0x359d6b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x18e)) / 0x1 + -parseInt(__DECODE_0__(0x188)) / 0x2 * (parseInt(__DECODE_0__(0x191)) / 0x3) + -parseInt(__DECODE_0__(0x185)) / 0x4 + -parseInt(__DECODE_0__(0x18b)) / 0x5 * (-parseInt(__DECODE_0__(0x189)) / 0x6) + -parseInt(__DECODE_0__(0x18f)) / 0x7 + parseInt(__DECODE_0__(0x181)) / 0x8 * (parseInt(__DECODE_0__(0x187)) / 0x9) + parseInt(__DECODE_0__(0x18a)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x42ba4);
function Main(input) {
  input = input[__DECODE_0__(0x184)]('\x0a');
  var n = Math[__DECODE_0__(0x18d)](0x3, input[0x0]);
  var sum = 0x1;
  var arr = input[0x1][__DECODE_0__(0x184)]('\x20')[__DECODE_0__(0x18c)](Number);
  arr[__DECODE_0__(0x183)](function (val) {
    if (val % 0x2 == 0x0) {
      sum *= 0x2;
    }
  });
  console[__DECODE_0__(0x182)](n - sum);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x190), __DECODE_0__(0x186))['trim']());
