function __STRING_ARRAY__() {
  var _0x165643 = ['utf8', '482335WZIeQH', 'split', '138156iLQuIR', '1207704ZbSuvU', '8WMPgrE', 'log', '26276XvPRHL', '/dev/stdin', '299201kEBPrS', '2825595fIkXoc', '175350vHkjuH', '18sMEYRz'];
  __STRING_ARRAY__ = function () {
    return _0x165643;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(cvVRJU, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xc5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(cvVRJU, key);
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xcc)) / 0x1 + parseInt(__DECODE_0__(0xc8)) / 0x2 + -parseInt(__DECODE_0__(0xd1)) / 0x3 * (parseInt(__DECODE_0__(0xc6)) / 0x4) + parseInt(__DECODE_0__(0xcf)) / 0x5 + -parseInt(__DECODE_0__(0xcd)) / 0x6 * (-parseInt(__DECODE_0__(0xca)) / 0x7) + -parseInt(__DECODE_0__(0xc5)) / 0x8 + parseInt(__DECODE_0__(0xcb)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x208fc);
const Main = input => {
  const tmp = input[__DECODE_0__(0xd0)]('\x20');
  var a = parseInt(tmp[0x0]);
  var b = parseInt(tmp[0x1]);
  var c = parseInt(tmp[0x2]);
  if (a === b && b !== c || b === c && c !== a || c === a && b !== c) {
    console[__DECODE_0__(0xc7)]('Yes');
  } else {
    console[__DECODE_0__(0xc7)]('No');
  }
};
Main(require('fs')['readFileSync'](__DECODE_0__(0xc9), __DECODE_0__(0xce)));
