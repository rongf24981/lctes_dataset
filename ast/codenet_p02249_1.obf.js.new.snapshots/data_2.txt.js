(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xc6)) / 0x1 + parseInt(__DECODE_0__(0xb7)) / 0x2 * (parseInt(__DECODE_0__(0xb9)) / 0x3) + parseInt(__DECODE_0__(0xca)) / 0x4 * (-parseInt(__DECODE_0__(0xc7)) / 0x5) + -parseInt(__DECODE_0__(0xc8)) / 0x6 + parseInt(__DECODE_0__(0xc9)) / 0x7 + -parseInt(__DECODE_0__(0xb8)) / 0x8 + parseInt(__DECODE_0__(0xbb)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbf4b2);
config = {
  'input': __DECODE_0__(0xba),
  'newline': '\x0a'
};
line = require('fs')[__DECODE_0__(0xc2)](config[__DECODE_0__(0xc1)], __DECODE_0__(0xbc))[__DECODE_0__(0xbe)](config[__DECODE_0__(0xc5)]);
line[0x0] = line[0x0]['split']('\x20')[__DECODE_0__(0xc3)](Number);
H = line[0x0][0x0];
function __STRING_ARRAY__() {
  var _0x1cfc6f = ['6702912JIHZOP', 'ascii', 'indexOf', 'split', '%d\x20%d', 'slice', 'input', 'readFileSync', 'map', 'hasOwnProperty', 'newline', '1321970FflwvT', '4055hPBBOy', '8682984ahZKst', '1850366XhsCRB', '2204zOSYjL', '891142gpornp', '792672vvksLx', '3sVBpKs', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x1cfc6f;
  };
  return __STRING_ARRAY__();
}
W = line[0x0][0x1];
function __DECODE_0__(OvufkI, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xb7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OvufkI, key);
}
field = line[__DECODE_0__(0xc0)](0x1, 0x1 + H);
line[0x1 + H] = line[0x1 + H][__DECODE_0__(0xbe)]('\x20')[__DECODE_0__(0xc3)](Number);
R = line[0x1 + H][0x0];
C = line[0x1 + H][0x1];
pat = line['slice'](0x1 + H + 0x1, 0x1 + H + 0x1 + R);
mem = new Array(H);
for (i = 0x0; i < H; i++) {
  mem[i] = new Array(R);
  for (j = 0x0; j < R; j++) {
    mem[i][j] = {};
    k = field[i][__DECODE_0__(0xbd)](pat[j]);
    while (k !== -0x1) {
      mem[i][j][k] = !![];
      k = field[i]['indexOf'](pat[j], k + 0x1);
    }
  }
}
for (i = 0x0; i <= H - R; i++) {
  for (j = 0x0; j <= W - C; j++) {
    flag = !![];
    for (k = 0x0; k < R; k++) {
      if (!mem[i + k][k][__DECODE_0__(0xc4)](j)) {
        flag = ![];
        break;
      }
    }
    if (flag) {
      console['log'](__DECODE_0__(0xbf), i, j);
    }
  }
}
