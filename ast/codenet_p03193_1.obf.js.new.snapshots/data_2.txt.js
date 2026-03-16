function __DECODE_0__(ySqRCL, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xa8;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ySqRCL, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0xb6)) / 0x1 * (-parseInt(__DECODE_0__(0xab)) / 0x2) + parseInt(__DECODE_0__(0xae)) / 0x3 + parseInt(__DECODE_0__(0xb3)) / 0x4 + -parseInt(__DECODE_0__(0xb5)) / 0x5 + -parseInt(__DECODE_0__(0xa9)) / 0x6 + parseInt(__DECODE_0__(0xac)) / 0x7 * (parseInt(__DECODE_0__(0xaf)) / 0x8) + parseInt(__DECODE_0__(0xad)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8e956);
function Main(input) {
  input = input[__DECODE_0__(0xb2)]('\x0a');
  var mem = input[0x0][__DECODE_0__(0xb2)]('\x20')[__DECODE_0__(0xb0)](Number);
  var sum = 0x0;
  for (var i = 0x1; i < input[__DECODE_0__(0xa8)]; i++) {
    var n = input[i]['split']('\x20')[__DECODE_0__(0xb0)](Number);
    if (n[0x0] >= mem[0x1] && n[0x1] >= mem[0x2]) {
      sum++;
    }
  }
  console[__DECODE_0__(0xb4)](sum);
}
Main(require('fs')['readFileSync'](__DECODE_0__(0xb1), 'utf8')[__DECODE_0__(0xaa)]());
function __STRING_ARRAY__() {
  var _0x5e2cde = ['169256KSmIUT', 'log', '2649370GaipGm', '824722tfRRxX', 'length', '6510384AEfZXq', 'trim', '2YwYWJW', '99505vNaFEW', '20835279NvQxby', '1913721BTeCTo', '16RfFrOz', 'map', '/dev/stdin', 'split'];
  __STRING_ARRAY__ = function () {
    return _0x5e2cde;
  };
  return __STRING_ARRAY__();
}
