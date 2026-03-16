function __STRING_ARRAY__() {
  var _0x49f1c3 = ['965373azpIoF', '2072214fALeSz', 'split', 'stdin', '16529403YkLvyN', 'push', '164222JDNbJr', 'stdout', '24jlglEI', '426485mSXtlp', '20lIXlNh', 'createInterface', '4EsrCYc', 'line', '4041192aDKnzt', '4wcIfIo', '6606992QjCrcd', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x49f1c3;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1c1)) / 0x1 * (parseInt(__DECODE_0__(0x1c7)) / 0x2) + -parseInt(__DECODE_0__(0x1bb)) / 0x3 * (-parseInt(__DECODE_0__(0x1b8)) / 0x4) + -parseInt(__DECODE_0__(0x1c4)) / 0x5 * (-parseInt(__DECODE_0__(0x1c3)) / 0x6) + -parseInt(__DECODE_0__(0x1b9)) / 0x7 + -parseInt(__DECODE_0__(0x1b7)) / 0x8 + parseInt(__DECODE_0__(0x1bc)) / 0x9 * (-parseInt(__DECODE_0__(0x1c5)) / 0xa) + parseInt(__DECODE_0__(0x1bf)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8eb97);
function main(tmp) {
  var i = 0x0;
  while (tmp[i] != 0x0 && tmp[i + 0x1] != 0x0) {
    if (tmp[i] < tmp[i + 0x1]) {
      console[__DECODE_0__(0x1ba)](tmp[i] + '\x20' + tmp[i + 0x1]);
    } else {
      console[__DECODE_0__(0x1ba)](tmp[i + 0x1] + '\x20' + tmp[i]);
    }
    i = i + 0x2;
  }
}
var lines = [];
function __DECODE_0__(ErqeOb, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b7;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ErqeOb, key);
}
var b = [];
var reader = require('readline')[__DECODE_0__(0x1c6)]({
  'input': process['stdin'],
  'output': process[__DECODE_0__(0x1c2)]
});
reader['on'](__DECODE_0__(0x1c8), function (line) {
  var a = line[__DECODE_0__(0x1bd)]('\x20');
  var c = parseInt(a[0x0], 0xa);
  var d = parseInt(a[0x1], 0xa);
  b[__DECODE_0__(0x1c0)](c);
  b[__DECODE_0__(0x1c0)](d);
  if (c == 0x0 && d == 0x0) {
    main(b);
  }
});
process[__DECODE_0__(0x1be)]['on']('end', function () {});
