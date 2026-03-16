function __STRING_ARRAY__() {
  var _0x403361 = ['split', '3145842iNlRJF', 'fill', '532710oXPoZD', 'log', '8jQItdX', '1622104sAbMao', 'length', '1730550VYOVXu', '469642OkXMid', '141204GiehLn', '9tdGTQk', '450933oPTMGn', '9VanfkH', '/dev/stdin', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x403361;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x11a)) / 0x1 + parseInt(__DECODE_0__(0x119)) / 0x2 * (parseInt(__DECODE_0__(0x11d)) / 0x3) + parseInt(__DECODE_0__(0x116)) / 0x4 + -parseInt(__DECODE_0__(0x118)) / 0x5 + -parseInt(__DECODE_0__(0x111)) / 0x6 + parseInt(__DECODE_0__(0x11c)) / 0x7 * (parseInt(__DECODE_0__(0x115)) / 0x8) + -parseInt(__DECODE_0__(0x11b)) / 0x9 * (parseInt(__DECODE_0__(0x113)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5faf4);
function __DECODE_0__(BbAsls, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x10e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BbAsls, key);
}
function Main(input) {
  input = input['split']('\x0a');
  tmp1 = input[0x0][__DECODE_0__(0x110)]('\x20');
  var n = parseInt(tmp1[0x0]);
  var a = parseInt(tmp1[0x1]);
  tmp = input[0x1][__DECODE_0__(0x110)]('\x20');
  x = new Array(n);
  var sum2 = 0x0;
  for (i = 0x0; i < tmp[__DECODE_0__(0x117)]; i++) {
    x[i] = parseInt(tmp[i]);
  }
  var s = 0x0;
  for (i = 0x0; i < n; i++) {
    sum2 = sum2 + x[i];
  }
  var b = new Array(sum2 + 0x1);
  for (var y = 0x0; y < sum2 + 0x1; y++) {
    b[y] = new Array(n + 0x1)[__DECODE_0__(0x112)](0x0);
  }
  b[0x0][0x0] = 0x1;
  for (j = 0x0; j < n; j++) {
    for (i = sum2; i >= 0x0; i--) {
      for (k = 0x0; k < n + 0x1; k++) {
        if (b[i][k] >= 0x1) {
          b[i + x[j]][k + 0x1] = b[i + x[j]][k + 0x1] + b[i][k];
        }
      }
    }
  }
  for (i = 0x1; i <= n && i * a <= sum2; i++) {
    s = s + b[i * a][i];
  }
  console[__DECODE_0__(0x114)]('%s', s);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x10e), __DECODE_0__(0x10f)));
