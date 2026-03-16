function __DECODE_0__(LpqPFd, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x136;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(LpqPFd, key);
}
function __STRING_ARRAY__() {
  var _0x37afdc = ['/dev/stdin', '1276ePykCw', '3080020SEZwli', 'split', 'shift', 'floor', '904600DwahKJ', 'push', 'log', 'forEach', '559594eYjbFF', '8935024FfNbtX', '30YfjLhp', '2922hwcRKf', 'sort', '36UrSKRl', 'trim', '1176175oorKea', 'readFileSync', '127446bTmTqV'];
  __STRING_ARRAY__ = function () {
    return _0x37afdc;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x148)) / 0x1 + -parseInt(__DECODE_0__(0x13d)) / 0x2 + parseInt(__DECODE_0__(0x137)) / 0x3 * (parseInt(__DECODE_0__(0x13f)) / 0x4) + parseInt(__DECODE_0__(0x140)) / 0x5 + -parseInt(__DECODE_0__(0x136)) / 0x6 * (-parseInt(__DECODE_0__(0x13b)) / 0x7) + -parseInt(__DECODE_0__(0x149)) / 0x8 + -parseInt(__DECODE_0__(0x139)) / 0x9 * (parseInt(__DECODE_0__(0x144)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbf674);
var input = require('fs')[__DECODE_0__(0x13c)](__DECODE_0__(0x13e), 'utf8');
var Arr = input[__DECODE_0__(0x13a)]()[__DECODE_0__(0x141)]('\x0a');
var I = 0x0;
while (!![]) {
  var n = Arr[__DECODE_0__(0x142)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  if (I != 0x0) {
    console[__DECODE_0__(0x146)]('');
  }
  I++;
  var rank = [];
  for (var i = 0x0; i < n; i++) {
    var arr = Arr[__DECODE_0__(0x142)]()['split']('\x20');
    var score = 0x3 * (arr[0x1] - 0x0) + (arr[0x3] - 0x0) + (0xa - i) * 0.01;
    rank[__DECODE_0__(0x145)]([arr[0x0], score]);
  }
  rank[__DECODE_0__(0x138)](function (a, b) {
    a = a[0x1];
    b = b[0x1];
    return b - a;
  });
  rank[__DECODE_0__(0x147)](function (v) {
    console[__DECODE_0__(0x146)](v[0x0] + ',' + Math[__DECODE_0__(0x143)](v[0x1]));
  });
}
