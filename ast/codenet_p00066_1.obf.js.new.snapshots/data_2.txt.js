(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xc5)) / 0x1 * (-parseInt(__DECODE_0__(0xbb)) / 0x2) + -parseInt(__DECODE_0__(0xc1)) / 0x3 * (parseInt(__DECODE_0__(0xc6)) / 0x4) + -parseInt(__DECODE_0__(0xc7)) / 0x5 * (-parseInt(__DECODE_0__(0xca)) / 0x6) + parseInt(__DECODE_0__(0xbd)) / 0x7 + parseInt(__DECODE_0__(0xc0)) / 0x8 * (-parseInt(__DECODE_0__(0xc4)) / 0x9) + parseInt(__DECODE_0__(0xc9)) / 0xa * (parseInt(__DECODE_0__(0xc3)) / 0xb) + parseInt(__DECODE_0__(0xbc)) / 0xc;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xace7f);
var input = require('fs')[__DECODE_0__(0xc8)](__DECODE_0__(0xbf), __DECODE_0__(0xcb));
var Arr = input['trim']()[__DECODE_0__(0xba)]('\x0a');
function __DECODE_0__(JmjJOz, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xba;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(JmjJOz, key);
}
for (var i = 0x0; i < Arr[__DECODE_0__(0xc2)]; i++) {
  var arr = Arr[i]['split']('');
  var a1 = arr[0x0];
  var a2 = arr[0x1];
  var a3 = arr[0x2];
  var a4 = arr[0x3];
  var a5 = arr[0x4];
  var a6 = arr[0x5];
  var a7 = arr[0x6];
  var a8 = arr[0x7];
  var a9 = arr[0x8];
  var d = 0x0;
  for (var j = 0x0; j < 0x2; j++) {
    var s = j == 0x0 ? 'o' : 'x';
    var S = s + s + s;
    if (a1 + a2 + a3 == S) {
      console[__DECODE_0__(0xbe)](s);
      break;
    }
    if (a4 + a5 + a6 == S) {
      console[__DECODE_0__(0xbe)](s);
      break;
    }
    if (a7 + a8 + a9 == S) {
      console[__DECODE_0__(0xbe)](s);
      break;
    }
    if (a1 + a4 + a7 == S) {
      console[__DECODE_0__(0xbe)](s);
      break;
    }
    if (a2 + a5 + a8 == S) {
      console[__DECODE_0__(0xbe)](s);
      break;
    }
    if (a3 + a6 + a9 == S) {
      console[__DECODE_0__(0xbe)](s);
      break;
    }
    if (a1 + a5 + a9 == S) {
      console[__DECODE_0__(0xbe)](s);
      break;
    }
    if (a3 + a5 + a7 == S) {
      console[__DECODE_0__(0xbe)](s);
      break;
    }
    d++;
  }
  if (d == 0x2) {
    console['log']('d');
  }
}
function __STRING_ARRAY__() {
  var _0x5b6718 = ['74691LCoBmj', '9wuPXVX', '4kanyEe', '2005sLAKRz', 'readFileSync', '4221010nAvEQQ', '2214xLJzVg', 'utf8', 'split', '216054RmKCsi', '30698460IVDoZj', '1352015baQqOK', 'log', '/dev/stdin', '1352eaUNHs', '715269CBgtqD', 'length', '11LBaTfz'];
  __STRING_ARRAY__ = function () {
    return _0x5b6718;
  };
  return __STRING_ARRAY__();
}
