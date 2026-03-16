var a0_0x5df61d = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4b827b = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x4b827b(0x143)) / 0x1 + parseInt(_0x4b827b(0x147)) / 0x2 * (-parseInt(_0x4b827b(0x152)) / 0x3) + parseInt(_0x4b827b(0x151)) / 0x4 * (-parseInt(_0x4b827b(0x148)) / 0x5) + -parseInt(_0x4b827b(0x146)) / 0x6 + parseInt(_0x4b827b(0x144)) / 0x7 + parseInt(_0x4b827b(0x14c)) / 0x8 + parseInt(_0x4b827b(0x145)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xceade);
var input = require('fs')[a0_0x5df61d(0x14f)](a0_0x5df61d(0x14b), a0_0x5df61d(0x14a));
var lines = input['split']('\x0a');
var w = +lines['shift']();
var n = +lines[a0_0x5df61d(0x14e)]();
var list = [];
var line = null;
while (line = lines['shift']()) {
  var args = line[a0_0x5df61d(0x153)](',');
  list[a0_0x5df61d(0x150)](args);
}
var answers = [];
for (var i = 0x1; i <= w; i++) {
  var k = i;
  list[a0_0x5df61d(0x14d)](function (args) {
    if (args[0x0] == k) {
      k = args[0x1];
    } else {
      if (args[0x1] == k) {
        k = args[0x0];
      }
    }
  });
  answers[k] = i;
}
answers[a0_0x5df61d(0x14e)]();
function __STRING_ARRAY__() {
  var _0x45a7c4 = ['utf8', '/dev/stdin', '4578208xjlPzd', 'forEach', 'shift', 'readFileSync', 'push', '6694452SJyLwg', '3oXyyUj', 'split', '372123eXtRIf', '6156423iNvbbL', '7813665vSMGxS', '942300wIFkSN', '29704JZHuAj', '5vLaMvv', 'join'];
  __STRING_ARRAY__ = function () {
    return _0x45a7c4;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(FYdyNo, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x143;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FYdyNo, key);
}
console['log'](answers[a0_0x5df61d(0x149)]('\x0a'));
