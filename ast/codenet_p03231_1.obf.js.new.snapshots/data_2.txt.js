function __STRING_ARRAY__() {
  var _0x1071ae = ['1020636iZivzY', '1190IDlbni', '728OCzLpt', '1115516FjaRoZ', '12048oIquMy', 'length', 'split', 'utf8', '15778BXeXkI', '63375JYWXvc', '1687499zawPeq', 'readFileSync', '1490172EvHpCx', '6mqwnzN', '72ElwhEI', '10wQWfBH', '1CJhcyL', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x1071ae;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x158)) / 0x1 * (-parseInt(__DECODE_0__(0x154)) / 0x2) + parseInt(__DECODE_0__(0x155)) / 0x3 * (parseInt(__DECODE_0__(0x15d)) / 0x4) + -parseInt(__DECODE_0__(0x15b)) / 0x5 * (parseInt(__DECODE_0__(0x15e)) / 0x6) + -parseInt(__DECODE_0__(0x150)) / 0x7 * (parseInt(__DECODE_0__(0x15c)) / 0x8) + -parseInt(__DECODE_0__(0x15a)) / 0x9 * (parseInt(__DECODE_0__(0x157)) / 0xa) + parseInt(__DECODE_0__(0x152)) / 0xb + parseInt(__DECODE_0__(0x156)) / 0xc * (-parseInt(__DECODE_0__(0x151)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x99f35);
function toNum(str) {
  return parseInt(str, 0xa);
}
function gcd(a, b) {
  if (a % b === 0x0) {
    return b;
  } else {
    return gcd(b, a % b);
  }
}
function lcm(a, b) {
  return a * b / gcd(a, b);
}
function Main(input) {
  var N = toNum(input[__DECODE_0__(0x160)]('\x0a')[0x0]['split']('\x20')[0x0]);
  var M = toNum(input[__DECODE_0__(0x160)]('\x0a')[0x0]['split']('\x20')[0x1]);
  var S = input[__DECODE_0__(0x160)]('\x0a')[0x1];
  var T = input[__DECODE_0__(0x160)]('\x0a')[0x2];
  var L = lcm(N, M);
  var flag = !![];
  var X = [];
  for (var i = 0x0; i < L; i++) {
    X['push']('');
  }
  X[0x0] = S[0x0];
  for (var i = 0x1; i < S['length']; i++) {
    X[i * (L / N)] = S[i];
  }
  if (X[0x0] != T[0x0]) {
    console['log']('-1');
  } else {
    for (var i = 0x1; i < T[__DECODE_0__(0x15f)]; i++) {
      if (X[i * (L / M)] != '' && X[i * (L / M)] != T[i]) {
        console[__DECODE_0__(0x159)]('-1');
        flag = ![];
        break;
      }
    }
  }
  if (flag) {
    console[__DECODE_0__(0x159)](L);
  }
}
function __DECODE_0__(ECMBqm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ECMBqm, key);
}
Main(require('fs')[__DECODE_0__(0x153)]('/dev/stdin', __DECODE_0__(0x14f)));
