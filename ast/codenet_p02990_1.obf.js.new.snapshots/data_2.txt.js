(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x10e)) / 0x1 * (parseInt(__DECODE_0__(0x10c)) / 0x2) + parseInt(__DECODE_0__(0x113)) / 0x3 * (parseInt(__DECODE_0__(0x101)) / 0x4) + -parseInt(__DECODE_0__(0x102)) / 0x5 + parseInt(__DECODE_0__(0x111)) / 0x6 + parseInt(__DECODE_0__(0x10f)) / 0x7 * (-parseInt(__DECODE_0__(0x106)) / 0x8) + parseInt(__DECODE_0__(0x107)) / 0x9 * (parseInt(__DECODE_0__(0x109)) / 0xa) + -parseInt(__DECODE_0__(0x10b)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9cddb);
function __DECODE_0__(WGvsFm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xfd;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(WGvsFm, key);
}
function Main(input) {
  input = input['split']('\x0a');
  var N = parseInt(input[0x0][__DECODE_0__(0xff)]('\x20')[0x0]);
  var K = parseInt(input[0x0][__DECODE_0__(0xff)]('\x20')[0x1]);
  var anssub = new Array();
  var mod = Math[__DECODE_0__(0x10a)](0xa, 0x9) + 0x7;
  for (var i = 0x1; i <= K; i++) {
    var a = combination(N - K + 0x1, i) % mod;
    var b = combination(K - 0x1, i - 0x1) % mod;
    var c = a * b % mod;
    anssub[__DECODE_0__(0xfd)](c);
  }
  var ans = anssub['join']('\x0a');
  console['log']('%s', ans);
  return ans;
}
function permutation(n, r) {
  for (var i = 0x0, res = 0x1; i < r; i++) {
    res *= n - i;
  }
  return res;
}
function __STRING_ARRAY__() {
  var _0xa93879 = ['7713343zSkhwP', '92126UaacyY', 'result', '27DkzlXi', '8415547qBKLgF', 'utf8', '855384bkYpZU', 'input', '1271361xCfybW', 'push', 'getElementById', 'split', 'output', '12RYwrCy', '3340610uAlCKa', 'value', '/dev/stdin', 'readFileSync', '8QPYZOf', '263583iurQZN', 'innerHTML', '190WzDhsz', 'pow'];
  __STRING_ARRAY__ = function () {
    return _0xa93879;
  };
  return __STRING_ARRAY__();
}
function combination(n, r) {
  return permutation(n, r) / permutation(r, r);
}
function debug(n) {
  var input = document['getElementById'](__DECODE_0__(0x112) + n)[__DECODE_0__(0x103)];
  var ans = Main(input);
  var result = 'WA';
  if (ans == document[__DECODE_0__(0xfe)](__DECODE_0__(0x100) + n)[__DECODE_0__(0x103)]['split']('\x0a')[0x0]) {
    result = 'AC';
  }
  document[__DECODE_0__(0xfe)](__DECODE_0__(0x10d) + n)[__DECODE_0__(0x108)] = result;
}
Main(require('fs')[__DECODE_0__(0x105)](__DECODE_0__(0x104), __DECODE_0__(0x110)));
