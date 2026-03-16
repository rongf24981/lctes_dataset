function __DECODE_0__(BsEQDA, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x140;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(BsEQDA, key);
}
function __STRING_ARRAY__() {
  var _0x455b1d = ['5343600wRghBS', '13376TiFDpV', '729XtPvRO', '380fgIWIE', 'utf8', 'split', '10667430RjBNmx', 'readFileSync', '80FWSmpO', 'YES', '78296LglFJq', '605704DaOImM', '84KFlcMu', '82577wbekRz', '1514650bIxMZQ', 'log'];
  __STRING_ARRAY__ = function () {
    return _0x455b1d;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x145)) / 0x1 + parseInt(__DECODE_0__(0x148)) / 0x2 * (-parseInt(__DECODE_0__(0x149)) / 0x3) + parseInt(__DECODE_0__(0x141)) / 0x4 * (parseInt(__DECODE_0__(0x14a)) / 0x5) + -parseInt(__DECODE_0__(0x147)) / 0x6 + -parseInt(__DECODE_0__(0x143)) / 0x7 * (parseInt(__DECODE_0__(0x142)) / 0x8) + parseInt(__DECODE_0__(0x14d)) / 0x9 + parseInt(__DECODE_0__(0x14f)) / 0xa * (parseInt(__DECODE_0__(0x144)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc8fdc);
function Main(input) {
  tmp = input[__DECODE_0__(0x14c)]('\x20');
  a = 0x0;
  b = 0x0;
  c = 0x0;
  d = 0x0;
  for (var i = 0x0; i < 0x4; i++) {
    if (tmp[i] == '1') {
      a = 0x1;
    }
    if (tmp[i] == '9') {
      b = 0x1;
    }
    if (tmp[i] == '7') {
      c = 0x1;
    }
    if (tmp[i] == '4') {
      d = 0x1;
    }
  }
  if (a == 0x1 && b == 0x1 && c == 0x1 && d == 0x1) {
    console[__DECODE_0__(0x146)](__DECODE_0__(0x140));
  } else {
    console[__DECODE_0__(0x146)]('NO');
  }
}
Main(require('fs')[__DECODE_0__(0x14e)]('/dev/stdin', __DECODE_0__(0x14b)));
