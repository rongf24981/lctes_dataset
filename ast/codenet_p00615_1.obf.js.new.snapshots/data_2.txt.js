(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1c5)) / 0x1 + -parseInt(__DECODE_0__(0x1bf)) / 0x2 + -parseInt(__DECODE_0__(0x1cd)) / 0x3 * (-parseInt(__DECODE_0__(0x1ca)) / 0x4) + -parseInt(__DECODE_0__(0x1d1)) / 0x5 + parseInt(__DECODE_0__(0x1c8)) / 0x6 * (parseInt(__DECODE_0__(0x1d3)) / 0x7) + parseInt(__DECODE_0__(0x1c9)) / 0x8 + parseInt(__DECODE_0__(0x1cf)) / 0x9 * (parseInt(__DECODE_0__(0x1d4)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb650f);
var input = require('fs')[__DECODE_0__(0x1c7)](__DECODE_0__(0x1d0), 'utf8');
var Arr = input[__DECODE_0__(0x1c3)](/\n$/, '')[__DECODE_0__(0x1cb)]('\x0a');
function __STRING_ARRAY__() {
  var _0x3b7d46 = ['map', 'replace', '0\x200', '1487005fualpS', 'concat', 'readFileSync', '579030yhYlLZ', '9787144wKkCtd', '315148fNDHfm', 'split', 'log', '33GhEdpr', 'sort', '9gWHGzI', '/dev/stdin', '6705845QqqFoP', 'max', '77ICAjLE', '7286270snxmqd', '610582GzMQSH', 'abs', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x3b7d46;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(iyGOhv, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1bf;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iyGOhv, key);
}
while (!![]) {
  var str = Arr[__DECODE_0__(0x1c1)]();
  if (str == __DECODE_0__(0x1c4)) {
    break;
  }
  var arr = str[__DECODE_0__(0x1cb)]('\x20');
  var data = [0x0];
  if (arr[0x0] > 0x0) {
    data = data[__DECODE_0__(0x1c6)](Arr['shift']()[__DECODE_0__(0x1cb)]('\x20')[__DECODE_0__(0x1c2)](Number));
  }
  if (arr[0x1] > 0x0) {
    data = data[__DECODE_0__(0x1c6)](Arr[__DECODE_0__(0x1c1)]()[__DECODE_0__(0x1cb)]('\x20')[__DECODE_0__(0x1c2)](Number));
  }
  data[__DECODE_0__(0x1ce)](function (a, b) {
    return a - b;
  });
  var max = 0x0;
  data['reduce'](function (a, b) {
    max = Math[__DECODE_0__(0x1d2)](max, Math[__DECODE_0__(0x1c0)](a - b));
    return b;
  });
  console[__DECODE_0__(0x1cc)](max);
}
