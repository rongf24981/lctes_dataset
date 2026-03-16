function __STRING_ARRAY__() {
  var _0x80db9b = ['1347252DTVjHT', 'readFileSync', 'push', '534504dBqkfB', '13739724AQXcDl', '25847220vEdLjj', '/dev/stdin', '8QZVJPT', 'log', '11866596HZLDhI', '5NTpjsc', '826768SUCfKw', '1119005GCMdyY', '16enJIPG', 'sort'];
  __STRING_ARRAY__ = function () {
    return _0x80db9b;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x15a)) / 0x1 + parseInt(__DECODE_0__(0x15b)) / 0x2 * (parseInt(__DECODE_0__(0x160)) / 0x3) + -parseInt(__DECODE_0__(0x159)) / 0x4 * (-parseInt(__DECODE_0__(0x158)) / 0x5) + -parseInt(__DECODE_0__(0x15d)) / 0x6 + parseInt(__DECODE_0__(0x157)) / 0x7 + -parseInt(__DECODE_0__(0x164)) / 0x8 * (-parseInt(__DECODE_0__(0x161)) / 0x9) + -parseInt(__DECODE_0__(0x162)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe1fbf);
line = require('fs')[__DECODE_0__(0x15e)](__DECODE_0__(0x163), 'utf8')['split']('\x0a');
n = parseInt(line[0x0]);
v = line[0x1]['split']('\x20');
function __DECODE_0__(pBANzs, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x156;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(pBANzs, key);
}
var odds = {};
var even = {};
for (var i = 0x0; i < v['length']; i++) {
  di = i & 0x1 ? even : odds;
  di[v[i]] = !di[v[i]] ? 0x1 : di[v[i]] + 0x1;
}
var a = [];
var b = [];
for (var k in odds) {
  a[__DECODE_0__(0x15f)]({
    'v': k,
    'n': odds[k]
  });
}
for (var k in even) {
  b[__DECODE_0__(0x15f)]({
    'v': k,
    'n': even[k]
  });
}
a['sort']((x, y) => y['n'] - x['n']);
b[__DECODE_0__(0x15c)]((x, y) => y['n'] - x['n']);
va = a[0x0];
vb = b[0x0];
if (va['v'] === vb['v']) {
  if (va['n'] > vb['n']) {
    vb = !b[0x1] ? {
      'n': 0x0
    } : b[0x1];
  } else {
    va = !a[0x1] ? {
      'n': 0x0
    } : a[0x1];
  }
}
log = console[__DECODE_0__(0x156)];
log(n / 0x2 - va['n'] + n / 0x2 - vb['n']);
