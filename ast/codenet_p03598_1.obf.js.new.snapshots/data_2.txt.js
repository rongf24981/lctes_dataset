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
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x18a)) / 0x1 * (parseInt(__DECODE_0__(0x184)) / 0x2) + parseInt(__DECODE_0__(0x189)) / 0x3 * (-parseInt(__DECODE_0__(0x183)) / 0x4) + -parseInt(__DECODE_0__(0x17e)) / 0x5 * (-parseInt(__DECODE_0__(0x18b)) / 0x6) + -parseInt(__DECODE_0__(0x187)) / 0x7 * (-parseInt(__DECODE_0__(0x180)) / 0x8) + parseInt(__DECODE_0__(0x18c)) / 0x9 + -parseInt(__DECODE_0__(0x17f)) / 0xa * (parseInt(__DECODE_0__(0x181)) / 0xb) + parseInt(__DECODE_0__(0x186)) / 0xc;
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
  var input = input[__DECODE_0__(0x188)]('\x0a');
  var ballXList = input[0x2][__DECODE_0__(0x188)]('\x20');
  var ret = 0x0;
  for (var i = 0x0; i < input[0x0]; i++) {
    var aDistance = ballXList[i];
    var bDistance = input[0x1] - ballXList[i];
    var ret = ret + (aDistance < bDistance ? aDistance : bDistance) * 0x2;
  }
  console[__DECODE_0__(0x185)](ret);
}
function __STRING_ARRAY__() {
  var _0x5aaa4f = ['2715fbPLVO', '369690XCcJHl', '10414746EDpLxz', 'readFileSync', '25euznKi', '10680nOywpF', '808xWohnA', '11693lOoLUZ', '/dev/stdin', '4bpzxOD', '446wffXDF', 'log', '9734652InBVZf', '75138cuZTrO', 'split', '3099972NgFUQA'];
  __STRING_ARRAY__ = function () {
    return _0x5aaa4f;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[__DECODE_0__(0x18d)](__DECODE_0__(0x182), 'utf8'));
