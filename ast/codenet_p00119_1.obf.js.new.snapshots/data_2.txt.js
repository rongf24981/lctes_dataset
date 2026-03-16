(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xbc)) / 0x1 * (parseInt(__DECODE_0__(0xbe)) / 0x2) + -parseInt(__DECODE_0__(0xbb)) / 0x3 * (-parseInt(__DECODE_0__(0xae)) / 0x4) + parseInt(__DECODE_0__(0xb2)) / 0x5 * (-parseInt(__DECODE_0__(0xb9)) / 0x6) + -parseInt(__DECODE_0__(0xb4)) / 0x7 + -parseInt(__DECODE_0__(0xbf)) / 0x8 * (-parseInt(__DECODE_0__(0xbd)) / 0x9) + parseInt(__DECODE_0__(0xb7)) / 0xa + parseInt(__DECODE_0__(0xb1)) / 0xb * (-parseInt(__DECODE_0__(0xc1)) / 0xc);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xa99c9);
var input = require('fs')[__DECODE_0__(0xc2)](__DECODE_0__(0xb5), 'utf8');
var Arr = input[__DECODE_0__(0xb3)]()['split']('\x0a');
var m = Arr[__DECODE_0__(0xaf)]() - 0x0;
var n = Arr['shift']() - 0x0;
var M = [];
var check = [];
for (var i = 0x0; i < m; i++) {
  M[i] = [];
}
function __DECODE_0__(XenCdS, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xae;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(XenCdS, key);
}
for (var i = 0x0; i < m; i++) {
  check[i] = ![];
}
function __STRING_ARRAY__() {
  var _0x4e0450 = ['3405UyxNws', 'trim', '5609786HKFazE', '/dev/stdin', 'reverse', '9303330wzLwko', 'map', '1542oUpkOa', 'forEach', '2862FETajh', '2wdVXes', '27TAeqGa', '499354qSvbnL', '1303168wsOEKB', 'push', '6998028bKXSpO', 'readFileSync', '5596cuKwGS', 'shift', 'split', '11EEBmmn'];
  __STRING_ARRAY__ = function () {
    return _0x4e0450;
  };
  return __STRING_ARRAY__();
}
for (var i = 0x0; i < n; i++) {
  var v = Arr[__DECODE_0__(0xaf)]()[__DECODE_0__(0xb0)]('\x20')[__DECODE_0__(0xb8)](Number);
  M[v[0x0] - 0x1]['push'](v[0x1] - 0x1);
}
var L = [];
for (var i = 0x0; i < m; i++) {
  visit(i);
}
function visit(x) {
  if (check[x] == !![]) {
    return;
  } else {
    check[x] = !![];
  }
  M[x][__DECODE_0__(0xba)](function (v) {
    visit(v);
  });
  L[__DECODE_0__(0xc0)](x);
}
L[__DECODE_0__(0xb6)]();
L[__DECODE_0__(0xba)](function (v) {
  console['log'](v + 0x1);
});
