(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x18d)) / 0x1 + -parseInt(__DECODE_0__(0x17c)) / 0x2 + parseInt(__DECODE_0__(0x18c)) / 0x3 + parseInt(__DECODE_0__(0x184)) / 0x4 + -parseInt(__DECODE_0__(0x17d)) / 0x5 * (-parseInt(__DECODE_0__(0x185)) / 0x6) + -parseInt(__DECODE_0__(0x189)) / 0x7 * (-parseInt(__DECODE_0__(0x18a)) / 0x8) + -parseInt(__DECODE_0__(0x17f)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x52bc0);
process[__DECODE_0__(0x188)][__DECODE_0__(0x180)]();
process[__DECODE_0__(0x188)][__DECODE_0__(0x17b)](__DECODE_0__(0x186));
var input_stdin = '';
var input_stdin_array = '';
var input_currentline = 0x0;
process[__DECODE_0__(0x188)]['on'](__DECODE_0__(0x181), function (data) {
  input_stdin += data;
});
process['on']('SIGINT', function () {
  input_stdin_array = input_stdin[__DECODE_0__(0x187)]('\x0a');
  main();
  process[__DECODE_0__(0x18b)]();
});
process['stdin']['on'](__DECODE_0__(0x182), function () {
  input_stdin_array = input_stdin[__DECODE_0__(0x187)]('\x0a');
  main();
});
function __STRING_ARRAY__() {
  var _0x463915 = ['3728qhyaMJ', 'exit', '1699440trPHxw', '40462wqPYDN', 'setEncoding', '186750bAleRr', '18855taCqnT', 'push', '3977649gMERgl', 'resume', 'data', 'end', 'log', '1016732ficQJF', '6eqrMVY', 'ascii', 'split', 'stdin', '140STEcCa'];
  __STRING_ARRAY__ = function () {
    return _0x463915;
  };
  return __STRING_ARRAY__();
}
function readLine() {
  return input_stdin_array[input_currentline++];
}
function __DECODE_0__(HCqHPw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x17b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HCqHPw, key);
}
function main() {
  var N = parseInt(readLine());
  var s = readLine()['split']('\x20');
  var T = [0x0];
  var sum = 0x0;
  for (var i = 0x1; i <= N; i++) {
    T[__DECODE_0__(0x17e)](parseInt(s[i - 0x1]));
    sum += T[i];
  }
  var M = parseInt(readLine());
  for (var k = 0x0; k < M; k++) {
    s = readLine()[__DECODE_0__(0x187)]('\x20');
    var i = parseInt(s[0x0]);
    var x = parseInt(s[0x1]);
    console[__DECODE_0__(0x183)](sum - T[i] + x);
  }
}
