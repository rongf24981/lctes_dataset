(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x188)) / 0x1 + -parseInt(__DECODE_0__(0x189)) / 0x2 * (-parseInt(__DECODE_0__(0x18a)) / 0x3) + -parseInt(__DECODE_0__(0x193)) / 0x4 * (-parseInt(__DECODE_0__(0x192)) / 0x5) + -parseInt(__DECODE_0__(0x199)) / 0x6 * (-parseInt(__DECODE_0__(0x195)) / 0x7) + parseInt(__DECODE_0__(0x18e)) / 0x8 * (parseInt(__DECODE_0__(0x198)) / 0x9) + parseInt(__DECODE_0__(0x196)) / 0xa + -parseInt(__DECODE_0__(0x18d)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd8197);
function __DECODE_0__(XtwCYN, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x188;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XtwCYN, key);
}
var lines = [];
var readline = require(__DECODE_0__(0x19c));
function __STRING_ARRAY__() {
  var _0x25f137 = ['8nAfKrt', 'push', 'log', 'sort', '5RmNhDU', '123792lsSWVn', 'map', '1435saPlVH', '14384260SARuQt', 'shift', '1062333WGCpxz', '43854MoAVKU', 'line', 'stdin', 'readline', '1485630PROSUz', '4DwPbMr', '636051gJEtIB', 'createInterface', 'split', '45213047CKqXIE'];
  __STRING_ARRAY__ = function () {
    return _0x25f137;
  };
  return __STRING_ARRAY__();
}
var rl = readline[__DECODE_0__(0x18b)]({
  'input': process[__DECODE_0__(0x19b)],
  'output': process['stdout']
});
rl['on'](__DECODE_0__(0x19a), x => {
  lines[__DECODE_0__(0x18f)](x);
});
var A;
rl['on']('close', () => {
  var N = Number(lines[0x0]['split']('\x20')[0x0]);
  var M = Number(lines[0x0][__DECODE_0__(0x18c)]('\x20')[0x1]);
  A = lines[0x1][__DECODE_0__(0x18c)]('\x20')[__DECODE_0__(0x194)](i => Number(i));
  lines[__DECODE_0__(0x197)]();
  lines[__DECODE_0__(0x197)]();
  var BC = lines[__DECODE_0__(0x194)](i => i[__DECODE_0__(0x18c)]('\x20')[__DECODE_0__(0x194)](i => Number(i)));
  A[__DECODE_0__(0x191)]((a, b) => a - b);
  BC['sort']((a, b) => b[0x1] - a[0x1]);
  var k = 0x0;
  var ans = 0x0;
  for (var i = 0x0; i < M; i++) {
    var b = BC[i][0x0];
    var c = BC[i][0x1];
    var cnt = 0x1;
    for (var j = k; j < N; j++) {
      if (b < cnt) {
        k = j;
        break;
      }
      if (A[j] < c) {
        ans += c;
      } else {
        for (var x = j; x < N; x++) {
          ans += A[x];
        }
        console['log'](ans);
        return 0x0;
      }
      cnt++;
    }
  }
  for (var x = j; x < N; x++) {
    ans += A[x];
  }
  console[__DECODE_0__(0x190)](ans);
});
