(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x1b6)) / 0x1 + parseInt(__DECODE_0__(0x1af)) / 0x2 * (parseInt(__DECODE_0__(0x1b2)) / 0x3) + -parseInt(__DECODE_0__(0x1b5)) / 0x4 * (-parseInt(__DECODE_0__(0x1ab)) / 0x5) + parseInt(__DECODE_0__(0x1ad)) / 0x6 * (-parseInt(__DECODE_0__(0x1b4)) / 0x7) + -parseInt(__DECODE_0__(0x1b0)) / 0x8 + parseInt(__DECODE_0__(0x1ac)) / 0x9 + -parseInt(__DECODE_0__(0x1ae)) / 0xa;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x89d85);
function __DECODE_0__(eKbkzk, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1aa;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(eKbkzk, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x1b3)]('\x0a');
  input = input[0x0];
  switch (input) {
    case 'A':
      {
        console[__DECODE_0__(0x1b1)]('T');
        return;
      }
    case 'T':
      {
        console[__DECODE_0__(0x1b1)]('A');
        return;
      }
    case 'C':
      {
        console[__DECODE_0__(0x1b1)]('G');
        return;
      }
    case 'G':
      {
        console[__DECODE_0__(0x1b1)]('C');
        return;
      }
    default:
      {
        return;
      }
  }
}
Main(require('fs')[__DECODE_0__(0x1aa)]('/dev/stdin', 'utf8'));
function __STRING_ARRAY__() {
  var _0x800e04 = ['60wjpEeQ', '2991830BRPKGC', '2kAeAbt', '5140040MFGVdv', 'log', '908502qiuoQi', 'split', '700931VSoaAn', '4QHBoXJ', '1115575KFoLII', 'readFileSync', '3046325FRmZBb', '4319613ijYXiL'];
  __STRING_ARRAY__ = function () {
    return _0x800e04;
  };
  return __STRING_ARRAY__();
}
