(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x163)) / 0x1 + parseInt(__DECODE_0__(0x15f)) / 0x2 * (parseInt(__DECODE_0__(0x167)) / 0x3) + -parseInt(__DECODE_0__(0x168)) / 0x4 + -parseInt(__DECODE_0__(0x16a)) / 0x5 * (parseInt(__DECODE_0__(0x160)) / 0x6) + parseInt(__DECODE_0__(0x15d)) / 0x7 + -parseInt(__DECODE_0__(0x15e)) / 0x8 + parseInt(__DECODE_0__(0x161)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xec790);
function Main(input) {
  const S = parseInt(input);
  const MOD = 0x3b9aca00 + 0x7;
  var upr = 0x0;
  var i = 0x1;
  do {
    if (S <= Math[__DECODE_0__(0x165)](0xa, i - 0x1) * 0x9 * i) {
      upr = i;
    }
    i++;
  } while (!upr);
  i = Math['floor'](S / upr);
  var ans = 0x0;
  var l = Math[__DECODE_0__(0x165)](0xa, upr - 0x1);
  var r = l + i - 0x1;
  var flr = i * f(l);
  do {
    if (S % i) {
      ans++;
    } else {
      ans += powmod(0xa, S / i - 0x1, MOD) * 0x9 - i + 0x1;
    }
  } while (--i);
  while (--l) {
    flr += f(l);
    if (flr > S) {
      flr -= f(r--);
    }
    if (flr === S) {
      ans++;
    }
  }
  console[__DECODE_0__(0x169)]((ans + MOD) % MOD);
}
function __STRING_ARRAY__() {
  var _0x3e4f90 = ['utf8', 'pow', '/dev/stdin', '459NtEEHL', '5383804xUgTfN', 'log', '41915vrcKYQ', '8455279RBXKXR', '14990856WFvrXP', '6334dkcymG', '426ldUofP', '32172903oNwZRG', 'floor', '483622opWxZu'];
  __STRING_ARRAY__ = function () {
    return _0x3e4f90;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(otukRJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x15d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(otukRJ, key);
}
function powmod(a, b, c) {
  const N = 0x2710;
  var rt = 0x1;
  while (b) {
    if (b & 0x1) {
      rt = (Math[__DECODE_0__(0x162)](a / N) * rt % c * N + a % N * rt) % c;
    }
    a = (Math[__DECODE_0__(0x162)](a / N) * a % c * N + a % N * a) % c;
    b >>>= 0x1;
  }
  return rt;
}
function f(n) {
  if (n < 0xa) {
    return 0x1;
  }
  if (n < 0x64) {
    return 0x2;
  }
  if (n < 0x3e8) {
    return 0x3;
  }
  if (n < 0x2710) {
    return 0x4;
  }
  if (n < 0x186a0) {
    return 0x5;
  }
  if (n < 0xf4240) {
    return 0x6;
  }
  if (n < 0x989680) {
    return 0x7;
  }
  return 0x8;
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x166), __DECODE_0__(0x164)));
