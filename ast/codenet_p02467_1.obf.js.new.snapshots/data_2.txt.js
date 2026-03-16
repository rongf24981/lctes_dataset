function __STRING_ARRAY__() {
  var _0x5b0e7f = ['9809268gkYMSN', 'utf8', '1434235ZqnPsA', '/dev/stdin', '2891OhbtsW', '856CPSjWr', 'push', '172siXddS', '23510XgOThV', 'sqrt', 'join', '11nojfcq', '99AcHCeB', 'readFileSync', '33342ZIqSGj', '567288FEYmFr', '83756DUzJsu', 'split', 'trim', '4BOwKLI'];
  __STRING_ARRAY__ = function () {
    return _0x5b0e7f;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1b5)) / 0x1 * (parseInt(__DECODE_0__(0x1b2)) / 0x2) + -parseInt(__DECODE_0__(0x1b0)) / 0x3 * (parseInt(__DECODE_0__(0x1bd)) / 0x4) + parseInt(__DECODE_0__(0x1b8)) / 0x5 + -parseInt(__DECODE_0__(0x1b1)) / 0x6 + -parseInt(__DECODE_0__(0x1ba)) / 0x7 * (-parseInt(__DECODE_0__(0x1bb)) / 0x8) + -parseInt(__DECODE_0__(0x1ae)) / 0x9 * (parseInt(__DECODE_0__(0x1be)) / 0xa) + -parseInt(__DECODE_0__(0x1c1)) / 0xb * (-parseInt(__DECODE_0__(0x1b6)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5d6be);
function __DECODE_0__(jmCvcK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ae;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(jmCvcK, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x1b4)]()[__DECODE_0__(0x1b3)]('\x0a')['map'](function (x) {
    return x[__DECODE_0__(0x1b3)]('\x20');
  });
  var n = parseInt(input[0x0][0x0], 0xa);
  var originalN = n;
  var v_ans = [];
  var start = 0x2;
  whole_loop: while (!![]) {
    for (var i = start; i <= Math[__DECODE_0__(0x1bf)](n); i++) {
      if (n % i === 0x0) {
        v_ans[__DECODE_0__(0x1bc)](i);
        n /= i;
        start = i;
        continue whole_loop;
      }
    }
    v_ans['push'](n);
    break;
  }
  console['log'](originalN['toString']() + ':\x20' + v_ans[__DECODE_0__(0x1c0)]('\x20'));
}
Main(require('fs')[__DECODE_0__(0x1af)](__DECODE_0__(0x1b9), __DECODE_0__(0x1b7)));
