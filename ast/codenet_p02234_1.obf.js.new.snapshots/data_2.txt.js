(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xd9)) / 0x1 + -parseInt(__DECODE_0__(0xe0)) / 0x2 * (parseInt(__DECODE_0__(0xd4)) / 0x3) + -parseInt(__DECODE_0__(0xdc)) / 0x4 * (-parseInt(__DECODE_0__(0xcc)) / 0x5) + parseInt(__DECODE_0__(0xd7)) / 0x6 * (-parseInt(__DECODE_0__(0xd6)) / 0x7) + -parseInt(__DECODE_0__(0xde)) / 0x8 + parseInt(__DECODE_0__(0xcf)) / 0x9 * (parseInt(__DECODE_0__(0xd2)) / 0xa) + parseInt(__DECODE_0__(0xcd)) / 0xb * (parseInt(__DECODE_0__(0xd0)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5f969);
function __DECODE_0__(vmaWdK, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xcb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vmaWdK, key);
}
config = {
  'input': __DECODE_0__(0xd8),
  'newline': '\x0a'
};
M = require('fs')[__DECODE_0__(0xd3)](config[__DECODE_0__(0xdb)], __DECODE_0__(0xce))[__DECODE_0__(0xcb)]()[__DECODE_0__(0xd1)](config[__DECODE_0__(0xdf)]);
M = M[__DECODE_0__(0xda)](function (line) {
  return line[__DECODE_0__(0xd1)]('\x20')[__DECODE_0__(0xda)](Number);
});
function __STRING_ARRAY__() {
  var _0x4d199f = ['input', '842864TSDuDv', 'MAX_VALUE', '4684232XxtyTq', 'newline', '1167506fBZwpO', 'trim', '10dviJdA', '62887fuhaYv', 'ascii', '5683761wrmrJk', '3372swmPwO', 'split', '10IPaedk', 'readFileSync', '3bTjsQP', 'log', '7oMqKKK', '2504490yrmftH', '/dev/stdin', '681212aAcVQc', 'map'];
  __STRING_ARRAY__ = function () {
    return _0x4d199f;
  };
  return __STRING_ARRAY__();
}
n = M[0x0][0x0];
min = {};
for (i = 0x1; i <= n; i++) {
  min[i] = {};
}
for (i = 0x1; i <= n; i++) {
  min[i][i] = 0x0;
}
for (i = 0x1; i < n; i++) {
  j = 0x1;
  k = 0x1 + i;
  for (; k <= n; j++, k++) {
    min[j][k] = Number[__DECODE_0__(0xdd)];
    for (l = j; l < k; l++) {
      min[j][k] = Math['min'](min[j][k], M[j][0x0] * M[l][0x1] * M[k][0x1] + min[j][l] + min[l + 0x1][k]);
    }
  }
}
console[__DECODE_0__(0xd5)](min[0x1][n]);
