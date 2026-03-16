(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1c1)) / 0x1 * (parseInt(__DECODE_0__(0x1ca)) / 0x2) + -parseInt(__DECODE_0__(0x1cc)) / 0x3 * (-parseInt(__DECODE_0__(0x1c7)) / 0x4) + parseInt(__DECODE_0__(0x1c5)) / 0x5 + -parseInt(__DECODE_0__(0x1ce)) / 0x6 + -parseInt(__DECODE_0__(0x1be)) / 0x7 * (-parseInt(__DECODE_0__(0x1c3)) / 0x8) + parseInt(__DECODE_0__(0x1cb)) / 0x9 * (-parseInt(__DECODE_0__(0x1cd)) / 0xa) + -parseInt(__DECODE_0__(0x1bf)) / 0xb * (parseInt(__DECODE_0__(0x1c0)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd9234);
input = require('fs')[__DECODE_0__(0x1c8)](__DECODE_0__(0x1c4), __DECODE_0__(0x1c2));
lines = input['split']('\x0a');
line = lines['shift']()[__DECODE_0__(0x1c9)]('\x20');
function __DECODE_0__(xEQWqj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1be;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(xEQWqj, key);
}
N = line[0x0] * 0x1;
M = line[0x1] * 0x1;
b = [];
function __STRING_ARRAY__() {
  var _0xa61eb9 = ['readFileSync', 'split', '202358yZVaFH', '18tqApdy', '69kXHKBB', '7669070zhWfqq', '764082TYvxWE', '49GDyfpV', '11eLOZHe', '16418076dLnBxZ', '1oWuPMQ', 'utf8', '1661592DGCoKK', '/dev/stdin', '5547360VSyzsF', 'log', '253312NqmGGW'];
  __STRING_ARRAY__ = function () {
    return _0xa61eb9;
  };
  return __STRING_ARRAY__();
}
r = [];
for (i = 0x1; i <= N; i++) {
  b[i] = 0x1;
  r[i] = 0x0;
}
r[0x1] = 0x1;
for (i = 0x0; i < M; i++) {
  l = lines[i][__DECODE_0__(0x1c9)]('\x20');
  x = l[0x0] * 0x1;
  y = l[0x1] * 0x1;
  if (r[x]) {
    r[y] += 0x1;
  }
  if (r[x] && b[x] == 0x1) {
    r[x] = 0x0;
  }
  b[x] -= 0x1;
  b[y] += 0x1;
}
cnt = 0x0;
for (i = 0x1; i <= N; i++) {
  if (r[i] > 0x0) {
    cnt++;
  }
}
console[__DECODE_0__(0x1c6)](cnt);
