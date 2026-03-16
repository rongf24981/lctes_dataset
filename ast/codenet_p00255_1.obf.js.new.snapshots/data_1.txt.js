var a0_0x28bb1c = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4baaf0 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x4baaf0(0x1c6)) / 0x1 + -parseInt(_0x4baaf0(0x1d6)) / 0x2 * (-parseInt(_0x4baaf0(0x1ca)) / 0x3) + -parseInt(_0x4baaf0(0x1d4)) / 0x4 + -parseInt(_0x4baaf0(0x1ce)) / 0x5 + parseInt(_0x4baaf0(0x1c5)) / 0x6 * (-parseInt(_0x4baaf0(0x1cb)) / 0x7) + parseInt(_0x4baaf0(0x1c8)) / 0x8 + -parseInt(_0x4baaf0(0x1d3)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdc8f0);
var input = require('fs')[a0_0x28bb1c(0x1cd)](a0_0x28bb1c(0x1d2), 'utf8');
var Arr = input['trim']()[a0_0x28bb1c(0x1c9)]('\x0a');
while (!![]) {
  var n = Arr[a0_0x28bb1c(0x1cf)]() - 0x0;
  if (n == 0x0) {
    break;
  }
  var p = Arr[a0_0x28bb1c(0x1cf)]()[a0_0x28bb1c(0x1c9)]('\x20')[a0_0x28bb1c(0x1c7)](Number);
  var j = Arr['shift']()[a0_0x28bb1c(0x1c9)]('\x20')['map'](Number);
  var sum = p[a0_0x28bb1c(0x1cc)](function (a, b) {
    return a + b;
  });
  j[a0_0x28bb1c(0x1d7)](function (a, b) {
    return b - a;
  });
  var max = sum * n;
  while (!![]) {
    if (j[a0_0x28bb1c(0x1d5)] == 0x0) {
      break;
    }
    n--;
    max = Math[a0_0x28bb1c(0x1d1)](max, (sum + j[a0_0x28bb1c(0x1cf)]()) * n);
  }
  console[a0_0x28bb1c(0x1d0)](max);
}
function __DECODE_0__(fJiAOj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1c5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(fJiAOj, key);
}
function __STRING_ARRAY__() {
  var _0xc087de = ['6bksFEH', '1723717pMBpsD', 'map', '11896528EwelPn', 'split', '541887hbKKYc', '6501593yryEor', 'reduce', 'readFileSync', '4229650ENJteD', 'shift', 'log', 'max', '/dev/stdin', '1055826qWoJvj', '2383844juNKmN', 'length', '2KuEBKy', 'sort'];
  __STRING_ARRAY__ = function () {
    return _0xc087de;
  };
  return __STRING_ARRAY__();
}
