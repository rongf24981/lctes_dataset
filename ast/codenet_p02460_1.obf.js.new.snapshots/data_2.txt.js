(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x179)) / 0x1 * (parseInt(__DECODE_0__(0x17e)) / 0x2) + parseInt(__DECODE_0__(0x175)) / 0x3 * (-parseInt(__DECODE_0__(0x187)) / 0x4) + -parseInt(__DECODE_0__(0x17b)) / 0x5 * (parseInt(__DECODE_0__(0x176)) / 0x6) + parseInt(__DECODE_0__(0x181)) / 0x7 + -parseInt(__DECODE_0__(0x177)) / 0x8 + -parseInt(__DECODE_0__(0x17f)) / 0x9 * (parseInt(__DECODE_0__(0x18a)) / 0xa) + parseInt(__DECODE_0__(0x178)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x683cf);
var input = require('fs')[__DECODE_0__(0x188)](__DECODE_0__(0x184), __DECODE_0__(0x189));
var arr = input['trim']()[__DECODE_0__(0x183)]('\x0a');
function __DECODE_0__(vdDHiL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x175;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(vdDHiL, key);
}
var q = arr[__DECODE_0__(0x17c)]() - 0x0;
var str = '';
function __STRING_ARRAY__() {
  var _0x3cb9be = ['get', '1432684yMwxzG', '1251nCJZEd', 'delete', '104650wXmYmR', 'trim', 'split', '/dev/stdin', 'has', 'set', '924676kbwxaX', 'readFileSync', 'utf8', '54830oUzHau', '3zLsaBh', '42LdTchf', '5615336gZEFHk', '18105131SOoLOb', '1fwJkPX', 'log', '182165hCOKlt', 'shift'];
  __STRING_ARRAY__ = function () {
    return _0x3cb9be;
  };
  return __STRING_ARRAY__();
}
var map = new Map();
for (var i = 0x0; i < q; i++) {
  var [a, b, c] = arr[i]['split']('\x20');
  if (a == '0') {
    map[__DECODE_0__(0x186)](b, c);
  } else {
    if (a == '1') {
      str += (map[__DECODE_0__(0x185)](b) ? map[__DECODE_0__(0x17d)](b) : '0') + '\x0a';
    } else {
      map[__DECODE_0__(0x180)](b);
    }
  }
}
console[__DECODE_0__(0x17a)](str[__DECODE_0__(0x182)]());
