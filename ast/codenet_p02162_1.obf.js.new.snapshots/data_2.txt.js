function __STRING_ARRAY__() {
  var _0xc4d5e6 = ['142456ryIHLw', 'map', 'Alice', '827680lbEpjq', '23078tqUFtn', 'readFileSync', 'log', '4863eSvQhh', '668ViQHRs', 'trim', '/dev/stdin', 'utf8', '108XDGUsb', 'Bob', '1420111ZaGcjt', '8RGIFFu', '2669052kdcHuR', 'split', 'Draw', '2121485xffuhy'];
  __STRING_ARRAY__ = function () {
    return _0xc4d5e6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1b2)) / 0x1 * (parseInt(__DECODE_0__(0x1bb)) / 0x2) + parseInt(__DECODE_0__(0x1be)) / 0x3 * (parseInt(__DECODE_0__(0x1bf)) / 0x4) + parseInt(__DECODE_0__(0x1b6)) / 0x5 + -parseInt(__DECODE_0__(0x1b3)) / 0x6 + parseInt(__DECODE_0__(0x1c5)) / 0x7 + -parseInt(__DECODE_0__(0x1b7)) / 0x8 * (parseInt(__DECODE_0__(0x1c3)) / 0x9) + parseInt(__DECODE_0__(0x1ba)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x381af);
var input = require('fs')[__DECODE_0__(0x1bc)](__DECODE_0__(0x1c1), __DECODE_0__(0x1c2));
function __DECODE_0__(LTkwgN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b2;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LTkwgN, key);
}
var [t, tt, r, rr] = input[__DECODE_0__(0x1c0)]()[__DECODE_0__(0x1b4)]('\x20')[__DECODE_0__(0x1b8)](Number);
if (r == -0x1 || rr == -0x1) {
  if (t > tt) {
    console[__DECODE_0__(0x1bd)](__DECODE_0__(0x1c4));
  } else {
    if (t < tt) {
      console[__DECODE_0__(0x1bd)](__DECODE_0__(0x1b9));
    } else {
      if (t == tt) {
        console[__DECODE_0__(0x1bd)](__DECODE_0__(0x1b5));
      }
    }
  }
} else {
  if (r > rr) {
    console['log'](__DECODE_0__(0x1b9));
  } else {
    if (r < rr) {
      console[__DECODE_0__(0x1bd)](__DECODE_0__(0x1c4));
    } else {
      if (r == rr) {
        console[__DECODE_0__(0x1bd)]('Draw');
      }
    }
  }
}
