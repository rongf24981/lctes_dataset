function __DECODE_0__(YivjfS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xff;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YivjfS, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x105)) / 0x1 + parseInt(__DECODE_0__(0x10e)) / 0x2 + -parseInt(__DECODE_0__(0x10a)) / 0x3 + parseInt(__DECODE_0__(0x107)) / 0x4 * (parseInt(__DECODE_0__(0x103)) / 0x5) + parseInt(__DECODE_0__(0xff)) / 0x6 + parseInt(__DECODE_0__(0x106)) / 0x7 + -parseInt(__DECODE_0__(0x101)) / 0x8 * (parseInt(__DECODE_0__(0x10d)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd2c0b);
var input = require('fs')[__DECODE_0__(0x100)](__DECODE_0__(0x10c), __DECODE_0__(0x108));
var Arr = input['replace'](/\n$/, '')[__DECODE_0__(0x109)]('\x0a');
function __STRING_ARRAY__() {
  var _0x471cc0 = ['map', '/dev/stdin', '9YAXlfm', '2926064gLjYpd', '2080182VnYXYo', 'readFileSync', '10973888mPciqT', 'log', '77200oBmmyN', 'push', '391065oPgEwV', '4351438GiaiIb', '200ETrfou', 'utf8', 'split', '1731957KFbQdJ'];
  __STRING_ARRAY__ = function () {
    return _0x471cc0;
  };
  return __STRING_ARRAY__();
}
var n = Arr['shift']() - 0x0;
for (var i = 0x0; i < n; i++) {
  var arr = Arr[i][__DECODE_0__(0x109)]('\x20')[__DECODE_0__(0x10b)](Number);
  var s = arr[0x0];
  var g = arr[0x1];
  var ans = [s];
  var plus = 0x1;
  if (s < g) {
    do {
      s++;
      ans[__DECODE_0__(0x104)](s);
    } while (s != g);
  } else {
    if (s > g && s <= 0x5) {
      do {
        s--;
        ans[__DECODE_0__(0x104)](s);
      } while (s != g);
    } else {
      if (s > g && s >= 0x6 && g >= 0x6) {
        do {
          s++;
          if (s == 0xa) {
            s = 0x5;
          }
          ans['push'](s);
        } while (s != g);
      } else {
        if (s > g && s >= 0x6 && g <= 0x5) {
          do {
            s += plus;
            if (s == 0xa) {
              s = 0x5;
              plus = -0x1;
            }
            ;
            ans['push'](s);
          } while (s != g);
        }
      }
    }
  }
  console[__DECODE_0__(0x102)](ans['join']('\x20'));
}
