function __STRING_ARRAY__() {
  var _0x529521 = ['322232dzbajn', '204sNCCVF', 'setEncoding', '114760jbjpRk', '160IjtZdC', 'data', '7wlrHyk', 'push', '461098nbpvZO', 'stdin', 'resume', '275IePfSu', '248592RafGPX', '1698aaxafm', 'join', '645480osgiDv', 'utf-8', '23724OkuGdl'];
  __STRING_ARRAY__ = function () {
    return _0x529521;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(oGpKrG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(oGpKrG, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x111)) / 0x1 + -parseInt(__DECODE_0__(0x10e)) / 0x2 + parseInt(__DECODE_0__(0x11b)) / 0x3 * (parseInt(__DECODE_0__(0x10f)) / 0x4) + parseInt(__DECODE_0__(0x119)) / 0x5 * (-parseInt(__DECODE_0__(0x11f)) / 0x6) + parseInt(__DECODE_0__(0x114)) / 0x7 * (parseInt(__DECODE_0__(0x11a)) / 0x8) + -parseInt(__DECODE_0__(0x11d)) / 0x9 + parseInt(__DECODE_0__(0x112)) / 0xa * (parseInt(__DECODE_0__(0x116)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x286ba);
var readable = process[__DECODE_0__(0x117)];
readable[__DECODE_0__(0x118)]();
readable[__DECODE_0__(0x110)](__DECODE_0__(0x11e));
readable['on'](__DECODE_0__(0x113), function (chunk) {
  var n = parseInt(chunk);
  var i = 0x1;
  var output = [];
  do {
    var x = i;
    if (0x0 == x % 0x3) {
      output[__DECODE_0__(0x115)]('\x20' + i);
    } else {
      do {
        if (0x3 == x % 0xa) {
          output[__DECODE_0__(0x115)]('\x20' + i);
          break;
        } else {
          x /= 0xa;
        }
      } while (x);
    }
  } while (++i <= n);
  console['log'](output[__DECODE_0__(0x11c)](''));
});
