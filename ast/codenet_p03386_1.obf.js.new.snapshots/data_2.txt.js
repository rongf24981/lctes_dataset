function __STRING_ARRAY__() {
  var _0x3bc8d3 = ['toString', '7159308cWPDaC', '2942118FMqwhK', '3716bIbrfM', '6535liDYfC', '79117Oecdgl', 'stdout', 'close', 'split', '733014JslQmo', 'push', 'line', '7fyqBGG', '110FvDyCj', '34lEysWh', '50192439MmnaEh', '12047944SHYecY', 'stdin'];
  __STRING_ARRAY__ = function () {
    return _0x3bc8d3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x84)) / 0x1 * (-parseInt(__DECODE_0__(0x7b)) / 0x2) + parseInt(__DECODE_0__(0x81)) / 0x3 + -parseInt(__DECODE_0__(0x82)) / 0x4 * (-parseInt(__DECODE_0__(0x83)) / 0x5) + parseInt(__DECODE_0__(0x80)) / 0x6 + -parseInt(__DECODE_0__(0x79)) / 0x7 * (-parseInt(__DECODE_0__(0x7d)) / 0x8) + parseInt(__DECODE_0__(0x76)) / 0x9 * (-parseInt(__DECODE_0__(0x7a)) / 0xa) + -parseInt(__DECODE_0__(0x7c)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbe7de);
var lines = [];
function __DECODE_0__(DLkrCj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x76;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DLkrCj, key);
}
var readline = require('readline');
var rl = readline['createInterface']({
  'input': process[__DECODE_0__(0x7e)],
  'output': process[__DECODE_0__(0x85)]
});
rl['on'](__DECODE_0__(0x78), function (x) {
  lines[__DECODE_0__(0x77)](x);
});
rl['on'](__DECODE_0__(0x86), function () {
  var A = Number(lines[0x0]['split']('\x20')[0x0]);
  var B = Number(lines[0x0]['split']('\x20')[0x1]);
  var K = Number(lines[0x0][__DECODE_0__(0x87)]('\x20')[0x2]);
  var ans = '';
  for (var i = A; i <= B; i++) {
    if (i < A + K) {
      ans += i[__DECODE_0__(0x7f)]();
    } else {
      if (i > B - K) {
        ans += i[__DECODE_0__(0x7f)]();
      }
    }
  }
  for (var i = 0x0; i < ans['length']; i++) {
    console['log'](ans[i]);
  }
});
