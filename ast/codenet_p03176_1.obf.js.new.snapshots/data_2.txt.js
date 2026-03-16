function __DECODE_0__(NXMdEH, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x70;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(NXMdEH, key);
}
function __STRING_ARRAY__() {
  var _0x21fccc = ['276082aZmqES', 'innerHTML', 'map', 'split', 'utf8', 'input', 'result', 'max', 'log', '801444uxRPoJ', '6ydUlCe', '17507njaGSE', '3981990bkHSdR', '81bSqWcp', 'readFileSync', '1483675nBBcfy', 'fill', 'output', '8iYUQoG', '/dev/stdin', '37980xLKdEb', '11133xnCucw', 'value'];
  __STRING_ARRAY__ = function () {
    return _0x21fccc;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x7f)) / 0x1 + -parseInt(__DECODE_0__(0x71)) / 0x2 + -parseInt(__DECODE_0__(0x75)) / 0x3 * (-parseInt(__DECODE_0__(0x7c)) / 0x4) + -parseInt(__DECODE_0__(0x77)) / 0x5 + parseInt(__DECODE_0__(0x72)) / 0x6 * (parseInt(__DECODE_0__(0x73)) / 0x7) + parseInt(__DECODE_0__(0x7a)) / 0x8 * (-parseInt(__DECODE_0__(0x7d)) / 0x9) + parseInt(__DECODE_0__(0x74)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x393d5);
function Main(input) {
  input = input['split']('\x0a');
  var N = parseInt(input[0x0]);
  var h = input[0x1][__DECODE_0__(0x82)]('\x20')[__DECODE_0__(0x81)](i => parseInt(i));
  var a = input[0x2][__DECODE_0__(0x82)]('\x20')['map'](i => parseInt(i));
  var dp = new Array(N + 0x1)[__DECODE_0__(0x78)](0x0);
  var ans = 0x0;
  for (var i = 0x0; i < N; i++) {
    var max = 0x0;
    tmp = a[i] + dp[h[i]];
    for (var j = h[i]; j < N + 0x1; j++) {
      if (tmp > dp[j]) {
        dp[j] = tmp;
      } else {
        break;
      }
    }
    ans = Math[__DECODE_0__(0x86)](ans, dp[h[i]]);
  }
  console[__DECODE_0__(0x70)]('%s', ans);
  return ans;
}
function debug(n) {
  var input = document['getElementById'](__DECODE_0__(0x84) + n)[__DECODE_0__(0x7e)];
  var ans = Main(input);
  var result = 'WA';
  if (ans == document['getElementById'](__DECODE_0__(0x79) + n)[__DECODE_0__(0x7e)][__DECODE_0__(0x82)]('\x0a')[0x0]) {
    result = 'AC';
  }
  document['getElementById'](__DECODE_0__(0x85) + n)[__DECODE_0__(0x80)] = result;
}
Main(require('fs')[__DECODE_0__(0x76)](__DECODE_0__(0x7b), __DECODE_0__(0x83)));
