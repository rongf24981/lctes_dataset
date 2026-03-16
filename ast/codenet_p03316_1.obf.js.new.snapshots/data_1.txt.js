var a0_0x31bf36 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x4fe33c = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x4fe33c(0xf8)) / 0x1 * (-parseInt(_0x4fe33c(0xf2)) / 0x2) + parseInt(_0x4fe33c(0xee)) / 0x3 + -parseInt(_0x4fe33c(0xf4)) / 0x4 + -parseInt(_0x4fe33c(0xf9)) / 0x5 + parseInt(_0x4fe33c(0xf6)) / 0x6 * (-parseInt(_0x4fe33c(0xf1)) / 0x7) + parseInt(_0x4fe33c(0xfa)) / 0x8 + parseInt(_0x4fe33c(0xf5)) / 0x9;
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
  var _0xf189e1 = __DECODE_0__;
  var inputA = input[_0xf189e1(0xfd)]()[_0xf189e1(0xf3)]('');
  var sum = 0x0;
  for (var i = 0x0; i < inputA['length']; i++) {
    sum += parseInt(inputA[i]);
  }
  if (parseInt(input) % sum == 0x0) {
    console[_0xf189e1(0xf0)](_0xf189e1(0xfc));
  } else {
    console[_0xf189e1(0xf0)]('No');
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
main(require('fs')[a0_0x31bf36(0xef)](a0_0x31bf36(0xfb), a0_0x31bf36(0xf7)));
