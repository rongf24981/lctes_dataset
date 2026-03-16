(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x156)) / 0x1 * (-parseInt(__DECODE_0__(0x159)) / 0x2) + parseInt(__DECODE_0__(0x14f)) / 0x3 + -parseInt(__DECODE_0__(0x158)) / 0x4 * (-parseInt(__DECODE_0__(0x15c)) / 0x5) + parseInt(__DECODE_0__(0x153)) / 0x6 + parseInt(__DECODE_0__(0x14e)) / 0x7 + parseInt(__DECODE_0__(0x152)) / 0x8 + parseInt(__DECODE_0__(0x15b)) / 0x9 * (-parseInt(__DECODE_0__(0x15a)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb35ec);
var input = require('fs')['readFileSync'](__DECODE_0__(0x151), __DECODE_0__(0x150));
var Arr = input[__DECODE_0__(0x14d)]()[__DECODE_0__(0x157)]('\x0a');
function __DECODE_0__(oIqaah, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oIqaah, key);
}
function __STRING_ARRAY__() {
  var _0x157d48 = ['trim', '7260414zuJsHr', '491631qMuWNr', 'utf8', '/dev/stdin', '8466016KEIyLd', '6805494WdMsbG', 'shift', 'log', '1YmPwLK', 'split', '12mhmGgP', '2813438RCkBem', '13080ziPtGc', '16227vqiZZD', '1843605aOoAoD'];
  __STRING_ARRAY__ = function () {
    return _0x157d48;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var n = Arr['shift']() - 0x0;
  if (n == 0x0) {
    break;
  }
  var arr = Arr[__DECODE_0__(0x154)]()[__DECODE_0__(0x157)]('\x20')['map'](Number);
  var ball = 0x20;
  var i = 0x0;
  while (!![]) {
    ball -= (ball - 0x1) % 0x5;
    console[__DECODE_0__(0x155)](ball);
    if (ball == 0x1) {
      console[__DECODE_0__(0x155)](0x0);
      break;
    }
    ball -= arr[i % n];
    i++;
    console[__DECODE_0__(0x155)](ball);
  }
}
