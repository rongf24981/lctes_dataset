function __STRING_ARRAY__() {
  var _0x2c223a = ['4GKDPCg', '/dev/stdin', 'log', '121IhcJup', 'Yes', '52758dNwWqi', '6624527HfxaCC', '4633716EpupbX', '710SmuOUK', '4902042mkyKFt', 'readFileSync', '8tKZAPb', '5pvyLjr', '3439110NoMUmx', '4127763XkKJhg', 'utf8', 'indexOf', '1627993jrgCzc'];
  __STRING_ARRAY__ = function () {
    return _0x2c223a;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1be)) / 0x1 + -parseInt(__DECODE_0__(0x1ba)) / 0x2 + parseInt(__DECODE_0__(0x1bb)) / 0x3 * (parseInt(__DECODE_0__(0x1bf)) / 0x4) + parseInt(__DECODE_0__(0x1b9)) / 0x5 * (-parseInt(__DECODE_0__(0x1c8)) / 0x6) + -parseInt(__DECODE_0__(0x1c5)) / 0x7 * (parseInt(__DECODE_0__(0x1ca)) / 0x8) + parseInt(__DECODE_0__(0x1c4)) / 0x9 * (parseInt(__DECODE_0__(0x1c7)) / 0xa) + parseInt(__DECODE_0__(0x1c2)) / 0xb * (parseInt(__DECODE_0__(0x1c6)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe2c0c);
function main(input) {
  var aa = input[__DECODE_0__(0x1bd)]('a');
  var bb = input[__DECODE_0__(0x1bd)]('b');
  var cc = input[__DECODE_0__(0x1bd)]('c');
  if (aa == -0x1 || bb == -0x1 || cc == -0x1) {
    console['log']('No');
  } else {
    console[__DECODE_0__(0x1c1)](__DECODE_0__(0x1c3));
  }
}
function __DECODE_0__(cGildR, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b9;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cGildR, key);
}
main(require('fs')[__DECODE_0__(0x1c9)](__DECODE_0__(0x1c0), __DECODE_0__(0x1bc)));
