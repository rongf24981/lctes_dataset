function __DECODE_0__(RyvQMt, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc0;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(RyvQMt, key);
}
function __STRING_ARRAY__() {
  var _0x581535 = ['4130116UDSmRw', '19849247EPGIMm', '48FRExij', 'log', '12kFhOtt', '9070092igNcEq', 'trim', '1068129XSYyod', '3eURCjv', 'shift', 'forEach', 'map', '/dev/stdin', 'split', 'utf8', '5sGoIMJ', 'push', 'length', '1zkSsiD', '10DSmqom', '21357193HNuZVP', '1406138GYVEwk', 'readFileSync', '554176kDQBCi'];
  __STRING_ARRAY__ = function () {
    return _0x581535;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xcf)) / 0x1 * (parseInt(__DECODE_0__(0xd2)) / 0x2) + parseInt(__DECODE_0__(0xc5)) / 0x3 * (-parseInt(__DECODE_0__(0xd5)) / 0x4) + -parseInt(__DECODE_0__(0xcc)) / 0x5 * (parseInt(__DECODE_0__(0xc2)) / 0x6) + parseInt(__DECODE_0__(0xd4)) / 0x7 + -parseInt(__DECODE_0__(0xd7)) / 0x8 * (parseInt(__DECODE_0__(0xc4)) / 0x9) + parseInt(__DECODE_0__(0xd0)) / 0xa * (parseInt(__DECODE_0__(0xd6)) / 0xb) + -parseInt(__DECODE_0__(0xc1)) / 0xc * (-parseInt(__DECODE_0__(0xd1)) / 0xd);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xed9de);
var input = require('fs')[__DECODE_0__(0xd3)](__DECODE_0__(0xc9), __DECODE_0__(0xcb));
var arr = input[__DECODE_0__(0xc3)]()[__DECODE_0__(0xca)]('\x0a')[__DECODE_0__(0xc8)](Number);
while (!![]) {
  var n = arr[__DECODE_0__(0xc6)]();
  if (n == 0x0) {
    break;
  }
  if (n == 0x1) {
    console[__DECODE_0__(0xc0)]('');
    continue;
  }
  var ary = [];
  for (var i = 0x0; i < n; i++) {
    ary[i] = ![];
  }
  for (var i = 0x1; i < n; i++) {
    ary[i * i % n] = !![];
  }
  var m = [];
  ary[__DECODE_0__(0xc7)](function (v, i) {
    if (v) {
      m[__DECODE_0__(0xcd)](i);
    }
  });
  var ans = [];
  var len = (n - 0x1) / 0x2;
  for (var i = 0x0; i <= len; i++) {
    ans[i] = 0x0;
  }
  for (var i = 0x0; i < m[__DECODE_0__(0xce)]; i++) {
    for (var j = i + 0x1; j < m[__DECODE_0__(0xce)]; j++) {
      var x = m[i] - m[j];
      if (x < 0x0) {
        x += n;
      }
      if (len < x) {
        x = n - x;
      }
      ans[x] += 0x2;
    }
  }
  ans[__DECODE_0__(0xc6)]();
  ans[__DECODE_0__(0xc7)](function (v) {
    console[__DECODE_0__(0xc0)](v);
  });
}
