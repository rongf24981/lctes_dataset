(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x19d)) / 0x1 + parseInt(__DECODE_0__(0x19e)) / 0x2 + parseInt(__DECODE_0__(0x1a8)) / 0x3 * (-parseInt(__DECODE_0__(0x19c)) / 0x4) + -parseInt(__DECODE_0__(0x1a6)) / 0x5 * (-parseInt(__DECODE_0__(0x1a7)) / 0x6) + parseInt(__DECODE_0__(0x1a3)) / 0x7 + parseInt(__DECODE_0__(0x19b)) / 0x8 * (parseInt(__DECODE_0__(0x1a2)) / 0x9) + -parseInt(__DECODE_0__(0x199)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd5096);
debug = ![];
function __STRING_ARRAY__() {
  var _0x4f8f96 = ['1384sJHgzw', '14444gEnzhT', '586827lMRMtX', '1093924zdfmZH', 'split', 'slice', 'log', '16974IsSpCh', '10954587ySEfPM', 'Yes', 'test', '20oSqAjH', '1856922YYdhdv', '1374AyDAnx', '17365200cJorWM', 'readFileSync'];
  __STRING_ARRAY__ = function () {
    return _0x4f8f96;
  };
  return __STRING_ARRAY__();
}
function log(...args) {
  if (debug) {
    console[__DECODE_0__(0x1a1)](...args);
  }
}
function Main(input) {
  lines = input['split']('\x0a');
  f = lines[0x0][__DECODE_0__(0x19f)]('\x20');
  N = f[0x0];
  A = f[0x1] * 0x1;
  B = f[0x2] * 0x1;
  C = f[0x3] * 0x1;
  D = f[0x4] * 0x1;
  s = lines[0x1];
  log(N, A, B, C, D, s);
  bool = !![];
  if (C > D) {
    end = D;
    if (C - D <= 0x2) {
      end = C;
    }
    s2 = s;
    if (s[D - 0x2] == '#') {
      log(s2, s2[D - 0x1]);
      s2[D - 0x1] = '#';
      s2 = s2[__DECODE_0__(0x1a0)](0x0, D - 0x1) + '#' + s2[__DECODE_0__(0x1a0)](D);
    }
    log(s2);
    str = s2[__DECODE_0__(0x1a0)](B - 0x1, end);
    log(str, bool);
    bool = bool && /\.\.\./[__DECODE_0__(0x1a5)](str);
    log(str, bool);
  }
  str = s[__DECODE_0__(0x1a0)](A - 0x1, C);
  bool = bool && !/##/[__DECODE_0__(0x1a5)](str);
  log(str, bool);
  str = s[__DECODE_0__(0x1a0)](B - 0x1, D);
  bool = bool && !/##/[__DECODE_0__(0x1a5)](str);
  log(str, bool);
  ans = bool ? __DECODE_0__(0x1a4) : 'No';
  console[__DECODE_0__(0x1a1)](ans);
}
function __DECODE_0__(iKTjpH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x199;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iKTjpH, key);
}
Main(require('fs')[__DECODE_0__(0x19a)]('/dev/stdin', 'utf8'));
