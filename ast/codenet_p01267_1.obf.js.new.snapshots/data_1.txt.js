var a0_0x70787 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x5dacc7 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x5dacc7(0x1ce)) / 0x1 * (parseInt(_0x5dacc7(0x1d8)) / 0x2) + -parseInt(_0x5dacc7(0x1d6)) / 0x3 + parseInt(_0x5dacc7(0x1d2)) / 0x4 * (-parseInt(_0x5dacc7(0x1d5)) / 0x5) + parseInt(_0x5dacc7(0x1cd)) / 0x6 + -parseInt(_0x5dacc7(0x1dd)) / 0x7 + -parseInt(_0x5dacc7(0x1d3)) / 0x8 + parseInt(_0x5dacc7(0x1d4)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x5f90c);
function __DECODE_0__(iyMkyM, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(iyMkyM, key);
}
var input = require('fs')['readFileSync'](a0_0x70787(0x1db), a0_0x70787(0x1d0));
var Arr = input[a0_0x70787(0x1d7)](/\n$/, '')[a0_0x70787(0x1cc)]('\x0a');
while (!![]) {
  var arr = Arr[a0_0x70787(0x1cf)]()['split']('\x20')['map'](Number);
  if (arr['join']('') == a0_0x70787(0x1cb)) {
    break;
  }
  var y = Arr[a0_0x70787(0x1cf)]()[a0_0x70787(0x1cc)]('\x20')[a0_0x70787(0x1dc)](Number);
  (function (N, A, B, C, X) {
    var _0x240582 = a0_0x70787;
    var i = 0x0;
    while (!![]) {
      if (y[0x0] == X) {
        y[_0x240582(0x1cf)]();
      }
      if (y[_0x240582(0x1da)] == 0x0) {
        console[_0x240582(0x1d9)](i);
        break;
      }
      X = (A * X + B) % C;
      i++;
      if (i == 0x2711) {
        console[_0x240582(0x1d9)](-0x1);
        break;
      }
    }
  })[a0_0x70787(0x1d1)](null, arr);
}
function __STRING_ARRAY__() {
  var _0xc6a4b7 = ['map', '449351eaQhmG', '00000', 'split', '3835188GJcakQ', '1pNtzge', 'shift', 'utf8', 'apply', '16ikNVVA', '6194544futxPD', '12626289VFWOiU', '270090sjgOLD', '804390uuTVzd', 'replace', '655940fAqVzi', 'log', 'length', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0xc6a4b7;
  };
  return __STRING_ARRAY__();
}
