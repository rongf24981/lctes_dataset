function __DECODE_0__(cSQAJa, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1a1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cSQAJa, key);
}
function __STRING_ARRAY__() {
  var _0x4ca56e = ['reduce', 'utf8', '28264148KCRaeb', 'shift', '1ydNgwM', '103998khjnOz', '/dev/stdin', '152GecYvd', '511qfZUky', '4EbQOwG', '1095045XbpAbK', '3509770hsbdEl', '1018046vcMhLk', 'trim', 'log', '2656767UhRwUY', 'split', '447651xYiQrj', 'push'];
  __STRING_ARRAY__ = function () {
    return _0x4ca56e;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1ac)) / 0x1 * (parseInt(__DECODE_0__(0x1a1)) / 0x2) + -parseInt(__DECODE_0__(0x1a4)) / 0x3 * (parseInt(__DECODE_0__(0x1b1)) / 0x4) + parseInt(__DECODE_0__(0x1b2)) / 0x5 + parseInt(__DECODE_0__(0x1ad)) / 0x6 * (-parseInt(__DECODE_0__(0x1b0)) / 0x7) + -parseInt(__DECODE_0__(0x1af)) / 0x8 * (-parseInt(__DECODE_0__(0x1a6)) / 0x9) + -parseInt(__DECODE_0__(0x1b3)) / 0xa + parseInt(__DECODE_0__(0x1aa)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb06bc);
function comb(r) {
  var c = [];
  c[0x0] = -0x1;
  var k = 0x1;
  c[0x1] = 0x0;
  var ret = [];
  while (k != 0x0) {
    for (var i = k + 0x1; i <= r; i++) {
      c[i] = c[i - 0x1] + 0x1;
    }
    var arr = [];
    for (var i = 0x1; i <= r; i++) {
      arr[__DECODE_0__(0x1a7)](c[i]);
    }
    ret[__DECODE_0__(0x1a7)](arr);
    k = r;
    while (c[k] == 0x9 - r + k) {
      k = k - 0x1;
    }
    c[k] = c[k] + 0x1;
  }
  return ret;
}
var input = require('fs')['readFileSync'](__DECODE_0__(0x1ae), __DECODE_0__(0x1a9));
var lines = input[__DECODE_0__(0x1a2)]()[__DECODE_0__(0x1a5)]('\x0a');
var line;
while (line = lines[__DECODE_0__(0x1ab)]()) {
  var nums = line['split']('\x20');
  var n = +nums[0x0];
  var s = +nums[0x1];
  if (n + s == 0x0) {
    break;
  }
  var c = comb(n);
  var cnt = 0x0;
  for (var i = 0x0; i < c['length']; i++) {
    var arr = c[i];
    if (s == arr[__DECODE_0__(0x1a8)](function (prev, now) {
      return prev + now;
    })) {
      cnt++;
    }
  }
  console[__DECODE_0__(0x1a3)](cnt);
}
