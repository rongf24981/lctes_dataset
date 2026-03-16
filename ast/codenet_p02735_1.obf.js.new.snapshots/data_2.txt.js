(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xc2)) / 0x1 + parseInt(__DECODE_0__(0xc8)) / 0x2 * (parseInt(__DECODE_0__(0xc3)) / 0x3) + parseInt(__DECODE_0__(0xbb)) / 0x4 + parseInt(__DECODE_0__(0xcc)) / 0x5 * (-parseInt(__DECODE_0__(0xc9)) / 0x6) + parseInt(__DECODE_0__(0xc7)) / 0x7 * (-parseInt(__DECODE_0__(0xc0)) / 0x8) + -parseInt(__DECODE_0__(0xc4)) / 0x9 * (-parseInt(__DECODE_0__(0xca)) / 0xa) + -parseInt(__DECODE_0__(0xbe)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1e072);
inp = require('fs')[__DECODE_0__(0xba)]('/dev/stdin', __DECODE_0__(0xcb))[__DECODE_0__(0xc5)]()[__DECODE_0__(0xbc)]('\x0a');
l = inp[__DECODE_0__(0xc1)]()[__DECODE_0__(0xbc)]('\x20');
H = l[__DECODE_0__(0xc1)]() * 0x1;
W = l[__DECODE_0__(0xc1)]() * 0x1;
l = [];
m = [];
for (i = 0x0; i < H; i++) {
  l['push'](inp[__DECODE_0__(0xc1)]()[__DECODE_0__(0xbc)](''));
  m[i] = [];
  for (j = 0x0; j < W; j++) {
    m[i][j] = 0x0;
  }
}
if (l[0x0][0x0] == '#') {
  m[0x0][0x0] = 0x1;
}
r = 0x0;
for (c = 0x1; c < W; c++) {
  m[r][c] = l[r][c - 0x1] == l[r][c] ? m[r][c - 0x1] : m[r][c - 0x1] + 0x1;
}
c = 0x0;
for (r = 0x1; r < H; r++) {
  m[r][c] = l[r - 0x1][c] == l[r][c] ? m[r - 0x1][c] : m[r - 0x1][c] + 0x1;
}
function __STRING_ARRAY__() {
  var _0x417015 = ['log', '265683IurKLN', 'min', '1288344CTflFV', 'shift', '95799iyhUWF', '6UeFPaW', '9jLZcjP', 'trim', 'ceil', '7ACQfqd', '193786JMgLod', '48clEskl', '57520OhQAog', 'utf8', '145360xHcttm', 'readFileSync', '981716YdfdGc', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x417015;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OKwJDM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xba;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OKwJDM, key);
}
for (i = 0x1; i < H; i++) {
  r = i;
  for (c = i; c < W; c++) {
    s = l[r][c - 0x1] == l[r][c] ? m[r][c - 0x1] : m[r][c - 0x1] + 0x1;
    t = l[r - 0x1][c] == l[r][c] ? m[r - 0x1][c] : m[r - 0x1][c] + 0x1;
    m[r][c] = Math[__DECODE_0__(0xbf)](s, t);
  }
  c = i;
  for (r = i; r < H; r++) {
    s = l[r - 0x1][c] == l[r][c] ? m[r - 0x1][c] : m[r - 0x1][c] + 0x1;
    t = l[r][c - 0x1] == l[r][c] ? m[r][c - 0x1] : m[r][c - 0x1] + 0x1;
    m[r][c] = Math[__DECODE_0__(0xbf)](s, t);
  }
}
console[__DECODE_0__(0xbd)](Math[__DECODE_0__(0xc6)](m[H - 0x1][W - 0x1] / 0x2));
