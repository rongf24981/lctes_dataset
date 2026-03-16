(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1a5)) / 0x1 * (-parseInt(__DECODE_0__(0x1a7)) / 0x2) + parseInt(__DECODE_0__(0x1a1)) / 0x3 + -parseInt(__DECODE_0__(0x19f)) / 0x4 + -parseInt(__DECODE_0__(0x1a4)) / 0x5 + -parseInt(__DECODE_0__(0x1a3)) / 0x6 + parseInt(__DECODE_0__(0x1a2)) / 0x7 * (-parseInt(__DECODE_0__(0x1a0)) / 0x8) + parseInt(__DECODE_0__(0x19e)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x426ad);
function __STRING_ARRAY__() {
  var _0x4e231d = ['1886208uphpxo', '336590OjahXW', '361797VnagOu', '/dev/stdin', '2srEmjQ', 'fill', 'split', 'Snuke', '12431412pYYoVJ', '1739172ArEHFr', '18568DMciWR', '311604axNlBU', '105ntEZhX'];
  __STRING_ARRAY__ = function () {
    return _0x4e231d;
  };
  return __STRING_ARRAY__();
}
function Main(input) {
  input = input[__DECODE_0__(0x19c)]('\x0a');
  var n = parseInt(input[0x0]);
  a = new Array(n - 0x1)['fill'](0x0);
  b = new Array(n - 0x1)[__DECODE_0__(0x1a8)](0x0);
  for (i = 0x0; i < n - 0x1; i++) {
    tmp = input[i + 0x1][__DECODE_0__(0x19c)]('\x20');
    a[i] = parseInt(tmp[0x0]) - 0x1;
    b[i] = parseInt(tmp[0x1]) - 0x1;
  }
  d1 = new Array(n)[__DECODE_0__(0x1a8)](n);
  d1[0x0] = 0x0;
  d2 = new Array(n)['fill'](n);
  d2[n - 0x1] = 0x0;
  function f(x, d) {
    for (i = 0x0; i < n - 0x1; i++) {
      if (a[i] == x && d[b[i]] > d[a[i]]) {
        d[b[i]] = d[a[i]] + 0x1;
        var j = i;
        f(b[i], d);
        i = j;
      }
      if (b[i] == x && d[a[i]] > d[b[i]]) {
        d[a[i]] = d[b[i]] + 0x1;
        var j = i;
        f(a[i], d);
        i = j;
      }
    }
    return d;
  }
  d1 = f(0x0, d1);
  d2 = f(n - 0x1, d2);
  var x = 0x0;
  for (i = 0x0; i < n; i++) {
    if (i != 0x0 && i != n - 0x1) {
      if (d1[i] <= d2[i]) {
        x++;
      }
    }
  }
  var ans = 'Fennec';
  if (x <= n - 0x2 - x) {
    ans = __DECODE_0__(0x19d);
  }
  console['log']('%s', ans);
}
function __DECODE_0__(KxTnDr, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KxTnDr, key);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x1a6), 'utf8'));
