var a0_0x21c17e = __DECODE_0__;
function __DECODE_0__(rLQOTD, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1d5;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(rLQOTD, key);
}
function __STRING_ARRAY__() {
  var _0x3d00b1 = ['230632aNkOKU', 'utf8', 'Yes', '572027ptLEFa', 'split', 'end', 'log', 'stdin', '80844JOLtgo', '9077040tRMesw', '5562004JbRvfP', '54POhTZR', 'setEncoding', '50526fsCFCE', '1583832EqpyRn', '245UQahQr', '198DJjSxe'];
  __STRING_ARRAY__ = function () {
    return _0x3d00b1;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var _0x3ea5ce = __DECODE_0__;
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(_0x3ea5ce(0x1e4)) / 0x1 + -parseInt(_0x3ea5ce(0x1de)) / 0x2 + parseInt(_0x3ea5ce(0x1db)) / 0x3 * (parseInt(_0x3ea5ce(0x1d8)) / 0x4) + parseInt(_0x3ea5ce(0x1df)) / 0x5 * (parseInt(_0x3ea5ce(0x1dd)) / 0x6) + parseInt(_0x3ea5ce(0x1da)) / 0x7 + parseInt(_0x3ea5ce(0x1e1)) / 0x8 * (-parseInt(_0x3ea5ce(0x1e0)) / 0x9) + parseInt(_0x3ea5ce(0x1d9)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x7550a);
process[a0_0x21c17e(0x1d7)]['resume']();
process['stdin'][a0_0x21c17e(0x1dc)](a0_0x21c17e(0x1e2));
var g_input = '';
process['stdin']['on']('data', function (chunk) {
  g_input += chunk;
});
process['stdin']['on'](a0_0x21c17e(0x1d5), function () {
  var _0x139ed8 = a0_0x21c17e;
  Main(g_input[_0x139ed8(0x1e5)](/\r?\n/));
});
function Main(input) {
  var _0x1e588c = a0_0x21c17e;
  if (input[0x0][0x0] === '9' || input[0x0][0x1] === '9') {
    console[_0x1e588c(0x1d6)](_0x1e588c(0x1e3));
  } else {
    console['log']('No');
  }
  return 0x0;
}
