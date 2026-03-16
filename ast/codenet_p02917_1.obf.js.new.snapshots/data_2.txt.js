function __DECODE_0__(DFLTnB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1ec;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DFLTnB, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1f1)) / 0x1 + parseInt(__DECODE_0__(0x1ee)) / 0x2 + -parseInt(__DECODE_0__(0x1f0)) / 0x3 + -parseInt(__DECODE_0__(0x204)) / 0x4 * (parseInt(__DECODE_0__(0x1f5)) / 0x5) + -parseInt(__DECODE_0__(0x1f4)) / 0x6 + parseInt(__DECODE_0__(0x1f7)) / 0x7 * (-parseInt(__DECODE_0__(0x1f9)) / 0x8) + -parseInt(__DECODE_0__(0x1f3)) / 0x9 * (-parseInt(__DECODE_0__(0x1ff)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd188b);
process['stdin'][__DECODE_0__(0x1f6)]();
process['stdin'][__DECODE_0__(0x1fd)](__DECODE_0__(0x1ec));
var lines = [];
var reader = require(__DECODE_0__(0x1f2))[__DECODE_0__(0x1f8)]({
  'input': process[__DECODE_0__(0x1fe)],
  'output': process[__DECODE_0__(0x1ed)]
});
function __STRING_ARRAY__() {
  var _0x4973ef = ['min', 'line', 'setEncoding', 'stdin', '10wlpWZq', 'log', 'push', 'split', 'map', '36eORLdH', 'utf8', 'stdout', '1078008MSyHqZ', 'close', '280680kkHkcZ', '1200924CGPRzH', 'readline', '35709831jkIiET', '3527598bJChqk', '662605eXKDst', 'resume', '14KjOGfi', 'createInterface', '2293624GMbPGX', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x4973ef;
  };
  return __STRING_ARRAY__();
}
reader['on'](__DECODE_0__(0x1fc), line => {
  lines[__DECODE_0__(0x201)](line);
});
reader['on'](__DECODE_0__(0x1ef), () => {
  const list = lines[0x1][__DECODE_0__(0x202)]('\x20')[__DECODE_0__(0x203)](v => v - 0x0);
  let ans = 0x0;
  for (let i = 0x0; i < list[__DECODE_0__(0x1fa)] - 0x1; i++) {
    ans += Math[__DECODE_0__(0x1fb)](list[i], list[i + 0x1]);
  }
  ans += list[list['length'] - 0x1] + list[0x0];
  console[__DECODE_0__(0x200)](ans);
});
