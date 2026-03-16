(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x94)) / 0x1 + -parseInt(__DECODE_0__(0x9c)) / 0x2 * (-parseInt(__DECODE_0__(0x95)) / 0x3) + -parseInt(__DECODE_0__(0x8d)) / 0x4 + -parseInt(__DECODE_0__(0x9f)) / 0x5 * (-parseInt(__DECODE_0__(0x98)) / 0x6) + parseInt(__DECODE_0__(0x93)) / 0x7 * (-parseInt(__DECODE_0__(0x90)) / 0x8) + -parseInt(__DECODE_0__(0x9d)) / 0x9 * (-parseInt(__DECODE_0__(0xa1)) / 0xa) + -parseInt(__DECODE_0__(0x97)) / 0xb * (-parseInt(__DECODE_0__(0x9b)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xed909);
function __STRING_ARRAY__() {
  var _0x208498 = ['split', 'push', '1896NcCmWM', '2INEIhV', '9wWRXsx', 'map', '115QgPECC', 'stdin', '3050490WvmVKu', '4161964IvddoW', 'stdout', 'log', '8miyZgN', 'line', 'sort', '5518156OYmBaZ', '613065hztneF', '3705759cFalZW', 'close', '12100EstKxD', '123834JTlIQX'];
  __STRING_ARRAY__ = function () {
    return _0x208498;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(nvuxqi, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(nvuxqi, key);
}
var readline = require('readline');
var lines = [];
var result = 0x0;
var rl = readline['createInterface']({
  'input': process[__DECODE_0__(0xa0)],
  'output': process[__DECODE_0__(0x8e)]
});
rl['on'](__DECODE_0__(0x91), function (x) {
  lines[__DECODE_0__(0x9a)](x);
});
rl['on'](__DECODE_0__(0x96), function () {
  var N = Number(lines[0x0][__DECODE_0__(0x99)]('\x20')[0x0]);
  var M = Number(lines[0x0]['split']('\x20')[0x1]);
  var X = lines[0x1][__DECODE_0__(0x99)]('\x20')[__DECODE_0__(0x9e)](value => Number(value));
  X[__DECODE_0__(0x92)]((a, b) => a - b);
  var sum = Array(M)['fill'](0x0);
  for (var i = 0x1; i < M; i++) {
    sum[i] = X[i] - X[i - 0x1];
  }
  sum['sort']((a, b) => b - a);
  for (var i = N - 0x1; i < M; i++) {
    result += sum[i];
  }
  console[__DECODE_0__(0x8f)](result);
});
