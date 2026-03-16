function __DECODE_0__(CgwwPP, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x18b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(CgwwPP, key);
}
function __STRING_ARRAY__() {
  var _0x702f38 = ['174GQEGWQ', '2515945otnfsK', 'line', 'split', '18101MBAlHq', 'stdin', '1253334oDxwsz', '8oNSZRU', 'utf8', 'stdout', 'setEncoding', 'push', 'resume', 'log', 'createInterface', '5544098GCHhMG', 'splice', '16caLiRQ', '469172mHKYwp', 'length', 'map', 'sort', '2510508UNJMtw', '290wqNYfZ', '13152339TjxWyL'];
  __STRING_ARRAY__ = function () {
    return _0x702f38;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1a3)) / 0x1 * (parseInt(__DECODE_0__(0x19f)) / 0x2) + -parseInt(__DECODE_0__(0x18c)) / 0x3 + parseInt(__DECODE_0__(0x18d)) / 0x4 * (-parseInt(__DECODE_0__(0x1a0)) / 0x5) + -parseInt(__DECODE_0__(0x19c)) / 0x6 + parseInt(__DECODE_0__(0x195)) / 0x7 * (parseInt(__DECODE_0__(0x197)) / 0x8) + parseInt(__DECODE_0__(0x19e)) / 0x9 + parseInt(__DECODE_0__(0x19d)) / 0xa * (parseInt(__DECODE_0__(0x198)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd32b2);
process[__DECODE_0__(0x18b)][__DECODE_0__(0x192)]();
process[__DECODE_0__(0x18b)][__DECODE_0__(0x190)](__DECODE_0__(0x18e));
var lines = [];
var reader = require('readline')[__DECODE_0__(0x194)]({
  'input': process[__DECODE_0__(0x18b)],
  'output': process[__DECODE_0__(0x18f)]
});
reader['on'](__DECODE_0__(0x1a1), line => {
  lines[__DECODE_0__(0x191)](line);
});
reader['on']('close', () => {
  var n = Number(lines[0x0]);
  var v = lines[0x1][__DECODE_0__(0x1a2)]('\x20');
  v = v[__DECODE_0__(0x19a)](function (str) {
    return Number(str);
  });
  for (i = 0x0; i < n - 0x1; i++) {
    var min1 = v[__DECODE_0__(0x19b)]((a, b) => a - b)[0x0];
    v[__DECODE_0__(0x196)](0x0, 0x1);
    var min2 = v[0x0];
    v[__DECODE_0__(0x196)](0x0, 0x1);
    var a = (min1 + min2) / 0x2;
    if (v[__DECODE_0__(0x199)] == 0x0) {
      break;
    }
    v[__DECODE_0__(0x191)](a);
  }
  console[__DECODE_0__(0x193)](a);
});
