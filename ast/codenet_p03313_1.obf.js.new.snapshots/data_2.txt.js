(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x178)) / 0x1 * (parseInt(__DECODE_0__(0x173)) / 0x2) + parseInt(__DECODE_0__(0x172)) / 0x3 * (parseInt(__DECODE_0__(0x168)) / 0x4) + parseInt(__DECODE_0__(0x174)) / 0x5 * (parseInt(__DECODE_0__(0x16d)) / 0x6) + parseInt(__DECODE_0__(0x176)) / 0x7 * (-parseInt(__DECODE_0__(0x177)) / 0x8) + parseInt(__DECODE_0__(0x170)) / 0x9 + parseInt(__DECODE_0__(0x16f)) / 0xa * (parseInt(__DECODE_0__(0x171)) / 0xb) + -parseInt(__DECODE_0__(0x167)) / 0xc * (parseInt(__DECODE_0__(0x16c)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa26b6);
function Main(s) {
  s = s[__DECODE_0__(0x16b)]('\x0a');
  var n = +s[0x0];
  var m = 0x1 << n;
  var a = s[0x1][__DECODE_0__(0x16b)]('\x20')[__DECODE_0__(0x16e)](a => +a);
  var b = [a[0x0]];
  var c = [[a[0x0], 0x0]];
  var d = [[-0x1, -0x1]];
  for (var i = 0x1; i < m; i++) {
    f(i);
  }
  console[__DECODE_0__(0x169)](b['slice'](0x1)[__DECODE_0__(0x179)]('\x0a'));
  function f(n) {
    var q = {};
    var s = n;
    var t = 0x0;
    while (s) {
      t++;
      s >>= 0x1;
    }
    for (var i = 0x0; i < t; i++) {
      var u = n & (0x1 << i ^ 0xfffff);
      if (u === n) {
        continue;
      }
      q[c[u][0x1]] = c[u][0x0];
      q[d[u][0x1]] = d[u][0x0];
    }
    s = [a[n], n];
    t = [-0x1, -0x1];
    for (i in q) {
      if (t[0x0] > q[i]) {
        continue;
      }
      if (s[0x0] > q[i]) {
        t = [q[i], i];
      } else {
        t = s;
        s = [q[i], i];
      }
    }
    b[n] = Math[__DECODE_0__(0x175)](b[n - 0x1], t[0x0] + s[0x0]);
    c[n] = t;
    d[n] = s;
  }
}
Main(require('fs')[__DECODE_0__(0x166)]('/dev/stdin', __DECODE_0__(0x16a)));
function __DECODE_0__(LeQiHM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x166;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LeQiHM, key);
}
function __STRING_ARRAY__() {
  var _0x1d2e18 = ['log', 'utf8', 'split', '3627468YPHYgD', '354UkmlQm', 'map', '10zotVNY', '5613093sEsBkx', '220693IrUTPZ', '1444194PFQrfY', '382QOxqrc', '14855ESyack', 'max', '1409695HyqGZi', '16JajwsH', '4627UfzCGT', 'join', 'readFileSync', '48DcYwUF', '4ALsVQU'];
  __STRING_ARRAY__ = function () {
    return _0x1d2e18;
  };
  return __STRING_ARRAY__();
}
