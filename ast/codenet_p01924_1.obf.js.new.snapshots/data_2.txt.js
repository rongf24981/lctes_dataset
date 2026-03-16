(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x190)) / 0x1 * (parseInt(__DECODE_0__(0x196)) / 0x2) + parseInt(__DECODE_0__(0x198)) / 0x3 + -parseInt(__DECODE_0__(0x19c)) / 0x4 + -parseInt(__DECODE_0__(0x19f)) / 0x5 + parseInt(__DECODE_0__(0x19e)) / 0x6 + parseInt(__DECODE_0__(0x19a)) / 0x7 * (parseInt(__DECODE_0__(0x197)) / 0x8) + -parseInt(__DECODE_0__(0x18f)) / 0x9 * (-parseInt(__DECODE_0__(0x194)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xafdd8);
var input = require('fs')[__DECODE_0__(0x191)](__DECODE_0__(0x195), __DECODE_0__(0x193));
function __STRING_ARRAY__() {
  var _0x529e3f = ['710WDwFCS', '/dev/stdin', '506tHuQZy', '32YIfSDx', '1709226uRnygq', 'log', '618667vQMnnF', 'split', '4509044AXMvyN', 'map', '2411088xZLApY', '2274020WuggGx', 'slice', '4356XwZEts', '3727HtqECq', 'readFileSync', '0\x200\x200', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x529e3f;
  };
  return __STRING_ARRAY__();
}
var arr = input['trim']()[__DECODE_0__(0x19b)]('\x0a');
function __DECODE_0__(WyOGHP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WyOGHP, key);
}
while (!![]) {
  var tdl = arr[0x0];
  if (tdl == __DECODE_0__(0x192)) {
    break;
  }
  var [t, d, l] = tdl[__DECODE_0__(0x19b)]('\x20')[__DECODE_0__(0x19d)](Number);
  var cnt = 0x0;
  var time = 0x0;
  for (var i = 0x0; i < t; i++) {
    if (time != 0x0) {
      cnt++;
    }
    if (time > 0x0) {
      time--;
    }
    var x = arr[i + 0x1] - 0x0;
    if (x >= l) {
      time = d;
    }
  }
  console[__DECODE_0__(0x199)](cnt);
  arr = arr[__DECODE_0__(0x18e)](t + 0x1);
}
