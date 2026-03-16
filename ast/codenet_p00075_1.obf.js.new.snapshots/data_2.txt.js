function __STRING_ARRAY__() {
  var _0x15e702 = ['utf8', '1835880mFUnhk', 'log', '1382074pwxuWh', '3ohjFKD', '11pNVsQD', '5498110xEyzZg', 'split', '144raQfZE', 'trim', 'filter', '4473372VUVsNe', 'readFileSync', '/dev/stdin', '640773lqWbCK', '9euOEae', '5865aPHfTQ', '599805LprfWp', '48HgiZCU'];
  __STRING_ARRAY__ = function () {
    return _0x15e702;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1ae)) / 0x1 + parseInt(__DECODE_0__(0x1a0)) / 0x2 * (parseInt(__DECODE_0__(0x1a1)) / 0x3) + -parseInt(__DECODE_0__(0x1a5)) / 0x4 * (parseInt(__DECODE_0__(0x1ad)) / 0x5) + parseInt(__DECODE_0__(0x1af)) / 0x6 * (-parseInt(__DECODE_0__(0x1ab)) / 0x7) + parseInt(__DECODE_0__(0x19e)) / 0x8 * (parseInt(__DECODE_0__(0x1ac)) / 0x9) + parseInt(__DECODE_0__(0x1a3)) / 0xa * (parseInt(__DECODE_0__(0x1a2)) / 0xb) + parseInt(__DECODE_0__(0x1a8)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x72721);
var input = require('fs')[__DECODE_0__(0x1a9)](__DECODE_0__(0x1aa), __DECODE_0__(0x19d));
var lines = input[__DECODE_0__(0x1a6)]()['split']('\x0a');
function __DECODE_0__(ayFpfO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ayFpfO, key);
}
var ret = lines[__DECODE_0__(0x1a7)](function (line) {
  var items = line[__DECODE_0__(0x1a4)](',');
  var w = +items[0x1];
  var h = +items[0x2];
  return w / (h * h) >= 0x19;
});
ret['forEach'](function (line) {
  console[__DECODE_0__(0x19f)](line[__DECODE_0__(0x1a4)](',')[0x0]);
});
