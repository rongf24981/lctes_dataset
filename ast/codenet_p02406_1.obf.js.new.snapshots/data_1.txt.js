function __STRING_ARRAY__() {
  var _0x529521 = ['322232dzbajn', '204sNCCVF', 'setEncoding', '114760jbjpRk', '160IjtZdC', 'data', '7wlrHyk', 'push', '461098nbpvZO', 'stdin', 'resume', '275IePfSu', '248592RafGPX', '1698aaxafm', 'join', '645480osgiDv', 'utf-8', '23724OkuGdl'];
  __STRING_ARRAY__ = function () {
    return _0x529521;
  };
  return __STRING_ARRAY__();
}
var a0_0x477b10 = __DECODE_0__;
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
  var _0x5b93da = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x5b93da(0x111)) / 0x1 + -parseInt(_0x5b93da(0x10e)) / 0x2 + parseInt(_0x5b93da(0x11b)) / 0x3 * (parseInt(_0x5b93da(0x10f)) / 0x4) + parseInt(_0x5b93da(0x119)) / 0x5 * (-parseInt(_0x5b93da(0x11f)) / 0x6) + parseInt(_0x5b93da(0x114)) / 0x7 * (parseInt(_0x5b93da(0x11a)) / 0x8) + -parseInt(_0x5b93da(0x11d)) / 0x9 + parseInt(_0x5b93da(0x112)) / 0xa * (parseInt(_0x5b93da(0x116)) / 0xb);
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
var readable = process[a0_0x477b10(0x117)];
readable[a0_0x477b10(0x118)]();
readable[a0_0x477b10(0x110)](a0_0x477b10(0x11e));
readable['on'](a0_0x477b10(0x113), function (chunk) {
  var _0x34bd64 = a0_0x477b10;
  var n = parseInt(chunk);
  var i = 0x1;
  var output = [];
  do {
    var x = i;
    if (0x0 == x % 0x3) {
      output[_0x34bd64(0x115)]('\x20' + i);
    } else {
      do {
        if (0x3 == x % 0xa) {
          output[_0x34bd64(0x115)]('\x20' + i);
          break;
        } else {
          x /= 0xa;
        }
      } while (x);
    }
  } while (++i <= n);
  console['log'](output[_0x34bd64(0x11c)](''));
});
