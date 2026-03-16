function __DECODE_0__(pEbLzl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x91;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pEbLzl, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x91)) / 0x1 * (-parseInt(__DECODE_0__(0x94)) / 0x2) + -parseInt(__DECODE_0__(0xa0)) / 0x3 + -parseInt(__DECODE_0__(0x9d)) / 0x4 + parseInt(__DECODE_0__(0xa2)) / 0x5 * (-parseInt(__DECODE_0__(0x97)) / 0x6) + parseInt(__DECODE_0__(0xa4)) / 0x7 * (-parseInt(__DECODE_0__(0x92)) / 0x8) + parseInt(__DECODE_0__(0x95)) / 0x9 * (parseInt(__DECODE_0__(0x9e)) / 0xa) + parseInt(__DECODE_0__(0x93)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9f6f9);
var input = require('fs')[__DECODE_0__(0x9f)](__DECODE_0__(0x9c), __DECODE_0__(0x9b));
var arr = input[__DECODE_0__(0xa3)]()[__DECODE_0__(0x9a)]('\x0a');
while (!![]) {
  var a = arr[__DECODE_0__(0xa1)]();
  if (a == '.') {
    break;
  }
  var b = arr['shift']();
  var memo = [];
  var aa = a['replace'](/".*?"/g, function (s) {
    memo['push'](s);
    return '\x22';
  });
  var cnt = 0x0;
  var bb = b['replace'](/".*?"/g, function (s) {
    if (s != memo[__DECODE_0__(0xa1)]()) {
      cnt++;
    }
    return '\x22';
  });
  if (aa == bb && cnt == 0x0) {
    console[__DECODE_0__(0x99)](__DECODE_0__(0x96));
  } else {
    if (aa == bb && cnt == 0x1) {
      console['log']('CLOSE');
    } else {
      if (aa != bb || aa == bb && cnt > 0x1) {
        console[__DECODE_0__(0x99)](__DECODE_0__(0x98));
      }
    }
  }
}
function __STRING_ARRAY__() {
  var _0x671555 = ['2cVGLWU', '162wOmmdr', 'IDENTICAL', '12WGJAti', 'DIFFERENT', 'log', 'split', 'utf8', '/dev/stdin', '4861576KmNVNB', '179210LXvgbh', 'readFileSync', '2360307bQRwCp', 'shift', '1491235UolUYP', 'trim', '1056594KFfICh', '417719lOnEEU', '40QwtxUV', '45117127sHsjWs'];
  __STRING_ARRAY__ = function () {
    return _0x671555;
  };
  return __STRING_ARRAY__();
}
