(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x86)) / 0x1 + parseInt(__DECODE_0__(0x7e)) / 0x2 + parseInt(__DECODE_0__(0x80)) / 0x3 + -parseInt(__DECODE_0__(0x7c)) / 0x4 + -parseInt(__DECODE_0__(0x85)) / 0x5 * (parseInt(__DECODE_0__(0x87)) / 0x6) + parseInt(__DECODE_0__(0x7a)) / 0x7 * (parseInt(__DECODE_0__(0x83)) / 0x8) + -parseInt(__DECODE_0__(0x82)) / 0x9 * (parseInt(__DECODE_0__(0x75)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb34f3);
function main(input) {
  var n = input[0x0] - 0x0;
  var lists = [];
  var ansmap = {};
  for (var i = 0x1; i <= n; i++) {
    var str = input[i];
    var map = {};
    for (var j = 0x0; j < str[__DECODE_0__(0x76)]; j++) {
      map[str[j]] = map[str[j]] ? map[str[j]] + 0x1 : 0x1;
      ansmap[str[j]] = 0x3c;
    }
    lists[__DECODE_0__(0x77)](map);
  }
  var keys = Object['keys'](ansmap)[__DECODE_0__(0x88)]((a, b) => a > b ? 0x1 : -0x1);
  for (var i = 0x0; i < n; i++) {
    var list = lists[i];
    for (var j = 0x0; j < keys[__DECODE_0__(0x76)]; j++) {
      ansmap[keys[j]] = Math[__DECODE_0__(0x84)](ansmap[keys[j]], list[keys[j]] || 0x0);
    }
  }
  var ans = '';
  keys[__DECODE_0__(0x78)](key => {
    for (var i = 0x0; i < ansmap[key]; i++) {
      ans += key;
    }
  });
  console[__DECODE_0__(0x7d)](ans);
}
function __STRING_ARRAY__() {
  var _0x4375fd = ['push', 'forEach', 'utf8', '1351njGpyZ', '/dev/stdin', '882380VAAltH', 'log', '260002tjJoPP', 'trim', '2861943fANrXM', 'split', '63VuCOkr', '25448OIjKrw', 'min', '5sBcCGS', '570691BTgvTZ', '392694PebDzX', 'sort', 'readFileSync', '152470pYZtEu', 'length'];
  __STRING_ARRAY__ = function () {
    return _0x4375fd;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(YGUDkJ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x75;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(YGUDkJ, key);
}
main(require('fs')[__DECODE_0__(0x89)](__DECODE_0__(0x7b), __DECODE_0__(0x79))[__DECODE_0__(0x7f)]()[__DECODE_0__(0x81)]('\x0a'));
