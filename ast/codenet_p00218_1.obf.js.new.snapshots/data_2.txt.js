(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x163)) / 0x1 + -parseInt(__DECODE_0__(0x16f)) / 0x2 * (-parseInt(__DECODE_0__(0x160)) / 0x3) + -parseInt(__DECODE_0__(0x167)) / 0x4 * (parseInt(__DECODE_0__(0x16c)) / 0x5) + parseInt(__DECODE_0__(0x170)) / 0x6 * (-parseInt(__DECODE_0__(0x166)) / 0x7) + parseInt(__DECODE_0__(0x161)) / 0x8 + -parseInt(__DECODE_0__(0x168)) / 0x9 * (parseInt(__DECODE_0__(0x162)) / 0xa) + -parseInt(__DECODE_0__(0x164)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb221d);
function __DECODE_0__(FaqKyf, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x15f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FaqKyf, key);
}
process['stdin']['resume']();
process['stdin'][__DECODE_0__(0x16b)](__DECODE_0__(0x165));
function __STRING_ARRAY__() {
  var _0x55439c = ['utf8', '7amPozP', '43748kyqEyn', '327213bnlWgM', 'stdin', 'data', 'setEncoding', '30YRqkwm', 'log', 'split', '14506gJSzZw', '6552402fbcDcb', 'end', 'map', '114mFSPxS', '7157744VmWxdP', '140MGiCSR', '1340804uCZFQs', '1263020UeMRtA'];
  __STRING_ARRAY__ = function () {
    return _0x55439c;
  };
  return __STRING_ARRAY__();
}
var input = '';
process[__DECODE_0__(0x169)]['on'](__DECODE_0__(0x16a), function (chunk) {
  input += chunk;
});
process[__DECODE_0__(0x169)]['on'](__DECODE_0__(0x171), function () {
  var lines = input[__DECODE_0__(0x16e)]('\x0a');
  var l = 0x0;
  while (!![]) {
    var n = Number(lines[l++]);
    if (n === 0x0) {
      break;
    }
    for (var i = 0x0; i < n; i++) {
      var values = lines[l++][__DECODE_0__(0x16e)]('\x20')[__DECODE_0__(0x15f)](Number);
      var pm = values[0x0];
      var pe = values[0x1];
      var pj = values[0x2];
      var ans = 'C';
      if (pm === 0x64 || pe === 0x64 || pj === 0x64) {
        ans = 'A';
      } else {
        if ((pm + pe) / 0x2 >= 0x5a) {
          ans = 'A';
        } else {
          var average = (pm + pe + pj) / 0x3;
          if (average >= 0x50) {
            ans = 'A';
          } else {
            if (average >= 0x46) {
              ans = 'B';
            } else {
              if (average >= 0x32 && (pm >= 0x50 || pe >= 0x50)) {
                ans = 'B';
              }
            }
          }
        }
      }
      console[__DECODE_0__(0x16d)](ans);
    }
  }
});
