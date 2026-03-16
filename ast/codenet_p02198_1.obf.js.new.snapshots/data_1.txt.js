function __DECODE_0__(ZqYldV, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x72;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(ZqYldV, key);
}
var a0_0x2fef85 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x572695 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x572695(0x81)) / 0x1 + -parseInt(_0x572695(0x77)) / 0x2 * (parseInt(_0x572695(0x79)) / 0x3) + -parseInt(_0x572695(0x7c)) / 0x4 + parseInt(_0x572695(0x7a)) / 0x5 + -parseInt(_0x572695(0x73)) / 0x6 * (-parseInt(_0x572695(0x72)) / 0x7) + parseInt(_0x572695(0x7b)) / 0x8 + parseInt(_0x572695(0x7d)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xd16e2);
function __STRING_ARRAY__() {
  var _0x59a05e = ['60DtKenR', 'utf8', '/dev/stdin', 'readFileSync', '2rSzvQw', 'map', '4853091jOdyqb', '1723970CVwneE', '13465872YSYfwW', '4385032VVeWOX', '25200981zYoSPG', 'split', 'log', 'trim', '1374246OYDeQr', '82523plIwvJ'];
  __STRING_ARRAY__ = function () {
    return _0x59a05e;
  };
  return __STRING_ARRAY__();
}
var input = require('fs')[a0_0x2fef85(0x76)](a0_0x2fef85(0x75), a0_0x2fef85(0x74));
var [a, b] = input[a0_0x2fef85(0x80)]()[a0_0x2fef85(0x7e)]('\x20')[a0_0x2fef85(0x78)](Number);
console[a0_0x2fef85(0x7f)](a * b);
