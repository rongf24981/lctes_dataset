(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x129)) / 0x1 + -parseInt(__DECODE_0__(0x130)) / 0x2 + -parseInt(__DECODE_0__(0x12c)) / 0x3 * (parseInt(__DECODE_0__(0x132)) / 0x4) + parseInt(__DECODE_0__(0x12d)) / 0x5 * (-parseInt(__DECODE_0__(0x126)) / 0x6) + -parseInt(__DECODE_0__(0x125)) / 0x7 * (parseInt(__DECODE_0__(0x128)) / 0x8) + -parseInt(__DECODE_0__(0x133)) / 0x9 + -parseInt(__DECODE_0__(0x12b)) / 0xa * (-parseInt(__DECODE_0__(0x12f)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x63416);
var input = require('fs')['readFileSync'](__DECODE_0__(0x127), __DECODE_0__(0x131));
var arr = input[__DECODE_0__(0x123)]()[__DECODE_0__(0x12a)]('\x0a');
function __DECODE_0__(krfcxV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x123;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(krfcxV, key);
}
function __STRING_ARRAY__() {
  var _0x5bc590 = ['7jlgMnC', '82734OdwUQE', '/dev/stdin', '6132032QoRYMD', '288601ZqcdLC', 'split', '26328580akIwrv', '1421643vlKhgQ', '105lFzkcd', 'map', '11KYvhYL', '1579804xFPCLR', 'utf8', '4iZeYjr', '1755477kDVZAF', 'log', 'trim', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x5bc590;
  };
  return __STRING_ARRAY__();
}
while (!![]) {
  var nm = arr['shift']();
  if (nm == '0\x200\x200') {
    break;
  }
  nm = nm[__DECODE_0__(0x12a)]('\x20')[__DECODE_0__(0x12e)](Number);
  var n = nm[0x0];
  var m = nm[0x1];
  var start = nm[0x2];
  var ary = [];
  for (var i = 0x0; i <= n; i++) {
    ary[i] = !![];
  }
  var i = start;
  var j = 0x0;
  ary[start] = ![];
  var cnt = 0x1;
  while (!![]) {
    if (ary[i]) {
      j++;
      if (j == m) {
        ary[i] = ![];
        j = 0x0;
        cnt++;
        if (cnt == ary[__DECODE_0__(0x124)] - 0x2) {
          break;
        }
      }
    }
    i++;
    if (ary['length'] - 0x1 < i) {
      i = 0x1;
    }
  }
  for (var i = 0x1; i <= n; i++) {
    if (ary[i]) {
      console[__DECODE_0__(0x134)](i);
    }
  }
}
