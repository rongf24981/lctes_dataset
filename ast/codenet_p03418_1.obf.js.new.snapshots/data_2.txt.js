(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d0)) / 0x1 + parseInt(__DECODE_0__(0x1c9)) / 0x2 * (-parseInt(__DECODE_0__(0x1c7)) / 0x3) + parseInt(__DECODE_0__(0x1c6)) / 0x4 + -parseInt(__DECODE_0__(0x1c8)) / 0x5 + parseInt(__DECODE_0__(0x1cc)) / 0x6 * (parseInt(__DECODE_0__(0x1d1)) / 0x7) + -parseInt(__DECODE_0__(0x1cd)) / 0x8 * (parseInt(__DECODE_0__(0x1cb)) / 0x9) + parseInt(__DECODE_0__(0x1ca)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa227f);
function Main(input) {
  var line = input[__DECODE_0__(0x1c4)]('\x0a');
  var tmp = line[0x0][__DECODE_0__(0x1c4)]('\x20');
  var maxint = Number(tmp[0x0]);
  var minrest = Number(tmp[0x1]);
  var ans = 0x0;
  for (var a = minrest || 0x1; a <= maxint; a++) {
    for (var b = minrest || 0x1; b <= maxint; b++) {
      if (a < b) {
        ans++;
      } else {
        if (a % b >= minrest) {
          ans++;
        }
      }
    }
  }
  console[__DECODE_0__(0x1cf)](ans);
}
Main(require('fs')[__DECODE_0__(0x1c3)](__DECODE_0__(0x1c5), __DECODE_0__(0x1ce)));
function __DECODE_0__(VDhcYE, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c3;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VDhcYE, key);
}
function __STRING_ARRAY__() {
  var _0x4e6d9b = ['15uDubmq', '4213230oRCRxB', '20862dCWBVQ', '3396590JiMLMS', '91071OZZkVu', '7564578iAksbz', '192nDAHYB', 'utf8', 'log', '304292AMSmta', '7LARgXg', 'readFileSync', 'split', '/dev/stdin', '2022872lOoKVv'];
  __STRING_ARRAY__ = function () {
    return _0x4e6d9b;
  };
  return __STRING_ARRAY__();
}
