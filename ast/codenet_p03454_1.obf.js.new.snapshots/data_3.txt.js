(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (true) {
    try {
      var expression = -parseInt("483622opWxZu") / 1 + parseInt("6334dkcymG") / 2 * (parseInt("459NtEEHL") / 3) + -parseInt("5383804xUgTfN") / 4 + -parseInt("41915vrcKYQ") / 5 * (parseInt("426ldUofP") / 6) + parseInt("8455279RBXKXR") / 7 + -parseInt("14990856WFvrXP") / 8 + parseInt("32172903oNwZRG") / 9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray.push(stringArray.shift());
      }
    } catch (e) {
      stringArray.push(stringArray.shift());
    }
  }
})(__STRING_ARRAY__, 968592);
function Main(input) {
  const S = parseInt(input);
  const MOD = 1000000007;
  var upr = 0;
  var i = 1;
  do {
    if (S <= Math["pow"](10, i - 1) * 9 * i) {
      upr = i;
    }
    i++;
  } while (!upr);
  i = Math.floor(S / upr);
  var ans = 0;
  var l = Math["pow"](10, upr - 1);
  var r = l + i - 1;
  var flr = i * f(l);
  do {
    if (S % i) {
      ans++;
    } else {
      ans += powmod(10, S / i - 1, MOD) * 9 - i + 1;
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
  console["log"]((ans + MOD) % MOD);
}
function __STRING_ARRAY__() {
  var _0x3e4f90 = ["utf8", "pow", "/dev/stdin", "459NtEEHL", "5383804xUgTfN", "log", "41915vrcKYQ", "8455279RBXKXR", "14990856WFvrXP", "6334dkcymG", "426ldUofP", "32172903oNwZRG", "floor", "483622opWxZu"];
  __STRING_ARRAY__ = function () {
    return _0x3e4f90;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(otukRJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 349;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(otukRJ, key);
}
function powmod(a, b, c) {
  const N = 10000;
  var rt = 1;
  while (b) {
    if (b & 1) {
      rt = (Math["floor"](a / N) * rt % c * N + a % N * rt) % c;
    }
    a = (Math["floor"](a / N) * a % c * N + a % N * a) % c;
    b >>>= 1;
  }
  return rt;
}
function f(n) {
  if (n < 10) {
    return 1;
  }
  if (n < 100) {
    return 2;
  }
  if (n < 1000) {
    return 3;
  }
  if (n < 10000) {
    return 4;
  }
  if (n < 100000) {
    return 5;
  }
  if (n < 1000000) {
    return 6;
  }
  if (n < 10000000) {
    return 7;
  }
  return 8;
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
