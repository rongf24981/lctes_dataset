(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xb3)) / 0x1 + parseInt(__DECODE_0__(0xac)) / 0x2 * (-parseInt(__DECODE_0__(0xb0)) / 0x3) + -parseInt(__DECODE_0__(0xb8)) / 0x4 + -parseInt(__DECODE_0__(0xa8)) / 0x5 + parseInt(__DECODE_0__(0xb2)) / 0x6 * (parseInt(__DECODE_0__(0xb5)) / 0x7) + -parseInt(__DECODE_0__(0xa4)) / 0x8 * (-parseInt(__DECODE_0__(0xb6)) / 0x9) + -parseInt(__DECODE_0__(0xaf)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x54a55);
const BKRT = '\x0a';
const SPAC = '\x20';
const NOSP = '';
function Main(input) {
  input = [][__DECODE_0__(0xae)](...input['split'](BKRT)[__DECODE_0__(0xb4)](a => a[__DECODE_0__(0xa0)](SPAC)));
  const strShift = () => input[__DECODE_0__(0xa9)]();
  const intShift = () => ~~input[__DECODE_0__(0xa9)]();
  var N = intShift();
  var M = intShift();
  var X = intShift();
  var right = 0x0;
  var left = 0x0;
  for (var i = 0x0; i < M; i++) {
    var a = intShift();
    if (a < X) {
      left++;
    } else {
      right++;
    }
  }
  return ~~Math[__DECODE_0__(0xa6)](left, right);
}
function __DECODE_0__(HewRNP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x9f;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(HewRNP, key);
}
function __STRING_ARRAY__() {
  var _0x2809c = ['5102460mElWfA', '28869LzGFfD', '\x0a5\x203\x203\x0a1\x202\x204\x0a', '343890PgLSbE', '639132HtlLNy', 'map', '35RKYcim', '59715HSQmGJ', '/dev/stdin', '1134376eGOkRx', 'undefined', 'split', 'slice', 'append', 'appendTo', '672ZOzWXm', 'utf8', 'min', 'message', '1375685cuneeb', 'shift', 'readFileSync', '<form>', '14ePhgaO', 'log', 'concat'];
  __STRING_ARRAY__ = function () {
    return _0x2809c;
  };
  return __STRING_ARRAY__();
}
((b, c, d) => __DECODE_0__(0x9f) != typeof require ? console[__DECODE_0__(0xad)](Main(require('fs')[__DECODE_0__(0xaa)](__DECODE_0__(0xb7), __DECODE_0__(0xa5)))) : [b = b[__DECODE_0__(0xa0)]('\x0a')[__DECODE_0__(0xa1)](0x1, -0x1)['join']('\x0a'), c = function () {
  try {
    return Main(b);
  } catch (f) {
    return f['stack'] || f[__DECODE_0__(0xa7)];
  }
}(), d = typeof c, 'string' == d || (c = JSON['stringify'](c)), $(__DECODE_0__(0xab))[__DECODE_0__(0xa2)]([[0xa, b], 0x0, [0x1, d], 0x0, [0xa, c]][__DECODE_0__(0xb4)](f => $(f ? '<textarea>' : '<br>', f && {
  'rows': f[0x0],
  'cols': 0x28,
  'text': f[0x1]
})))[__DECODE_0__(0xa3)]('body')])(__DECODE_0__(0xb1));
