function __DECODE_0__(ZJWrGw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1e7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZJWrGw, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1ee)) / 0x1 * (-parseInt(__DECODE_0__(0x1f8)) / 0x2) + parseInt(__DECODE_0__(0x1f2)) / 0x3 + parseInt(__DECODE_0__(0x1f1)) / 0x4 * (-parseInt(__DECODE_0__(0x1fb)) / 0x5) + -parseInt(__DECODE_0__(0x1e8)) / 0x6 + -parseInt(__DECODE_0__(0x1eb)) / 0x7 + parseInt(__DECODE_0__(0x1ec)) / 0x8 + -parseInt(__DECODE_0__(0x1f3)) / 0x9 * (-parseInt(__DECODE_0__(0x1f7)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8c553);
function gcd(arr) {
  var f = (a, b) => b ? f(b, a % b) : a;
  var ans = arr[0x0];
  for (var i = 0x1; i < arr[__DECODE_0__(0x1ed)]; i++) {
    ans = f(ans, arr[i]);
  }
  return ans;
}
function getExcep(c) {
  var min = Math[__DECODE_0__(0x1fa)](...c);
  var max = Math[__DECODE_0__(0x1f6)](...c);
  var mincount = 0x0;
  var maxcount = 0x0;
  var findValue = 0x0;
  for (var i = 0x0; i < c[__DECODE_0__(0x1ed)]; i++) {
    if (c[i] === min) {
      mincount++;
    }
  }
  if (mincount === 0x1) {
    findValue = min;
  } else {
    findValue = max;
  }
  for (var i = 0x0; i < c[__DECODE_0__(0x1ed)]; i++) {
    if (c[i] === findValue) {
      return i;
    }
  }
}
function main(arg) {
  arg = arg['trim']()[__DECODE_0__(0x1e9)]('\x0a');
  var N = Number(arg[0x0]);
  var A = arg[0x1][__DECODE_0__(0x1e9)]('\x20')['map'](Number);
  var c = new Array(A[__DECODE_0__(0x1ed)])[__DECODE_0__(0x1f4)](0x0);
  var result = 0x0;
  for (var i = 0x0; i < A[__DECODE_0__(0x1ed)]; i++) {
    var _A = A[__DECODE_0__(0x1e7)]();
    _A[__DECODE_0__(0x1f0)](i, 0x1);
    var n = gcd(_A);
    c[i] = n;
  }
  var idx = getExcep(c);
  A[idx] = A[idx + 0x1];
  console[__DECODE_0__(0x1f5)](gcd(A));
}
main(require('fs')[__DECODE_0__(0x1ea)](__DECODE_0__(0x1f9), __DECODE_0__(0x1ef)));
function __STRING_ARRAY__() {
  var _0x58bf70 = ['split', 'readFileSync', '1391586TGhJpZ', '1257320fPsXcD', 'length', '103cxkKkF', 'utf8', 'splice', '42396vFTmgC', '671763jirdEr', '20269341NvplKY', 'fill', 'log', 'max', '10OYrEzp', '7538paAnUZ', '/dev/stdin', 'min', '415ArSSYW', 'slice', '3550260oAJRqf'];
  __STRING_ARRAY__ = function () {
    return _0x58bf70;
  };
  return __STRING_ARRAY__();
}
