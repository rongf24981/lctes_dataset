(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x14f)) / 0x1 + -parseInt(__DECODE_0__(0x14e)) / 0x2 * (-parseInt(__DECODE_0__(0x158)) / 0x3) + -parseInt(__DECODE_0__(0x155)) / 0x4 + -parseInt(__DECODE_0__(0x150)) / 0x5 + -parseInt(__DECODE_0__(0x14b)) / 0x6 + parseInt(__DECODE_0__(0x154)) / 0x7 + parseInt(__DECODE_0__(0x159)) / 0x8 * (parseInt(__DECODE_0__(0x14d)) / 0x9);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xce643);
function __DECODE_0__(DHOzOg, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x14b;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(DHOzOg, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x151)]('\x20');
  var a = parseInt(input[0x0], 0xa);
  var b = parseInt(input[0x1], 0xa);
  var t = parseInt(input[0x2], 0xa);
  console[__DECODE_0__(0x157)]('%d', Math[__DECODE_0__(0x152)]((t + 0.5) / a) * b);
}
Main(require('fs')[__DECODE_0__(0x156)](__DECODE_0__(0x14c), __DECODE_0__(0x153)));
function __STRING_ARRAY__() {
  var _0x40c388 = ['12595761DoZYcT', '71312PmgWOW', '320990jKHInI', '5085215gKdfZK', 'split', 'floor', 'utf8', '8077251JbCKzE', '6358988WyXZcQ', 'readFileSync', 'log', '36XOZsOH', '16RmMrxf', '3645984WdgPEv', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x40c388;
  };
  return __STRING_ARRAY__();
}
