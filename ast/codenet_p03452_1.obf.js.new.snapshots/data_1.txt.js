var a0_0x4df143 = __DECODE_0__;
function __STRING_ARRAY__() {
  var _0x4f8799 = ['2624601Pyjssq', '1442326zVkzUO', 'length', 'split', 'Yes', '481854FwbiIG', '55mCFrmZ', '8qVcEGF', 'log', '5759047XcqLal', '1yhvIME', '110EAFjpA', 'utf8', '4884752ghRPvz', 'findIndex', '/dev/stdin', '11069577TSJsbp', 'fill', 'map', 'readFileSync', '1223550WqJmAP', 'splice'];
  __STRING_ARRAY__ = function () {
    return _0x4f8799;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(zTZQau, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x6e;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(zTZQau, key);
}
(function (stringArrayFunction, comparisonValue) {
  var _0xe954d6 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0xe954d6(0x75)) / 0x1 * (-parseInt(_0xe954d6(0x82)) / 0x2) + parseInt(_0xe954d6(0x81)) / 0x3 + parseInt(_0xe954d6(0x78)) / 0x4 + parseInt(_0xe954d6(0x71)) / 0x5 * (parseInt(_0xe954d6(0x70)) / 0x6) + parseInt(_0xe954d6(0x74)) / 0x7 * (parseInt(_0xe954d6(0x72)) / 0x8) + -parseInt(_0xe954d6(0x7b)) / 0x9 + -parseInt(_0xe954d6(0x7f)) / 0xa * (parseInt(_0xe954d6(0x76)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x99335);
function Main(input) {
  var _0xbd8077 = __DECODE_0__;
  input = input['split']('\x0a');
  var M = input[0x0][_0xbd8077(0x6e)]('\x20')[_0xbd8077(0x7d)](a => parseInt(a));
  var N = M[0x0];
  M = M[0x1];
  var L = [];
  for (var i = 0x0; i < M; i++) {
    L[i] = input[i + 0x1][_0xbd8077(0x6e)]('\x20')['map'](a => parseInt(a));
  }
  var anc = new Array(N + 0x1)[_0xbd8077(0x7c)](0x0);
  var x = new Array(N + 0x1)[_0xbd8077(0x7c)](0x0);
  anc[0x0] = anc[0x1] = 0x1;
  var i;
  var j;
  var low = 0x1;
  var ans = _0xbd8077(0x6f);
  top: while (L[_0xbd8077(0x83)]) {
    i = j = L['length'];
    while (i--) {
      if (anc[L[i][0x0]] && anc[L[i][0x1]]) {
        if (x[L[i][0x1]] - x[L[i][0x0]] !== L[i][0x2]) {
          ans = 'No';
          break top;
        } else {
          L[_0xbd8077(0x80)](i, 0x1);
          continue;
        }
      }
      if (anc[L[i][0x0]]) {
        anc[L[i][0x1]] = 0x1;
        x[L[i][0x1]] = x[L[i][0x0]] + L[i][0x2];
        L[_0xbd8077(0x80)](i, 0x1);
      } else {
        if (anc[L[i][0x1]]) {
          anc[L[i][0x0]] = 0x1;
          x[L[i][0x0]] = x[L[i][0x1]] - L[i][0x2];
          L['splice'](i, 0x1);
        }
      }
    }
    if (j === L['length']) {
      i = anc[_0xbd8077(0x79)](a => a === 0x0);
      anc[i] = 0x1;
    }
  }
  console[_0xbd8077(0x73)](ans);
}
Main(require('fs')[a0_0x4df143(0x7e)](a0_0x4df143(0x7a), a0_0x4df143(0x77)));
