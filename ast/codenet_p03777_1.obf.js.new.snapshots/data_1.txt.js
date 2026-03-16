var a0_0xf518ef = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x1655b8 = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x1655b8(0x140)) / 0x1 * (-parseInt(_0x1655b8(0x143)) / 0x2) + parseInt(_0x1655b8(0x142)) / 0x3 + -parseInt(_0x1655b8(0x13b)) / 0x4 * (-parseInt(_0x1655b8(0x13f)) / 0x5) + -parseInt(_0x1655b8(0x138)) / 0x6 + -parseInt(_0x1655b8(0x13d)) / 0x7 + parseInt(_0x1655b8(0x141)) / 0x8 + parseInt(_0x1655b8(0x13e)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xb2c45);
function Main(input) {
  var _0x30c136 = __DECODE_0__;
  input = input['split']('\x20');
  var a = String(input[0x0]);
  var b = String(input[0x1]);
  if (a === 'H' && b === 'H' || a === 'D' && b === 'D') {
    console[_0x30c136(0x139)]('H');
  } else {
    console[_0x30c136(0x139)]('D');
  }
}
function __DECODE_0__(hLpwGj, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x138;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(hLpwGj, key);
}
Main(require('fs')['readFileSync'](a0_0xf518ef(0x13a), a0_0xf518ef(0x13c)));
function __STRING_ARRAY__() {
  var _0x4f49e7 = ['375416QSzOdn', '1332786lJAErh', '124262qUhpIU', '5646618gjQLCS', 'log', '/dev/stdin', '10956ALRJgV', 'utf8', '7974414MNPEaE', '6375384FjCyEJ', '1470iRVEer', '13RlkIfK'];
  __STRING_ARRAY__ = function () {
    return _0x4f49e7;
  };
  return __STRING_ARRAY__();
}
