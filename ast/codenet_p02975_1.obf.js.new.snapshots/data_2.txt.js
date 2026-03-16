function __STRING_ARRAY__() {
  var _0x204dd6 = ['utf8', '105oCmhpB', '14502IBCKLW', '258606ZuLLJa', 'split', '236791BtCngz', '237TAsLzJ', '8002664CxGxcJ', '2123346OxOPvn', 'map', 'Yes', '13924NdOcqq', '/dev/stdin', 'readFileSync', '4564890IKnGQB', 'log', '330kNCXOj'];
  __STRING_ARRAY__ = function () {
    return _0x204dd6;
  };
  return __STRING_ARRAY__();
}
(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = parseInt(__DECODE_0__(0x159)) / 0x1 + parseInt(__DECODE_0__(0x15c)) / 0x2 + -parseInt(__DECODE_0__(0x15a)) / 0x3 * (-parseInt(__DECODE_0__(0x15f)) / 0x4) + parseInt(__DECODE_0__(0x162)) / 0x5 + parseInt(__DECODE_0__(0x156)) / 0x6 * (parseInt(__DECODE_0__(0x155)) / 0x7) + -parseInt(__DECODE_0__(0x15b)) / 0x8 + -parseInt(__DECODE_0__(0x157)) / 0x9 * (parseInt(__DECODE_0__(0x164)) / 0xa);
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x8c2bd);
function Main(input) {
  input = input[__DECODE_0__(0x158)]('\x0a');
  var N = input[0x0];
  var a = input[0x1]['split']('\x20');
  var flag = !![];
  a = a[__DECODE_0__(0x15d)](x => parseInt(x));
  for (var i = 0x0; i < N - 0x2; i++) {
    var x = i === 0x0 ? N - 0x1 : i - 0x1;
    if ((a[i + 0x1] ^ a[x]) !== a[i]) {
      flag = ![];
      break;
    }
  }
  var str = flag === !![] ? __DECODE_0__(0x15e) : 'No';
  console[__DECODE_0__(0x163)]('%s', str);
}
function __DECODE_0__(yTaien, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x154;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(yTaien, key);
}
Main(require('fs')[__DECODE_0__(0x161)](__DECODE_0__(0x160), __DECODE_0__(0x154)));
