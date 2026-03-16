function __DECODE_0__(uPiWEQ, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1b1;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(uPiWEQ, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1bc)) / 0x1 + -parseInt(__DECODE_0__(0x1b2)) / 0x2 + -parseInt(__DECODE_0__(0x1bb)) / 0x3 + parseInt(__DECODE_0__(0x1b1)) / 0x4 + parseInt(__DECODE_0__(0x1be)) / 0x5 + -parseInt(__DECODE_0__(0x1bf)) / 0x6 + parseInt(__DECODE_0__(0x1b7)) / 0x7;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x75fa4);
function Main(input) {
  var input = input[__DECODE_0__(0x1b4)]('\x20');
  var n = parseInt(input[0x0], 0xa);
  var p = parseInt(input[0x1], 0xa);
  var arr = [];
  var counts = [];
  var ans = 0x1;
  var i = 0x2;
  while (i <= p) {
    while (p % i === 0x0) {
      arr[__DECODE_0__(0x1bd)](i);
      p = Math[__DECODE_0__(0x1b8)](p / i);
    }
    i++;
  }
  for (var i = 0x0; i < arr[__DECODE_0__(0x1b6)]; i++) {
    var key = arr[i];
    counts[key] = counts[key] ? counts[key] + 0x1 : 0x1;
  }
  var b = arr[__DECODE_0__(0x1b5)](function (x, i, self) {
    return self[__DECODE_0__(0x1b9)](x) === i;
  });
  for (var i = 0x0; i < b[__DECODE_0__(0x1b6)]; i++) {
    if (counts[b[i]] >= n) {
      ans *= b[i];
    }
  }
  console[__DECODE_0__(0x1b3)](ans);
}
function __STRING_ARRAY__() {
  var _0x500c58 = ['6355pvTVWD', 'push', '4278090VBgevB', '545046DdadBX', '139824CnpBXx', '1001916HbGKxR', 'log', 'split', 'filter', 'length', '4954026CPEyiR', 'floor', 'indexOf', 'utf8', '1550706qbTDSn'];
  __STRING_ARRAY__ = function () {
    return _0x500c58;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')['readFileSync']('/dev/stdin', __DECODE_0__(0x1ba)));
