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
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1e4)) / 0x1 + -parseInt(__DECODE_0__(0x1de)) / 0x2 + parseInt(__DECODE_0__(0x1db)) / 0x3 * (parseInt(__DECODE_0__(0x1d8)) / 0x4) + parseInt(__DECODE_0__(0x1df)) / 0x5 * (parseInt(__DECODE_0__(0x1dd)) / 0x6) + parseInt(__DECODE_0__(0x1da)) / 0x7 + parseInt(__DECODE_0__(0x1e1)) / 0x8 * (-parseInt(__DECODE_0__(0x1e0)) / 0x9) + parseInt(__DECODE_0__(0x1d9)) / 0xa;
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
process[__DECODE_0__(0x1d7)]['resume']();
process['stdin'][__DECODE_0__(0x1dc)](__DECODE_0__(0x1e2));
var g_input = '';
process['stdin']['on']('data', function (chunk) {
  g_input += chunk;
});
process['stdin']['on'](__DECODE_0__(0x1d5), function () {
  Main(g_input[__DECODE_0__(0x1e5)](/\r?\n/));
});
function Main(input) {
  if (input[0x0][0x0] === '9' || input[0x0][0x1] === '9') {
    console[__DECODE_0__(0x1d6)](__DECODE_0__(0x1e3));
  } else {
    console['log']('No');
  }
  return 0x0;
}
