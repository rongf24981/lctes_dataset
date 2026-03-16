(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x129)) / 0x1 + -parseInt(__DECODE_0__(0x12d)) / 0x2 + -parseInt(__DECODE_0__(0x127)) / 0x3 * (-parseInt(__DECODE_0__(0x12b)) / 0x4) + parseInt(__DECODE_0__(0x131)) / 0x5 * (parseInt(__DECODE_0__(0x12e)) / 0x6) + parseInt(__DECODE_0__(0x12f)) / 0x7 * (parseInt(__DECODE_0__(0x12c)) / 0x8) + -parseInt(__DECODE_0__(0x128)) / 0x9 + -parseInt(__DECODE_0__(0x132)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xe6780);
function __STRING_ARRAY__() {
  var _0x363d93 = ['log', '2155swOoJQ', '7938160LbwfFL', 'split', 'sort', '1497QwMTwS', '15124797VTPElN', '507482qCSxij', 'readFileSync', '6044KzuQZU', '104XjMIca', '1928120JmnuBI', '26058DBGcQh', '672595fQNIuF'];
  __STRING_ARRAY__ = function () {
    return _0x363d93;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(kZWBqw, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x125;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(kZWBqw, key);
}
function main(input) {
  abc = input[__DECODE_0__(0x125)]('\x20');
  abc = abc[__DECODE_0__(0x126)]();
  a = '';
  a += abc[0x2];
  a += abc[0x1];
  a = parseInt(a, 0xa);
  b = parseInt(abc[0x0], 0xa);
  console[__DECODE_0__(0x130)](a + b);
}
main(require('fs')[__DECODE_0__(0x12a)]('/dev/stdin', 'utf8'));
