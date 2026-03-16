function __STRING_ARRAY__() {
  var _0x120e59 = ['3psozxn', 'push', 'trim', '4738122iXSHlM', '9VkXrLK', '104499OGRHjR', '52vVqxlA', 'split', '/dev/stdin', 'log', '205830bRvdBf', '198dLBbtU', 'readFileSync', '4291145XfHHsj', 'shift', '338630byjdik', 'length', '6886696QvubVZ', '5568976JUqLKn'];
  __STRING_ARRAY__ = function () {
    return _0x120e59;
  };
  return __STRING_ARRAY__();
}
var a0_0x6f9f06 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4fb9e0 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x4fb9e0(0x89)) / 0x1 * (-parseInt(_0x4fb9e0(0x80)) / 0x2) + parseInt(_0x4fb9e0(0x8e)) / 0x3 * (parseInt(_0x4fb9e0(0x8f)) / 0x4) + -parseInt(_0x4fb9e0(0x83)) / 0x5 + parseInt(_0x4fb9e0(0x8c)) / 0x6 + parseInt(_0x4fb9e0(0x88)) / 0x7 + -parseInt(_0x4fb9e0(0x87)) / 0x8 * (parseInt(_0x4fb9e0(0x8d)) / 0x9) + -parseInt(_0x4fb9e0(0x85)) / 0xa * (-parseInt(_0x4fb9e0(0x81)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x9751f);
inp = require('fs')[a0_0x6f9f06(0x82)](a0_0x6f9f06(0x7e), 'utf8')[a0_0x6f9f06(0x8b)]()[a0_0x6f9f06(0x7d)]('\x0a');
l = inp[a0_0x6f9f06(0x84)]()['split']('\x20');
N = l[a0_0x6f9f06(0x84)]() * 0x1;
P = l[a0_0x6f9f06(0x84)]() * 0x1;
_primFactors = function (n) {
  var _0x3a871b = a0_0x6f9f06;
  var arr = [];
  if (n == 0x1) {
    return [{
      'n': 0x1,
      'r': 0x1
    }];
  }
  s = n;
  var i = 0x2;
  r = 0x0;
  if (n % i === 0x0) {
    do {
      r++;
      n /= i;
    } while (n % i === 0x0);
    arr[_0x3a871b(0x8a)]({
      'n': i,
      'r': r
    });
  }
  for (i = 0x3; i * i <= s; i += 0x2) {
    r = 0x0;
    if (n % i === 0x0) {
      do {
        r++;
        n /= i;
      } while (n % i === 0x0);
      arr['push']({
        'n': i,
        'r': r
      });
    }
  }
  if (n > 0x1) {
    arr[_0x3a871b(0x8a)]({
      'n': n,
      'r': 0x1
    });
  }
  return arr;
};
function __DECODE_0__(TvPGVF, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x7d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(TvPGVF, key);
}
arr = _primFactors(P);
ans = 0x1;
for (i = 0x0; i < arr[a0_0x6f9f06(0x86)]; i++) {
  a = arr[i];
  r = a['r'];
  while (r >= N) {
    ans *= a['n'];
    r -= N;
  }
}
console[a0_0x6f9f06(0x7f)](ans);
