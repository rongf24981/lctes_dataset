(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x93)) / 0x1 + parseInt(__DECODE_0__(0x8d)) / 0x2 * (parseInt(__DECODE_0__(0x8e)) / 0x3) + parseInt(__DECODE_0__(0x92)) / 0x4 * (-parseInt(__DECODE_0__(0x95)) / 0x5) + parseInt(__DECODE_0__(0x98)) / 0x6 + parseInt(__DECODE_0__(0x91)) / 0x7 + -parseInt(__DECODE_0__(0x8c)) / 0x8 * (-parseInt(__DECODE_0__(0x9c)) / 0x9) + -parseInt(__DECODE_0__(0x9a)) / 0xa * (parseInt(__DECODE_0__(0x9b)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x4467b);
function Main(input) {
  var inp = input['split']('\x20');
  var a = inp[0x0];
  var b = inp[0x1];
  var n = parseInt(a + b);
  var flsqn = Math[__DECODE_0__(0x99)](Math[__DECODE_0__(0x94)](n));
  flsqn * flsqn === n ? console[__DECODE_0__(0x9d)](__DECODE_0__(0x97)) : console[__DECODE_0__(0x9d)]('No');
}
function __DECODE_0__(rjNIwB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x8c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rjNIwB, key);
}
Main(require('fs')[__DECODE_0__(0x8f)](__DECODE_0__(0x90), __DECODE_0__(0x96)));
function __STRING_ARRAY__() {
  var _0x2604df = ['1068zNVmfJ', 'readFileSync', '/dev/stdin', '478611XgjeQR', '44276yLKZNt', '481983VdxHXF', 'sqrt', '120AMkSfU', 'utf8', 'Yes', '66156AHDXwt', 'floor', '157580JprFyK', '77xgxwOu', '178569IwXVTZ', 'log', '24rXGawb', '198QChiUw'];
  __STRING_ARRAY__ = function () {
    return _0x2604df;
  };
  return __STRING_ARRAY__();
}
