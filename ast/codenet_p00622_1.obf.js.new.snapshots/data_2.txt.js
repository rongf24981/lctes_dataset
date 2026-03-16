function __STRING_ARRAY__() {
  var _0x52a862 = ['readFileSync', 'hasOwnProperty', '1FiFwiE', '29024FwOklB', 'join', '/dev/stdin', 'split', '6fqXNDg', '7658240IpCssB', 'shift', 'forEach', '4669553AuXKOR', '512314qPFlnH', '1719BbwLSv', '1145405fIyPNo', '2796048omGfFh', 'utf8', '1356788yXPbjz'];
  __STRING_ARRAY__ = function () {
    return _0x52a862;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(BqFjAG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xd6;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BqFjAG, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xe2)) / 0x1 * (-parseInt(__DECODE_0__(0xda)) / 0x2) + -parseInt(__DECODE_0__(0xdd)) / 0x3 + parseInt(__DECODE_0__(0xdf)) / 0x4 + parseInt(__DECODE_0__(0xdc)) / 0x5 + -parseInt(__DECODE_0__(0xe7)) / 0x6 * (-parseInt(__DECODE_0__(0xd9)) / 0x7) + -parseInt(__DECODE_0__(0xe3)) / 0x8 * (-parseInt(__DECODE_0__(0xdb)) / 0x9) + -parseInt(__DECODE_0__(0xd6)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x76cde);
var input = require('fs')[__DECODE_0__(0xe0)](__DECODE_0__(0xe5), __DECODE_0__(0xde));
var arr = input['trim']()[__DECODE_0__(0xe6)]('\x0a');
while (!![]) {
  var a = arr[__DECODE_0__(0xd7)]()['split']('');
  if (a[__DECODE_0__(0xe4)]('') == '-') {
    break;
  }
  var b = arr[__DECODE_0__(0xd7)]()[__DECODE_0__(0xe6)]('');
  var c = arr[__DECODE_0__(0xd7)]()[__DECODE_0__(0xe6)]('');
  var obj = {};
  a[__DECODE_0__(0xd8)](function (v) {
    obj[v] = !![];
  });
  var str = '';
  var m = '';
  c[__DECODE_0__(0xd8)](function (v) {
    if (obj[__DECODE_0__(0xe1)](v)) {
      if (m == '') {
        m = a[__DECODE_0__(0xd7)]();
        m = a[__DECODE_0__(0xd7)]();
      } else {
        m = a[__DECODE_0__(0xd7)]();
      }
    } else {
      while (!![]) {
        if (m == v) {
          m = a['shift']();
          break;
        } else {
          str += m;
          m = b['shift']();
        }
      }
    }
  });
  str += m;
  str += b[__DECODE_0__(0xe4)]('');
  console['log'](str);
}
