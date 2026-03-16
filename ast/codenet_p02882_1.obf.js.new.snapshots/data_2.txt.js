function __DECODE_0__(ZfTUsB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xae;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZfTUsB, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xbc)) / 0x1 * (-parseInt(__DECODE_0__(0xb4)) / 0x2) + parseInt(__DECODE_0__(0xb5)) / 0x3 * (-parseInt(__DECODE_0__(0xae)) / 0x4) + parseInt(__DECODE_0__(0xbd)) / 0x5 * (-parseInt(__DECODE_0__(0xb7)) / 0x6) + parseInt(__DECODE_0__(0xb1)) / 0x7 * (-parseInt(__DECODE_0__(0xc1)) / 0x8) + -parseInt(__DECODE_0__(0xba)) / 0x9 * (-parseInt(__DECODE_0__(0xaf)) / 0xa) + parseInt(__DECODE_0__(0xbe)) / 0xb + parseInt(__DECODE_0__(0xb8)) / 0xc * (-parseInt(__DECODE_0__(0xb2)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9678f);
inp = require('fs')[__DECODE_0__(0xb0)]('/dev/stdin', 'utf8')[__DECODE_0__(0xb3)]()[__DECODE_0__(0xc0)]('\x0a');
l = inp[__DECODE_0__(0xbf)]()[__DECODE_0__(0xc0)]('\x20');
a = l[__DECODE_0__(0xbf)]() * 0x1;
b = l[__DECODE_0__(0xbf)]() * 0x1;
x = l[__DECODE_0__(0xbf)]() * 0x1;
l = 0x0;
function __STRING_ARRAY__() {
  var _0x5858a3 = ['8jLFSnC', '10ISxIbL', 'readFileSync', '47201phxKmt', '2703480Kiyqwe', 'trim', '410066kxIoyP', '817227DkTWiS', 'toFixed', '42JKovwK', '24TYkEjB', 'log', '10465191Rwrjtx', 'tan', '1raxHjk', '441670dizbvw', '11996116fdaFSw', 'shift', 'split', '312iiQtvC'];
  __STRING_ARRAY__ = function () {
    return _0x5858a3;
  };
  return __STRING_ARRAY__();
}
r = 0x5a;
mid = 0x2d;
c = 0x0;
S = a * a * b;
if (S / 0x2 < x) {
  while (l < r) {
    s = S - a * a * Math[__DECODE_0__(0xbb)](mid / 0xb4 * Math['PI']) / 0x2 * a;
    if (x < s) {
      l = mid;
    } else {
      r = mid;
    }
    mid = (l + r) / 0x2;
    c++;
    if (c > 0xc8) {
      break;
    }
  }
  console[__DECODE_0__(0xb9)](mid[__DECODE_0__(0xb6)](0xa));
} else {
  while (l < r) {
    s = b * b * Math[__DECODE_0__(0xbb)](mid / 0xb4 * Math['PI']) / 0x2 * a;
    if (x < s) {
      r = mid;
    } else {
      l = mid;
    }
    mid = (l + r) / 0x2;
    c++;
    if (c > 0xc8) {
      break;
    }
  }
  console[__DECODE_0__(0xb9)]((0x5a - mid)[__DECODE_0__(0xb6)](0xa));
}
