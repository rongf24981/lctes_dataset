(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x12e)) / 0x1 + parseInt(__DECODE_0__(0x124)) / 0x2 + -parseInt(__DECODE_0__(0x128)) / 0x3 * (-parseInt(__DECODE_0__(0x121)) / 0x4) + -parseInt(__DECODE_0__(0x122)) / 0x5 + -parseInt(__DECODE_0__(0x131)) / 0x6 + -parseInt(__DECODE_0__(0x123)) / 0x7 * (-parseInt(__DECODE_0__(0x12c)) / 0x8) + parseInt(__DECODE_0__(0x12d)) / 0x9 * (-parseInt(__DECODE_0__(0x12f)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x26427);
var d = require('fs')[__DECODE_0__(0x12a)]('/dev/stdin', __DECODE_0__(0x12b))[__DECODE_0__(0x125)]()['split']('\x0a');
function __STRING_ARRAY__() {
  var _0x589e09 = ['trim', 'log', 'join', '27921BSflel', 'push', 'readFileSync', 'utf8', '2608JNnKmx', '4039047OjchMm', '145625xDQJRg', '10TIvnXm', 'split', '251424Nxfyzr', '28LkpHLv', '733775cGhEOO', '6524YjuWXV', '559094TMUfiE'];
  __STRING_ARRAY__ = function () {
    return _0x589e09;
  };
  return __STRING_ARRAY__();
}
var info = line = '';
var map = [];
while (line = d['shift']()) {
  info = line[__DECODE_0__(0x130)]('\x20');
  map[__DECODE_0__(0x129)]([info[0x0], +info[0x1]]);
}
map['sort'](function (a, b) {
  if (a[0x0] < b[0x0]) {
    return -0x1;
  }
  if (a[0x0] > b[0x0]) {
    return 0x1;
  }
  if (a[0x1] < b[0x1]) {
    return -0x1;
  }
  if (a[0x1] > b[0x1]) {
    return 0x1;
  }
  return 0x0;
});
var word = '';
function __DECODE_0__(ZrStPp, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x121;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZrStPp, key);
}
var pages = [];
map['forEach'](function (info, i) {
  if (word !== info[0x0]) {
    if (i !== 0x0) {
      console[__DECODE_0__(0x126)](pages[__DECODE_0__(0x127)]('\x20'));
      pages = [];
    }
    console[__DECODE_0__(0x126)](info[0x0]);
  }
  pages[__DECODE_0__(0x129)](info[0x1]);
  word = info[0x0];
});
console[__DECODE_0__(0x126)](pages[__DECODE_0__(0x127)]('\x20'));
