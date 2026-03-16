(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0xf8)) / 0x1 * (-parseInt(__DECODE_0__(0xf2)) / 0x2) + parseInt(__DECODE_0__(0xee)) / 0x3 + -parseInt(__DECODE_0__(0xf4)) / 0x4 + -parseInt(__DECODE_0__(0xf9)) / 0x5 + parseInt(__DECODE_0__(0xf6)) / 0x6 * (-parseInt(__DECODE_0__(0xf1)) / 0x7) + parseInt(__DECODE_0__(0xfa)) / 0x8 + parseInt(__DECODE_0__(0xf5)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x71b08);
function main(input) {
  var inputA = input[__DECODE_0__(0xfd)]()[__DECODE_0__(0xf3)]('');
  var sum = 0x0;
  for (var i = 0x0; i < inputA['length']; i++) {
    sum += parseInt(inputA[i]);
  }
  if (parseInt(input) % sum == 0x0) {
    console[__DECODE_0__(0xf0)](__DECODE_0__(0xfc));
  } else {
    console[__DECODE_0__(0xf0)]('No');
  }
}
function __STRING_ARRAY__() {
  var _0x17ba58 = ['readFileSync', 'log', '5482834hCYpli', '2mdrZut', 'split', '1244924QkqtmI', '7568910WosxHY', '6HYoOwH', 'utf8', '181636ZzCikg', '4360820qZccGo', '6956032hHfPRA', '/dev/stdin', 'Yes', 'toString', '1620597HOmrke'];
  __STRING_ARRAY__ = function () {
    return _0x17ba58;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(KGjejO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0xee;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(KGjejO, key);
}
main(require('fs')[__DECODE_0__(0xef)](__DECODE_0__(0xfb), __DECODE_0__(0xf7)));
