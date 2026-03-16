(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1e3)) / 0x1 * (-parseInt(__DECODE_0__(0x1ee)) / 0x2) + -parseInt(__DECODE_0__(0x1de)) / 0x3 * (parseInt(__DECODE_0__(0x1e1)) / 0x4) + parseInt(__DECODE_0__(0x1eb)) / 0x5 + -parseInt(__DECODE_0__(0x1ed)) / 0x6 + parseInt(__DECODE_0__(0x1e4)) / 0x7 * (-parseInt(__DECODE_0__(0x1e0)) / 0x8) + parseInt(__DECODE_0__(0x1df)) / 0x9 + -parseInt(__DECODE_0__(0x1e5)) / 0xa * (-parseInt(__DECODE_0__(0x1ea)) / 0xb);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0xc3ec3);
function __DECODE_0__(GlcFjO, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1de;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(GlcFjO, key);
}
function main(input) {
  var R = input[0x0] - 0x0;
  if (R < 0x4b0) {
    console[__DECODE_0__(0x1e6)](__DECODE_0__(0x1e8));
  } else {
    if (R < 0xaf0) {
      console[__DECODE_0__(0x1e6)](__DECODE_0__(0x1ec));
    } else {
      console[__DECODE_0__(0x1e6)](__DECODE_0__(0x1e7));
    }
  }
}
function __STRING_ARRAY__() {
  var _0x483118 = ['3110hlhYXu', 'log', 'AGC', 'ABC', 'split', '18062WNkXGP', '4976810aASKOD', 'ARC', '7922664LOREGL', '2tBhDSy', 'trim', '3QbppIw', '5843718XJBuNN', '16jhTmle', '1723672iFfkho', 'readFileSync', '554051upDLFI', '544306IfOXUd'];
  __STRING_ARRAY__ = function () {
    return _0x483118;
  };
  return __STRING_ARRAY__();
}
main(require('fs')[__DECODE_0__(0x1e2)]('/dev/stdin', 'utf8')[__DECODE_0__(0x1ef)]()[__DECODE_0__(0x1e9)]('\x0a'));
