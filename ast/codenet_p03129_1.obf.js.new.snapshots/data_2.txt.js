(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x194)) / 0x1 * (parseInt(__DECODE_0__(0x196)) / 0x2) + parseInt(__DECODE_0__(0x198)) / 0x3 * (-parseInt(__DECODE_0__(0x193)) / 0x4) + parseInt(__DECODE_0__(0x18e)) / 0x5 + parseInt(__DECODE_0__(0x19b)) / 0x6 * (parseInt(__DECODE_0__(0x191)) / 0x7) + -parseInt(__DECODE_0__(0x19a)) / 0x8 * (parseInt(__DECODE_0__(0x190)) / 0x9) + -parseInt(__DECODE_0__(0x195)) / 0xa + parseInt(__DECODE_0__(0x18f)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1b0d3);
function __DECODE_0__(BJCgOu, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BJCgOu, key);
}
function __STRING_ARRAY__() {
  var _0x15cd4b = ['589wxlHJJ', '659020ibbdzT', '102lCdDFW', '/dev/stdin', '3LALTTT', 'split', '176yGeCHS', '6XZkZFA', 'log', 'YES', 'readFileSync', '262505bEzGwo', '3450909koRnJW', '30249HZFgRg', '551789JPTvUG', 'utf8', '657444uiGonM'];
  __STRING_ARRAY__ = function () {
    return _0x15cd4b;
  };
  return __STRING_ARRAY__();
}
function main(arg) {
  arg = arg[__DECODE_0__(0x199)]('\x0a')[0x0][__DECODE_0__(0x199)]('\x20');
  var N = Number(arg[0x0]);
  var K = Number(arg[0x1]);
  var count = 0x0;
  for (var i = 0x1; i <= N; i += 0x2) {
    count++;
  }
  if (K > count) {
    console[__DECODE_0__(0x18b)]('NO');
  } else {
    console[__DECODE_0__(0x18b)](__DECODE_0__(0x18c));
  }
}
main(require('fs')[__DECODE_0__(0x18d)](__DECODE_0__(0x197), __DECODE_0__(0x192)));
