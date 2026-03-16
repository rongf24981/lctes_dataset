function __DECODE_0__(qnwFRt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xbd;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(qnwFRt, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xc7)) / 0x1 * (-parseInt(__DECODE_0__(0xbe)) / 0x2) + parseInt(__DECODE_0__(0xd0)) / 0x3 + parseInt(__DECODE_0__(0xc2)) / 0x4 + -parseInt(__DECODE_0__(0xcd)) / 0x5 + -parseInt(__DECODE_0__(0xcc)) / 0x6 + -parseInt(__DECODE_0__(0xc6)) / 0x7 * (-parseInt(__DECODE_0__(0xbd)) / 0x8) + parseInt(__DECODE_0__(0xca)) / 0x9 * (-parseInt(__DECODE_0__(0xbf)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2f1e3);
function Main(s) {
  s = s['split']('\x0a');
  var n = s[0x0]['split']('\x20')[__DECODE_0__(0xcb)](a => +a);
  var m = n[0x1];
  n = n[0x0];
  var b = Array(n)[__DECODE_0__(0xc8)](0x0)['map'](a => Array(n)['fill'](0x0));
  for (var i = 0x0; i < m; i++) {
    var a = s[i + 0x1][__DECODE_0__(0xc3)]('\x20')[__DECODE_0__(0xcb)](a => a - 0x1);
    b[a[0x0]][a[0x1]] = b[a[0x1]][a[0x0]] = 0x1;
  }
  var k = 0x218711a00;
  var x;
  for (i = 0x0; i < n; i++) {
    var t = b[i][__DECODE_0__(0xcf)]((a, b) => a + b);
    if (k > t) {
      k = t;
      x = i;
    }
  }
  var y = [];
  var z = [];
  for (i = 0x0; i < n; i++) {
    if (i === x) {
      continue;
    }
    if (b[x][i]) {
      y[__DECODE_0__(0xc1)](i);
    } else {
      z[__DECODE_0__(0xc1)](i);
    }
  }
  for (i = 0x0; i < y[__DECODE_0__(0xc9)]; i++) {
    for (var j = i + 0x1; j < y[__DECODE_0__(0xc9)]; j++) {
      if (!b[y[i]][y[j]]) {
        console[__DECODE_0__(0xc4)](-0x1);
        return;
      }
    }
  }
  for (i = 0x0; i < z[__DECODE_0__(0xc9)]; i++) {
    for (j = i + 0x1; j < z[__DECODE_0__(0xc9)]; j++) {
      if (!b[z[i]][z[j]]) {
        console[__DECODE_0__(0xc4)](-0x1);
        return;
      }
    }
  }
  console[__DECODE_0__(0xc4)](k * (k + 0x1) / 0x2 + (n - k - 0x1) * (n - k - 0x2) / 0x2);
}
Main(require('fs')[__DECODE_0__(0xc0)](__DECODE_0__(0xc5), __DECODE_0__(0xce)));
function __STRING_ARRAY__() {
  var _0x7431a7 = ['utf8', 'reduce', '932580jgXxVX', '8iVpoNP', '2AsNHjF', '4310WNZQBM', 'readFileSync', 'push', '1103200lKPKmz', 'split', 'log', '/dev/stdin', '795599JnYBhL', '17762ojQjNW', 'fill', 'length', '3573BSdtko', 'map', '1822104hEfRUe', '73845canuKE'];
  __STRING_ARRAY__ = function () {
    return _0x7431a7;
  };
  return __STRING_ARRAY__();
}
