(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x77)) / 0x1 * (parseInt(__DECODE_0__(0x87)) / 0x2) + -parseInt(__DECODE_0__(0x85)) / 0x3 * (-parseInt(__DECODE_0__(0x84)) / 0x4) + parseInt(__DECODE_0__(0x78)) / 0x5 + parseInt(__DECODE_0__(0x7c)) / 0x6 + -parseInt(__DECODE_0__(0x7e)) / 0x7 * (parseInt(__DECODE_0__(0x7b)) / 0x8) + -parseInt(__DECODE_0__(0x7a)) / 0x9 + parseInt(__DECODE_0__(0x76)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x22cdf);
var input = require('fs')[__DECODE_0__(0x80)]('/dev/stdin', __DECODE_0__(0x82));
function __STRING_ARRAY__() {
  var _0x434952 = ['76363gvmLuL', 'length', 'readFileSync', 'trim', 'utf8', 'split', '4TkNcYY', '720327KuVeaD', 'shift', '18GGRWIs', '1092410nPIZCh', '8583UqPKdj', '678400cjXTkY', 'log', '2347920TIEJYv', '88mbIHev', '693930EWeEdj', 'TIE'];
  __STRING_ARRAY__ = function () {
    return _0x434952;
  };
  return __STRING_ARRAY__();
}
var arr = input[__DECODE_0__(0x81)]()[__DECODE_0__(0x83)]('\x0a');
var ans = '';
function __DECODE_0__(AuHRXM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x76;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(AuHRXM, key);
}
while (arr[__DECODE_0__(0x86)]() != 0x0) {
  var a = arr[__DECODE_0__(0x86)]()['split']('\x20');
  var obj = {};
  for (var i = 0x0; i < a[__DECODE_0__(0x7f)]; i++) {
    obj[a[i]] = obj[a[i]] + 0x1 || 0x1;
    var s = [];
    for (var k in obj) {
      s['push']([obj[k], k]);
    }
    s['sort'](function (a, b) {
      return b[0x0] - a[0x0];
    });
    if (s[__DECODE_0__(0x7f)] == 0x1) {
      s[0x1] = [0x0];
    }
    if (s[0x0][0x0] > s[0x1][0x0] + a['length'] - (i + 0x1)) {
      ans += s[0x0][0x1] + '\x20' + (i + 0x1) + '\x0a';
      break;
    }
  }
  if (i == a[__DECODE_0__(0x7f)]) {
    ans += __DECODE_0__(0x7d) + '\x0a';
  }
}
console[__DECODE_0__(0x79)](ans['trim']());
