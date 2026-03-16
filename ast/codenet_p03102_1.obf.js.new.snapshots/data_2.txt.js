function __DECODE_0__(ucFtMw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6a;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ucFtMw, key);
}
function __STRING_ARRAY__() {
  var _0x2a9ae9 = ['/dev/stdin', '15gAmFTZ', '5552127lBQVTJ', 'log', '42099xiinlx', '1041812HTyAxm', '330547QjyQfm', 'utf8', '248vdDXQY', 'readFileSync', '4067046hzzfxt', '46cTYmUO', 'split', '10zPVgwP', '17206321yJRhAp', '1603344SfgxXm'];
  __STRING_ARRAY__ = function () {
    return _0x2a9ae9;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x6c)) / 0x1 * (-parseInt(__DECODE_0__(0x73)) / 0x2) + parseInt(__DECODE_0__(0x72)) / 0x3 + parseInt(__DECODE_0__(0x6d)) / 0x4 * (-parseInt(__DECODE_0__(0x79)) / 0x5) + -parseInt(__DECODE_0__(0x77)) / 0x6 + -parseInt(__DECODE_0__(0x6e)) / 0x7 * (parseInt(__DECODE_0__(0x70)) / 0x8) + -parseInt(__DECODE_0__(0x6a)) / 0x9 * (parseInt(__DECODE_0__(0x75)) / 0xa) + parseInt(__DECODE_0__(0x76)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb9431);
function Main(input) {
  input = input[__DECODE_0__(0x74)]('\x0a');
  tmp0 = input[0x0][__DECODE_0__(0x74)]('\x20');
  N = Number(tmp0[0x0]);
  M = Number(tmp0[0x1]);
  C = Number(tmp0[0x2]);
  B = input[0x1][__DECODE_0__(0x74)]('\x20');
  var ans = 0x0;
  for (var i = 0x0; i < N; i++) {
    A = input[0x2 + i]['split']('\x20');
    var tmpSum = 0x0;
    for (var j = 0x0; j < M; j++) {
      tmpSum += Number(A[j]) * Number(B[j]);
    }
    if (tmpSum + C > 0x0) {
      ans++;
    }
  }
  console[__DECODE_0__(0x6b)](ans);
}
Main(require('fs')[__DECODE_0__(0x71)](__DECODE_0__(0x78), __DECODE_0__(0x6f)));
