(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x10e)) / 0x1 * (parseInt(__DECODE_0__(0x109)) / 0x2) + parseInt(__DECODE_0__(0x10c)) / 0x3 + -parseInt(__DECODE_0__(0x10a)) / 0x4 * (-parseInt(__DECODE_0__(0x113)) / 0x5) + parseInt(__DECODE_0__(0x10b)) / 0x6 + parseInt(__DECODE_0__(0x114)) / 0x7 + parseInt(__DECODE_0__(0x110)) / 0x8 * (parseInt(__DECODE_0__(0x115)) / 0x9) + -parseInt(__DECODE_0__(0x10f)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x1b3ec);
function Main(input) {
  var tmp = String(input);
  var truecount = 0x0;
  if (tmp[0x2] == tmp[0x0]) {
    console[__DECODE_0__(0x112)](__DECODE_0__(0x111));
  } else {
    console[__DECODE_0__(0x112)]('No');
  }
}
function __DECODE_0__(OPdMVc, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x108;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OPdMVc, key);
}
Main(require('fs')[__DECODE_0__(0x116)](__DECODE_0__(0x10d), __DECODE_0__(0x108)));
function __STRING_ARRAY__() {
  var _0x3baa80 = ['12773yuQBxH', '3773360ndBOFT', '784Wfhfob', 'Yes', 'log', '135hQtBGz', '604079lDtnGQ', '5103hJCLSU', 'readFileSync', 'utf8', '10qyjUFR', '32920wVMpKO', '96798COwVcq', '517773KZTvIE', '/dev/stdin'];
  __STRING_ARRAY__ = function () {
    return _0x3baa80;
  };
  return __STRING_ARRAY__();
}
