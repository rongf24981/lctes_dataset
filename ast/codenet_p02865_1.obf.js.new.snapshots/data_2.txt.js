(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1a4)) / 0x1 + parseInt(__DECODE_0__(0x1b0)) / 0x2 + parseInt(__DECODE_0__(0x1a9)) / 0x3 + -parseInt(__DECODE_0__(0x1ae)) / 0x4 * (parseInt(__DECODE_0__(0x1a1)) / 0x5) + -parseInt(__DECODE_0__(0x1b1)) / 0x6 * (parseInt(__DECODE_0__(0x1a2)) / 0x7) + parseInt(__DECODE_0__(0x1ac)) / 0x8 + -parseInt(__DECODE_0__(0x1af)) / 0x9 * (-parseInt(__DECODE_0__(0x1b3)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xadcaa);
function __DECODE_0__(SGSiZY, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(SGSiZY, key);
}
process[__DECODE_0__(0x1ab)][__DECODE_0__(0x1a3)]();
function __STRING_ARRAY__() {
  var _0x1646fc = ['close', 'setEncoding', 'createInterface', '91293qtYkDw', 'push', 'stdin', '6809184spHPte', 'stdout', '109292pPnSRW', '2763xZPZrQ', '1269094LAfmhx', '174wdRyQR', 'line', '15430YJmxKj', '200qthpYE', '147847egckmx', 'resume', '427452XksfFP', 'utf8'];
  __STRING_ARRAY__ = function () {
    return _0x1646fc;
  };
  return __STRING_ARRAY__();
}
process[__DECODE_0__(0x1ab)][__DECODE_0__(0x1a7)](__DECODE_0__(0x1a5));
var lines = [];
var reader = require('readline')[__DECODE_0__(0x1a8)]({
  'input': process[__DECODE_0__(0x1ab)],
  'output': process[__DECODE_0__(0x1ad)]
});
reader['on'](__DECODE_0__(0x1b2), line => {
  lines[__DECODE_0__(0x1aa)](line);
});
reader['on'](__DECODE_0__(0x1a6), () => {
  const N = +lines[0x0];
  console['log'](N % 0x2 ? (N - 0x1) / 0x2 : N / 0x2 - 0x1);
});
