(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1a8)) / 0x1 + -parseInt(__DECODE_0__(0x1aa)) / 0x2 + parseInt(__DECODE_0__(0x19d)) / 0x3 + parseInt(__DECODE_0__(0x1a2)) / 0x4 + -parseInt(__DECODE_0__(0x1a6)) / 0x5 * (parseInt(__DECODE_0__(0x1a7)) / 0x6) + parseInt(__DECODE_0__(0x1a4)) / 0x7 * (parseInt(__DECODE_0__(0x1a9)) / 0x8) + parseInt(__DECODE_0__(0x19e)) / 0x9 * (parseInt(__DECODE_0__(0x1a3)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xdcd3e);
function __STRING_ARRAY__() {
  var _0x5440b4 = ['log', '2135457SJFoAX', '9ZmFbyJ', 'split', '/dev/stdin', 'Yes', '1889932SjBpcR', '29025470byFQSg', '63EnkkAN', 'readFileSync', '127065zPZdIt', '414OqQASu', '1597573IAQWyW', '1246088DTVxQM', '2466236MpRPOF'];
  __STRING_ARRAY__ = function () {
    return _0x5440b4;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(VjccNq, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x19c;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(VjccNq, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x19f)]('\x0a');
  var n = input[0x0];
  var s = 'No';
  if (n[0x1] == n[0x2]) {
    if (n[0x0] == n[0x1] || n[0x2] == n[0x3]) {
      s = __DECODE_0__(0x1a1);
    }
  }
  console[__DECODE_0__(0x19c)]('%s', s);
}
Main(require('fs')[__DECODE_0__(0x1a5)](__DECODE_0__(0x1a0), 'utf8'));
