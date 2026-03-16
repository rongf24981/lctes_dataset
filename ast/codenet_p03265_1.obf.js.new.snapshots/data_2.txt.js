(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x118)) / 0x1 * (parseInt(__DECODE_0__(0x109)) / 0x2) + -parseInt(__DECODE_0__(0x10b)) / 0x3 + -parseInt(__DECODE_0__(0x106)) / 0x4 + -parseInt(__DECODE_0__(0x117)) / 0x5 + parseInt(__DECODE_0__(0x10a)) / 0x6 * (-parseInt(__DECODE_0__(0x107)) / 0x7) + -parseInt(__DECODE_0__(0x10d)) / 0x8 + parseInt(__DECODE_0__(0x10c)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xafce9);
process['stdin']['resume']();
function __DECODE_0__(zNFLad, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x106;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zNFLad, key);
}
process[__DECODE_0__(0x113)][__DECODE_0__(0x115)](__DECODE_0__(0x119));
var lines = [];
var reader = require(__DECODE_0__(0x10e))[__DECODE_0__(0x110)]({
  'input': process[__DECODE_0__(0x113)],
  'output': process[__DECODE_0__(0x10f)]
});
reader['on'](__DECODE_0__(0x116), line => {
  lines[__DECODE_0__(0x114)](line);
});
reader['on'](__DECODE_0__(0x112), () => {
  var abcd = lines[0x0][__DECODE_0__(0x11a)]('\x20');
  var one = Number(abcd[0x0]);
  var two = Number(abcd[0x1]);
  var three = Number(abcd[0x2]);
  var four = Number(abcd[0x3]);
  var ans = [];
  ans['push'](three + (two - four));
  ans[__DECODE_0__(0x114)](three + four - one);
  ans['push'](one + two - four);
  ans[__DECODE_0__(0x114)](three + two - one);
  console[__DECODE_0__(0x108)](ans[__DECODE_0__(0x111)]('\x20'));
});
function __STRING_ARRAY__() {
  var _0x192241 = ['2487948PEzVXh', '161ICSNVk', 'log', '200726MvwilE', '148578vfveFq', '2602326JsOzwT', '39964770ONqWIc', '7939744VXQlzK', 'readline', 'stdout', 'createInterface', 'join', 'close', 'stdin', 'push', 'setEncoding', 'line', '4850340iwCNYf', '3MuIAyN', 'utf8', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x192241;
  };
  return __STRING_ARRAY__();
}
