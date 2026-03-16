var a0_0x2f85e0 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x29edba = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x29edba(0x1d3)) / 0x1 + parseInt(_0x29edba(0x1ca)) / 0x2 + -parseInt(_0x29edba(0x1c6)) / 0x3 + parseInt(_0x29edba(0x1c9)) / 0x4 + -parseInt(_0x29edba(0x1c8)) / 0x5 + parseInt(_0x29edba(0x1c7)) / 0x6 * (-parseInt(_0x29edba(0x1d0)) / 0x7) + parseInt(_0x29edba(0x1cd)) / 0x8 * (parseInt(_0x29edba(0x1d5)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x253e4);
function __DECODE_0__(IUfCak, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(IUfCak, key);
}
function __STRING_ARRAY__() {
  var _0x2e035c = ['/dev/stdin', 'utf8', '7tXxYXp', 'log', 'split', '33474igXLpZ', 'sort', '2291202TUckBg', 'push', '4002rELGZk', '830286cXLVAA', '1125040fqVDFI', '656056auliXX', '264306YgDYsA', 'trim', 'shift', '8UGbBmO'];
  __STRING_ARRAY__ = function () {
    return _0x2e035c;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')['readFileSync'](a0_0x2f85e0(0x1ce), a0_0x2f85e0(0x1cf));
var Arr = input[a0_0x2f85e0(0x1cb)]()[a0_0x2f85e0(0x1d2)]('\x0a');
while (!![]) {
  var n = Arr[a0_0x2f85e0(0x1cc)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var team = [];
  for (var i = 0x0; i < n; i++) {
    var arr = Arr['shift']()[a0_0x2f85e0(0x1d2)]('\x20');
    var name = arr[a0_0x2f85e0(0x1cc)]();
    var scoreA = 0x0;
    var scoreB = 0x0;
    for (var j = 0x0; j < n - 0x1; j++) {
      if (arr[j] - 0x0 === 0x0) {
        scoreA++;
      }
      if (arr[j] - 0x0 === 0x1) {
        scoreB++;
      }
    }
    team[a0_0x2f85e0(0x1c5)]([name, scoreA * 0x64 + (0xa - scoreB) + (0xa - j) * 0.01]);
  }
  team[a0_0x2f85e0(0x1d4)](function (a, b) {
    return b[0x1] - a[0x1];
  });
  team['forEach'](function (v) {
    var _0x3cd0e5 = a0_0x2f85e0;
    console[_0x3cd0e5(0x1d1)](v[0x0]);
  });
}
