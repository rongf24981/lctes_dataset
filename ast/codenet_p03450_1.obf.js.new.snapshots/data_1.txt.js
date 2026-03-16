function __STRING_ARRAY__() {
  var _0x52980d = ['11dkxIxt', '423YArzaR', 'split', 'Yes', '3164iMKsMp', '36056KLhkca', '29864wOmIHI', 'readFileSync', 'push', '160zxtFOS', '1698kErBvF', '2088890KnBfYV', '323635hiuwPp', '993945IUnqpP', 'utf8', '404318hloLkz', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x52980d;
  };
  return __STRING_ARRAY__();
}
var a0_0x523ea5 = __DECODE_0__;
function __DECODE_0__(EQkiAF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xae;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(EQkiAF, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0x530316 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x530316(0xbb)) / 0x1 + -parseInt(_0x530316(0xbe)) / 0x2 + -parseInt(_0x530316(0xbc)) / 0x3 + parseInt(_0x530316(0xb4)) / 0x4 * (parseInt(_0x530316(0xb8)) / 0x5) + -parseInt(_0x530316(0xb9)) / 0x6 * (-parseInt(_0x530316(0xb3)) / 0x7) + -parseInt(_0x530316(0xb5)) / 0x8 * (-parseInt(_0x530316(0xb0)) / 0x9) + -parseInt(_0x530316(0xba)) / 0xa * (parseInt(_0x530316(0xaf)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2a41f);
function Main(input) {
  var _0x12dce2 = __DECODE_0__;
  var line = input[_0x12dce2(0xb1)]('\x0a');
  var tmp = line[0x0][_0x12dce2(0xb1)]('\x20');
  var N = Number(tmp[0x0]);
  var M = Number(tmp[0x1]);
  var L = [];
  var R = [];
  var D = [];
  for (var i = 0x1; i <= M; i++) {
    var tmp = line[i][_0x12dce2(0xb1)]('\x20');
    L[_0x12dce2(0xb7)](Number(tmp[0x0]));
    R[_0x12dce2(0xb7)](Number(tmp[0x1]));
    D[_0x12dce2(0xb7)](Number(tmp[0x2]));
  }
  var pos = [];
  var ans;
  loopj: for (var j = 0x0; j < M; j++) {
    if (j === 0x0) {
      pos[L[j] - 0x1] = 0x1;
    }
    var rightpos = pos[L[j] - 0x1] + D[j];
    if (!pos[R[j] - 0x1]) {
      pos[R[j] - 0x1] = rightpos;
    } else {
      if (pos[R[j] - 0x1] !== rightpos) {
        ans = 'No';
        break loopj;
      }
    }
  }
  if (!ans) {
    ans = _0x12dce2(0xb2);
  }
  console['log'](ans);
}
Main(require('fs')[a0_0x523ea5(0xb6)](a0_0x523ea5(0xae), a0_0x523ea5(0xbd)));
