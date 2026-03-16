function __STRING_ARRAY__() {
  var _0x3bc8d3 = ['toString', '7159308cWPDaC', '2942118FMqwhK', '3716bIbrfM', '6535liDYfC', '79117Oecdgl', 'stdout', 'close', 'split', '733014JslQmo', 'push', 'line', '7fyqBGG', '110FvDyCj', '34lEysWh', '50192439MmnaEh', '12047944SHYecY', 'stdin'];
  __STRING_ARRAY__ = function () {
    return _0x3bc8d3;
  };
  return __STRING_ARRAY__();
}
var a0_0x1f635b = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x162104 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x162104(0x84)) / 0x1 * (-parseInt(_0x162104(0x7b)) / 0x2) + parseInt(_0x162104(0x81)) / 0x3 + -parseInt(_0x162104(0x82)) / 0x4 * (-parseInt(_0x162104(0x83)) / 0x5) + parseInt(_0x162104(0x80)) / 0x6 + -parseInt(_0x162104(0x79)) / 0x7 * (-parseInt(_0x162104(0x7d)) / 0x8) + parseInt(_0x162104(0x76)) / 0x9 * (-parseInt(_0x162104(0x7a)) / 0xa) + -parseInt(_0x162104(0x7c)) / 0xb;
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
  'input': process[a0_0x1f635b(0x7e)],
  'output': process[a0_0x1f635b(0x85)]
});
rl['on'](a0_0x1f635b(0x78), function (x) {
  var _0xfbf0b3 = a0_0x1f635b;
  lines[_0xfbf0b3(0x77)](x);
});
rl['on'](a0_0x1f635b(0x86), function () {
  var _0x4991c8 = a0_0x1f635b;
  var A = Number(lines[0x0]['split']('\x20')[0x0]);
  var B = Number(lines[0x0]['split']('\x20')[0x1]);
  var K = Number(lines[0x0][_0x4991c8(0x87)]('\x20')[0x2]);
  var ans = '';
  for (var i = A; i <= B; i++) {
    if (i < A + K) {
      ans += i[_0x4991c8(0x7f)]();
    } else {
      if (i > B - K) {
        ans += i[_0x4991c8(0x7f)]();
      }
    }
  }
  for (var i = 0x0; i < ans['length']; i++) {
    console['log'](ans[i]);
  }
});
