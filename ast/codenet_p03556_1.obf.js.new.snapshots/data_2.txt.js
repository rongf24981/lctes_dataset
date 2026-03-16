(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x131)) / 0x1 + -parseInt(__DECODE_0__(0x137)) / 0x2 + parseInt(__DECODE_0__(0x138)) / 0x3 * (parseInt(__DECODE_0__(0x12f)) / 0x4) + parseInt(__DECODE_0__(0x136)) / 0x5 * (parseInt(__DECODE_0__(0x133)) / 0x6) + -parseInt(__DECODE_0__(0x13a)) / 0x7 + parseInt(__DECODE_0__(0x12e)) / 0x8 + -parseInt(__DECODE_0__(0x139)) / 0x9;
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
  input = input[__DECODE_0__(0x134)]('\x0a');
  var n = parseInt(input[0x0]);
  var ans = Math['pow'](Math['floor'](Math[__DECODE_0__(0x132)](n)), 0x2);
  console[__DECODE_0__(0x130)]('%s', ans);
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
Main(require('fs')[__DECODE_0__(0x135)](__DECODE_0__(0x13b), __DECODE_0__(0x12d)));
