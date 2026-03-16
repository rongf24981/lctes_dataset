(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1a0)) / 0x1 * (-parseInt(__DECODE_0__(0x1a6)) / 0x2) + parseInt(__DECODE_0__(0x1a1)) / 0x3 * (parseInt(__DECODE_0__(0x1b0)) / 0x4) + -parseInt(__DECODE_0__(0x1aa)) / 0x5 + -parseInt(__DECODE_0__(0x1a4)) / 0x6 + -parseInt(__DECODE_0__(0x1ab)) / 0x7 + parseInt(__DECODE_0__(0x1a2)) / 0x8 * (-parseInt(__DECODE_0__(0x1a3)) / 0x9) + parseInt(__DECODE_0__(0x1ae)) / 0xa * (parseInt(__DECODE_0__(0x1ad)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xf201c);
var lines = require('fs')[__DECODE_0__(0x1a5)](__DECODE_0__(0x1a7), __DECODE_0__(0x1ac))[__DECODE_0__(0x1a9)]('\x0a');
var n = lines[0x0] | 0x0;
function __DECODE_0__(aFYrnV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(aFYrnV, key);
}
var s = lines[__DECODE_0__(0x1af)](0x1);
function good(a, b) {
  for (var i = 0x0; i < n; ++i) {
    for (var j = 0x0; j < n; ++j) {
      if (s[(i + a) % n][(j + b) % n] !== s[(j + a) % n][(i + b) % n]) {
        return 0x0;
      }
    }
  }
  return 0x1;
}
var ans = 0x0;
for (var a = 0x0; a < n; ++a) {
  for (var b = 0x0; b < n; ++b) {
    ans += good(a, b);
  }
}
function __STRING_ARRAY__() {
  var _0x361c44 = ['/dev/stdin', 'log', 'split', '1772705yDNRzf', '10076283ZOagkG', 'utf8', '169367XaMaNi', '4490ObczGC', 'slice', '444GSYkDR', '19777hdtIUG', '26511gjLCBI', '8GaAoNe', '15686127cWagGj', '8685708wnytrC', 'readFileSync', '194xiApMa'];
  __STRING_ARRAY__ = function () {
    return _0x361c44;
  };
  return __STRING_ARRAY__();
}
console[__DECODE_0__(0x1a8)](ans);
