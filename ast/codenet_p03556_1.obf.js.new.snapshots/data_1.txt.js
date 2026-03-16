var a0_0x344711 = __DECODE_0__;
(function (stringArrayFunction, comparisonValue) {
  var _0x20895c = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(_0x20895c(0x131)) / 0x1 + -parseInt(_0x20895c(0x137)) / 0x2 + parseInt(_0x20895c(0x138)) / 0x3 * (parseInt(_0x20895c(0x12f)) / 0x4) + parseInt(_0x20895c(0x136)) / 0x5 * (parseInt(_0x20895c(0x133)) / 0x6) + -parseInt(_0x20895c(0x13a)) / 0x7 + parseInt(_0x20895c(0x12e)) / 0x8 + -parseInt(_0x20895c(0x139)) / 0x9;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xbe947);
function Main(input) {
  var _0x9070e3 = __DECODE_0__;
  input = input[_0x9070e3(0x134)]('\x0a');
  var n = parseInt(input[0x0]);
  var ans = Math['pow'](Math['floor'](Math[_0x9070e3(0x132)](n)), 0x2);
  console[_0x9070e3(0x130)]('%s', ans);
}
function __DECODE_0__(FLjtGB, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x12d;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(FLjtGB, key);
}
function __STRING_ARRAY__() {
  var _0x55b289 = ['548CQNRsr', 'log', '45701vlNOBz', 'sqrt', '12wZMKCk', 'split', 'readFileSync', '1207985NezBWR', '1580798iSAcFm', '12837bQAkFM', '2984211jGOBYw', '1676101CftopM', '/dev/stdin', 'utf8', '8215344iMGMAA'];
  __STRING_ARRAY__ = function () {
    return _0x55b289;
  };
  return __STRING_ARRAY__();
}
Main(require('fs')[a0_0x344711(0x135)](a0_0x344711(0x13b), a0_0x344711(0x12d)));
