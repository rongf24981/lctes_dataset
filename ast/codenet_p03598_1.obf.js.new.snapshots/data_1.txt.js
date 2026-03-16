var a0_0x8b33d2 = __DECODE_0__;
function __DECODE_0__(OrnfWf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x17e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OrnfWf, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0x4c9426 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x4c9426(0x18a)) / 0x1 * (parseInt(_0x4c9426(0x184)) / 0x2) + parseInt(_0x4c9426(0x189)) / 0x3 * (-parseInt(_0x4c9426(0x183)) / 0x4) + -parseInt(_0x4c9426(0x17e)) / 0x5 * (-parseInt(_0x4c9426(0x18b)) / 0x6) + -parseInt(_0x4c9426(0x187)) / 0x7 * (-parseInt(_0x4c9426(0x180)) / 0x8) + parseInt(_0x4c9426(0x18c)) / 0x9 + -parseInt(_0x4c9426(0x17f)) / 0xa * (parseInt(_0x4c9426(0x181)) / 0xb) + parseInt(_0x4c9426(0x186)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8f34b);
function Main(input) {
  var _0x447e2e = __DECODE_0__;
  var input = input[_0x447e2e(0x188)]('\x0a');
  var ballXList = input[0x2][_0x447e2e(0x188)]('\x20');
  var ret = 0x0;
  for (var i = 0x0; i < input[0x0]; i++) {
    var aDistance = ballXList[i];
    var bDistance = input[0x1] - ballXList[i];
    var ret = ret + (aDistance < bDistance ? aDistance : bDistance) * 0x2;
  }
  console[_0x447e2e(0x185)](ret);
}
function __STRING_ARRAY__() {
  var _0x5aaa4f = ['2715fbPLVO', '369690XCcJHl', '10414746EDpLxz', 'readFileSync', '25euznKi', '10680nOywpF', '808xWohnA', '11693lOoLUZ', '/dev/stdin', '4bpzxOD', '446wffXDF', 'log', '9734652InBVZf', '75138cuZTrO', 'split', '3099972NgFUQA'];
  __STRING_ARRAY__ = function () {
    return _0x5aaa4f;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[a0_0x8b33d2(0x18d)](a0_0x8b33d2(0x182), 'utf8'));
