var a0_0x4ce736 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4ab313 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x4ab313(0x170)) / 0x1 * (-parseInt(_0x4ab313(0x181)) / 0x2) + -parseInt(_0x4ab313(0x178)) / 0x3 + -parseInt(_0x4ab313(0x17b)) / 0x4 * (parseInt(_0x4ab313(0x174)) / 0x5) + -parseInt(_0x4ab313(0x16e)) / 0x6 * (-parseInt(_0x4ab313(0x17e)) / 0x7) + parseInt(_0x4ab313(0x179)) / 0x8 + parseInt(_0x4ab313(0x171)) / 0x9 + -parseInt(_0x4ab313(0x17f)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf2d6a);
function move(yx) {
  var arr = [];
  for (var y = 0x0; y < 0x8; y++) {
    arr[y] = [];
  }
  for (var y = 0x0; y < 0x8; y++) {
    for (var x = 0x0; x < 0x8; x++) {
      arr[y][x] = yx[0x7 - x][y];
    }
  }
  return arr;
}
var input = require('fs')[a0_0x4ce736(0x173)](a0_0x4ce736(0x17a), a0_0x4ce736(0x175));
var Arr = input['trim']()[a0_0x4ce736(0x177)]('\x0a');
function __STRING_ARRAY__() {
  var _0x1c9d19 = ['replace', 'readFileSync', '1598225OZIBWb', 'utf8', 'log', 'split', '3848958XvNGwl', '10948960mRwkwB', '/dev/stdin', '16OoEseG', '270\x0a', 'push', '35uZMXmO', '10384850ByqZjF', 'join', '38914SAdBjo', '560754FylGlQ', '90\x0a', '62XgEuxv', '13972212kHzNlu'];
  __STRING_ARRAY__ = function () {
    return _0x1c9d19;
  };
  return __STRING_ARRAY__();
}
var yx = [];
for (var i = 0x0; i < 0x8; i++) {
  yx[a0_0x4ce736(0x17d)](Arr[i][a0_0x4ce736(0x177)](''));
}
yx = move(yx);
console[a0_0x4ce736(0x176)](a0_0x4ce736(0x16f) + yx[a0_0x4ce736(0x180)]('\x0a')[a0_0x4ce736(0x172)](/\,/g, ''));
yx = move(yx);
console[a0_0x4ce736(0x176)]('180\x0a' + yx[a0_0x4ce736(0x180)]('\x0a')[a0_0x4ce736(0x172)](/\,/g, ''));
function __DECODE_0__(imayEb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x16e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(imayEb, key);
}
yx = move(yx);
console[a0_0x4ce736(0x176)](a0_0x4ce736(0x17c) + yx[a0_0x4ce736(0x180)]('\x0a')[a0_0x4ce736(0x172)](/\,/g, ''));
