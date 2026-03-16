(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x185)) / 0x1 * (parseInt(__DECODE_0__(0x17d)) / 0x2) + -parseInt(__DECODE_0__(0x182)) / 0x3 + -parseInt(__DECODE_0__(0x17e)) / 0x4 + parseInt(__DECODE_0__(0x178)) / 0x5 + -parseInt(__DECODE_0__(0x183)) / 0x6 * (-parseInt(__DECODE_0__(0x188)) / 0x7) + -parseInt(__DECODE_0__(0x189)) / 0x8 * (parseInt(__DECODE_0__(0x17b)) / 0x9) + parseInt(__DECODE_0__(0x184)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x29f9c);
function __STRING_ARRAY__() {
  var _0x37c078 = ['1048455KVYkBT', 'sort', 'split', '81xcmxzv', 'map', '35570WKUeTW', '528308qAbnmn', 'newline', '/dev/stdin', 'slice', '1005384VMZzLW', '42258rYCxZj', '3559130ZugKzk', '1SITSSk', 'yes', 'readFileSync', '91tOoWVD', '31832lAIPTd', 'trim', 'ascii', 'min'];
  __STRING_ARRAY__ = function () {
    return _0x37c078;
  };
  return __STRING_ARRAY__();
}
config = {
  'input': __DECODE_0__(0x180),
  'newline': '\x0a'
};
line = require('fs')[__DECODE_0__(0x187)](config['input'], __DECODE_0__(0x176))[__DECODE_0__(0x18a)]()[__DECODE_0__(0x17a)](config[__DECODE_0__(0x17f)])[__DECODE_0__(0x17c)](function (line) {
  return line['split']('\x20')[__DECODE_0__(0x17c)](Number);
});
n = line[0x0][0x0];
m = line[0x0][0x1];
q = line[m + 0x1][0x0];
function __DECODE_0__(RkVZVm, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x176;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RkVZVm, key);
}
adj = new Array(n);
for (i = 0x0; i < n; i++) {
  adj[i] = null;
}
conn = line[__DECODE_0__(0x181)](0x1, m + 0x1);
conn[__DECODE_0__(0x179)](function (a, b) {
  if (a[0x0] === b[0x0]) {
    return a[0x1] - b[0x1];
  }
  return a[0x0] - b[0x0];
});
for (i in conn) {
  min0 = id0 = conn[i][0x0];
  min1 = id1 = conn[i][0x1];
  while (adj[min0] !== null) {
    min0 = adj[min0];
  }
  while (adj[min1] !== null) {
    min1 = adj[min1];
  }
  min = Math[__DECODE_0__(0x177)](min0, min1);
  if (id0 !== min) {
    adj[id0] = min;
  }
  if (id1 !== min) {
    adj[id1] = min;
  }
}
q = line['slice'](m + 0x2, m + 0x2 + q);
for (i in q) {
  min0 = q[i][0x0];
  min1 = q[i][0x1];
  while (adj[min0] !== null) {
    min0 = adj[min0];
  }
  while (adj[min1] !== null) {
    min1 = adj[min1];
  }
  console['log'](min0 === min1 ? __DECODE_0__(0x186) : 'no');
}
