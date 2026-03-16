(function (stringArrayFunction, comparisonValue) {
  var stringArray = stringArrayFunction();
  while (!![]) {
    try {
      var expression = -parseInt(__DECODE_0__(0x1d7)) / 0x1 + parseInt(__DECODE_0__(0x1d9)) / 0x2 * (-parseInt(__DECODE_0__(0x1d5)) / 0x3) + -parseInt(__DECODE_0__(0x1d3)) / 0x4 * (parseInt(__DECODE_0__(0x1cd)) / 0x5) + parseInt(__DECODE_0__(0x1d6)) / 0x6 * (parseInt(__DECODE_0__(0x1da)) / 0x7) + -parseInt(__DECODE_0__(0x1dc)) / 0x8 * (parseInt(__DECODE_0__(0x1cb)) / 0x9) + parseInt(__DECODE_0__(0x1cc)) / 0xa + parseInt(__DECODE_0__(0x1cf)) / 0xb;
      if (expression === comparisonValue) {
        break;
      } else {
        stringArray['push'](stringArray['shift']());
      }
    } catch (e) {
      stringArray['push'](stringArray['shift']());
    }
  }
})(__STRING_ARRAY__, 0x479fd);
function __STRING_ARRAY__() {
  var _0x104b23 = ['1114414pZfQmP', '/dev/stdin', '97136TCeRzf', '234ZhAyjX', '4465260JDNYLs', '2912635dLziWj', 'sort', '8526133psOroz', 'trim', 'length', 'log', '4eacsIf', 'utf8', '27wCWsgG', '6qZUOHh', '110957ShQCit', 'split', '17396oiafZJ'];
  __STRING_ARRAY__ = function () {
    return _0x104b23;
  };
  return __STRING_ARRAY__();
}
function __DECODE_0__(OOufbl, key) {
  var stringArray = __STRING_ARRAY__();
  __DECODE_0__ = function (index, key) {
    index = index - 0x1cb;
    var value = stringArray[index];
    return value;
  };
  return __DECODE_0__(OOufbl, key);
}
function Main(input) {
  input = input[__DECODE_0__(0x1d8)]('\x0a');
  var N = [];
  var arr = input[0x1]['split']('\x20')['map'](Number);
  for (var i = 0x0; i < arr[__DECODE_0__(0x1d1)]; i++) {
    N['push']([arr[i], i + 0x1]);
  }
  N = N[__DECODE_0__(0x1ce)](function (a, b) {
    return a[0x0] - b[0x0];
  });
  var ans = '';
  for (i = 0x0; i < N[__DECODE_0__(0x1d1)]; i++) {
    ans += N[i][0x1];
    ans += '\x20';
  }
  console[__DECODE_0__(0x1d2)](ans[__DECODE_0__(0x1d0)]());
}
Main(require('fs')['readFileSync'](__DECODE_0__(0x1db), __DECODE_0__(0x1d4))['trim']());
