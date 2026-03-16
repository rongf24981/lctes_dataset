(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x107)) / 0x1 * (-parseInt(__DECODE_0__(0x109)) / 0x2) + parseInt(__DECODE_0__(0x105)) / 0x3 + parseInt(__DECODE_0__(0x10e)) / 0x4 * (-parseInt(__DECODE_0__(0x111)) / 0x5) + parseInt(__DECODE_0__(0x106)) / 0x6 + -parseInt(__DECODE_0__(0x114)) / 0x7 + -parseInt(__DECODE_0__(0x10c)) / 0x8 + -parseInt(__DECODE_0__(0x103)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4c5f4);
config = {
  'input': '/dev/stdin',
  'newline': '\x0a'
};
function __DECODE_0__(OSigpG, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x102;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OSigpG, key);
}
line = require('fs')[__DECODE_0__(0x108)](config[__DECODE_0__(0x113)], __DECODE_0__(0x10a))[__DECODE_0__(0x112)](config[__DECODE_0__(0x102)]);
function __STRING_ARRAY__() {
  var _0x528805 = ['5pdTOEk', 'split', 'input', '1114715DrtsME', 'newline', '1945161JNulJt', 'push', '613161xMITSz', '3179460JPJAFA', '1JZOnkW', 'readFileSync', '287834kaBMmP', 'ascii', 'extract', '458504fdUNLG', 'log', '530828OzaAzD', 'pop', 'sort'];
  __STRING_ARRAY__ = function () {
    return _0x528805;
  };
  return __STRING_ARRAY__();
}
S = [];
for (i in line) {
  ary = line[i]['split']('\x20');
  if (ary[0x0] === 'insert') {
    S[__DECODE_0__(0x104)](parseInt(ary[0x1], 0xa));
  } else {
    if (ary[0x0] === __DECODE_0__(0x10b)) {
      S[__DECODE_0__(0x110)](function (a, b) {
        return a - b;
      });
      console[__DECODE_0__(0x10d)](S[__DECODE_0__(0x10f)]());
    }
  }
}
