(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xe7)) / 0x1 * (-parseInt(__DECODE_0__(0xf0)) / 0x2) + parseInt(__DECODE_0__(0xeb)) / 0x3 + parseInt(__DECODE_0__(0xf4)) / 0x4 + -parseInt(__DECODE_0__(0xec)) / 0x5 + parseInt(__DECODE_0__(0xf2)) / 0x6 + -parseInt(__DECODE_0__(0xf1)) / 0x7 + -parseInt(__DECODE_0__(0xf6)) / 0x8;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1e4d5);
var lines = [];
var result = 0x0;
var readline = require(__DECODE_0__(0xf8));
var rl = readline['createInterface']({
  'input': process[__DECODE_0__(0xf5)],
  'output': process[__DECODE_0__(0xed)]
});
rl['on'](__DECODE_0__(0xef), function (x) {
  lines[__DECODE_0__(0xe8)](x);
});
function __DECODE_0__(kSheND, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xe6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kSheND, key);
}
function __STRING_ARRAY__() {
  var _0x4af309 = ['length', '1IjfXiR', 'push', 'sort', 'split', '359643eWBnim', '338120DbJDTw', 'stdout', 'abs', 'line', '88138XIPVnC', '1557738xnrzBq', '723252xZGguD', 'map', '898192cVoxBT', 'stdin', '53016HSvIRH', 'min', 'readline'];
  __STRING_ARRAY__ = function () {
    return _0x4af309;
  };
  return __STRING_ARRAY__();
}
rl['on']('close', function () {
  var N = Number(lines[0x0]);
  var a = lines[0x1][__DECODE_0__(0xea)]('\x20')[__DECODE_0__(0xf3)](value => Number(value));
  a[__DECODE_0__(0xe9)]((a, b) => a - b);
  var counter = Array(N)['fill'](0x0);
  var j = 0x0;
  counter[0x0] = [a[0x0], 0x1];
  for (var i = 0x1; i < N; i++) {
    if (a[i] !== a[i - 0x1]) {
      j++;
      counter[j] = [a[i], 0x1];
    } else {
      var cnt = counter[j][0x1] + 0x1;
      counter[j] = [a[i], cnt];
    }
  }
  for (var i = 0x0; i < counter[__DECODE_0__(0xe6)]; i++) {
    if (counter[i][0x0] === counter[i][0x1]) {
      continue;
    } else {
      if (counter[i] === 0x0) {
        continue;
      } else {
        result += Math[__DECODE_0__(0xf7)](counter[i][0x1], Math[__DECODE_0__(0xee)](counter[i][0x0] - counter[i][0x1]));
      }
    }
  }
  console['log'](result);
});
