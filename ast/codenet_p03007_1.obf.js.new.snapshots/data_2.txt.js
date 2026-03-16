function __STRING_ARRAY__() {
  var _0x6e0875 = ['200265MUDFMV', 'sort', '11AobbRE', 'map', '2429112Bodara', '2282110FvIhuB', '6LjVbAV', '4iyCBQC', 'forEach', '6xLZhpc', 'filter', '39896kPgEgQ', 'push', '965915TkLTHu', 'pop', 'split', '975264dqLhMU', '9VyBjNB', '/dev/stdin', '2586392OeIbiU', 'readFileSync', 'log', '104tDlTgU'];
  __STRING_ARRAY__ = function () {
    return _0x6e0875;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x101)) / 0x1 + -parseInt(__DECODE_0__(0xf5)) / 0x2 * (parseInt(__DECODE_0__(0xf0)) / 0x3) + parseInt(__DECODE_0__(0xf1)) / 0x4 * (-parseInt(__DECODE_0__(0xf7)) / 0x5) + parseInt(__DECODE_0__(0xf3)) / 0x6 * (-parseInt(__DECODE_0__(0xee)) / 0x7) + parseInt(__DECODE_0__(0xfd)) / 0x8 * (-parseInt(__DECODE_0__(0xfb)) / 0x9) + parseInt(__DECODE_0__(0xef)) / 0xa * (parseInt(__DECODE_0__(0x103)) / 0xb) + -parseInt(__DECODE_0__(0xfa)) / 0xc * (-parseInt(__DECODE_0__(0x100)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x2ac9a);
log = console[__DECODE_0__(0xff)];
var stdin = require('fs')[__DECODE_0__(0xfe)](__DECODE_0__(0xfc), 'UTF-8');
var lines = stdin['split']('\x0a')[__DECODE_0__(0xf4)](v => v !== '')[__DECODE_0__(0x104)](v => v[__DECODE_0__(0xf9)]('\x20')[__DECODE_0__(0x104)](Number));
var N = lines[0x0];
var A = lines[0x1];
var processList = [];
A[__DECODE_0__(0x102)]((a, b) => a - b);
var plusList = [];
var minusList = [];
plusList[__DECODE_0__(0xf6)](A[__DECODE_0__(0xf8)]());
minusList[__DECODE_0__(0xf6)](A['shift']());
A[__DECODE_0__(0xf2)](v => {
  v >= 0x0 ? plusList[__DECODE_0__(0xf6)](v) : minusList['push'](v);
});
function __DECODE_0__(ueArPe, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xee;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ueArPe, key);
}
var tmp = minusList[__DECODE_0__(0xf8)]();
for (var i = 0x0; i < plusList['length'] - 0x1; i++) {
  var plus = plusList[__DECODE_0__(0xf8)]();
  processList[__DECODE_0__(0xf6)](tmp + '\x20' + plus);
  tmp = tmp - plus;
}
var lastplus = plusList[__DECODE_0__(0xf8)]();
for (var i = 0x0; i < minusList['length']; i++) {
  var minus = minusList[__DECODE_0__(0xf8)]();
  processList['push'](lastplus + '\x20' + minus);
  lastplus = lastplus - minus;
}
processList[__DECODE_0__(0xf6)](lastplus + '\x20' + tmp);
log(lastplus - tmp);
processList[__DECODE_0__(0xf2)](v => log(v));
